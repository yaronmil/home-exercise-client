import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from './models/post.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  private apiUrl = `${environment.apiBaseUrl}/posts`;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<PostModel[]> {
    return this.http.get<PostModel[]>(this.apiUrl);
  }

  createPost(post: PostModel): Observable<PostModel> {
    return this.http.post<PostModel>(this.apiUrl, post);
  }

  updatePost(post: PostModel): Observable<PostModel> {
    return this.http.put<PostModel>(`${this.apiUrl}`, post);
  }

  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
