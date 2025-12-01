# Posts Board Application

An Angular 17 application for managing and filtering posts with location-based search and post type categorization.

![Application Screenshot](image.png)

## Features

- 📝 Create, edit, and delete posts
- 🔍 Search posts by location using OpenStreetMap Nominatim API
- 🏷️ Filter posts by type (Rent, Buy & Sell, Events, Travel)
- 👤 User-based ownership and permissions
- 🗺️ Location-based filtering with hierarchical matching (country/city/street)
- 🎨 Material Design UI with Angular Material

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yaronmil/home-exercise-client.git
cd home-exercise-client/client
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

### Development Server

Start the development server:

```bash
npm start
# or
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload when you make changes to the source files.

### Backend API

The application expects a backend API running at `http://localhost:5178/api`. Make sure your backend server is running before starting the client.

## Project Structure

```
src/
├── app/
│   ├── main-layout/
│   │   ├── board/                    # Main posts board
│   │   │   ├── models/              # Post model and types
│   │   │   ├── create-post/         # Create post component
│   │   │   ├── edit-post-dialog/    # Edit post dialog
│   │   │   ├── post-search/         # Search and filter components
│   │   │   │   └── location-search/ # Location autocomplete
│   │   │   ├── board.component.*    # Board container
│   │   │   └── board.service.ts     # HTTP service
│   │   ├── user-selector/           # User selection component
│   │   └── main-layout.component.*  # Layout with toolbar
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── user.service.ts
│   └── interceptors/
│       └── error.interceptor.ts
├── environments/
│   ├── environment.ts
│   └── environment.prod.ts
└── assets/
```

## Available Scripts

- `npm start` - Run development server
- `npm test` - Execute unit tests via Karma
- `ng build` - Build the project for production
- `ng generate component component-name` - Generate a new component

## Technologies Used

- **Angular 17** - Standalone components with signals
- **Angular Material 17** - UI components
- **RxJS 7** - Reactive programming
- **TypeScript** - Type-safe development
- **Nominatim OpenStreetMap API** - Location search

## API Endpoints

The application communicates with the following endpoints:

- `GET /api/posts` - Fetch all posts
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is licensed under the MIT License.
