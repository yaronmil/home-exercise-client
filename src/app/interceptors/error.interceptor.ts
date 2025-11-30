import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const snackBar = inject(MatSnackBar);

  return next(req).pipe(
    catchError((error) => {
      const status = error?.status;
      const problem = error?.error;

      let displayMessage: string | undefined;
      if (problem && typeof problem === 'object') {
        const errors = (problem as any).errors as
          | Record<string, string[]>
          | undefined;
        if (errors && typeof errors === 'object') {
          const messages: string[] = [];
          for (const key of Object.keys(errors)) {
            const arr = errors[key];
            if (Array.isArray(arr) && arr.length) {
              messages.push(arr[0]);
            }
          }
          if (messages.length) {
            displayMessage = messages.join('\n');
          }
        }
        if (
          !displayMessage &&
          typeof (problem as any).title === 'string' &&
          (problem as any).title
        ) {
          displayMessage = (problem as any).title;
        }
      }
      if (!displayMessage) {
        displayMessage = error?.message || 'Unexpected error';
      }
      const display = status ? `${status}: ${displayMessage}` : displayMessage!;

      snackBar.open(display, 'Dismiss', {
        duration: 5000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['error-snackbar'],
      });

      return throwError(() => error);
    })
  );
};
