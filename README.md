# Vidia Frontend

Vidia Frontend is a React + Vite web application inspired by a modern video-sharing platform. It allows users to sign up, log in, browse videos, upload content, like videos, manage playlists, view watch history, and interact with a tweet-style feed.

This project works as the client-side interface for a backend API and is designed for a clean, responsive UI with Redux state management and React Router navigation.

## Features

- User authentication: login, register, logout
- Video feed and browsing interface
- Video player page with like interaction
- Upload videos from the frontend
- Playlist creation and management
- Watch history and profile tabs
- Liked videos and personal dashboard
- Tweet-style social feed for user posts
- Responsive layout with sidebar and header navigation

## Tech Stack

- React 19
- Vite
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS
- Lucide React
- ESLint

## Project Structure

```bash
src/
├── api/                  # API call wrappers
│   ├── auth.api.js
│   ├── axios.js
│   ├── comment.api.js
│   ├── like.api.js
│   ├── playlist.api.js
│   ├── tweet.api.js
│   └── video.api.js
├── assets/              # Static assets like logos and images
├── component/           # Reusable UI components
│   ├── comment/
│   ├── core/
│   ├── layout/
│   ├── playlist/
│   ├── profile/
│   ├── tweet/
│   └── video/
├── hooks/               # Custom hooks
├── pages/               # Route-level screens
│   └── auth/
├── routes/              # Route protection helpers
├── store/               # Redux slices and store setup
├── utils/               # Utility helpers
├── App.jsx
├── index.css
├── index.js
├── main.jsx
└── ...
```

## Prerequisites

Before running the project, make sure you have installed:

- Node.js (v18 or later recommended)
- npm or yarn
- A running backend API compatible with the frontend requests

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd Vidia_Frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root if needed:

```bash
VITE_API_URL=https://your-backend-url/api/v1
```

If `VITE_API_URL` is not provided, the app will fall back to the default backend URL configured in `src/api/axios.js`.

## Run the App

### Development mode

```bash
npm run dev
```

This starts the Vite development server and usually opens the app in the browser at a local port such as:

```bash
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Main Routes

The app includes routes such as:

- `/` - landing page / start screen
- `/login` - login page
- `/register` - signup page
- `/home` - main video feed
- `/profile` - profile dashboard
- `/profile/history` - watch history
- `/watch/:videoId` - video player page
- `/upload` - video upload page
- `/playlist/:playlistId` - playlist details
- `/twitter` - tweet feed

## API Configuration

The frontend communicates with the backend through the Axios instance in `src/api/axios.js`.

Example default base URL:

```js
https://backend-t39j.onrender.com/api/v1
```

You can override it using the `VITE_API_URL` environment variable.

## Notes

- Authentication state is managed using Redux.
- The app uses route-based rendering for the main screens.
- Some components are designed to integrate directly with the backend endpoints for users, videos, playlists, likes, and tweets.
- If the backend is not running or the API endpoints do not match, the UI may show errors or empty data states.

## Scripts

```bash
npm run dev     # start local development server
npm run build   # build for production
npm run preview # preview production build
npm run lint    # run ESLint checks
```

## License

This project does not currently include a license file. If you plan to share or deploy it publicly, add a license as needed.

## Author

Built for a video-sharing / social media app experience using React and Vite.

