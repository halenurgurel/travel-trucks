# TravelTrucks

A campervan rental web application for browsing, filtering, and booking campervans across Ukraine.

## Features

- Browse all available campervans with a paginated catalog (4 per page)
- Filter by location, vehicle type, engine, transmission, and amenities (AC, kitchen, TV, etc.)
- Save favourite campervans — persists across page reloads
- View detailed campervan info: photo gallery with lightbox, specs, user reviews, and booking form
- Book a campervan with date selection and instant confirmation notification

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Redux Toolkit | Global state management |
| React Router v7 | Client-side routing |
| Axios | API requests |
| Tailwind CSS v4 | Utility-first styling |
| MUI Icons | Icon library |
| Vite | Build tool |
| Sonner | Toast notifications |
| react-photo-view | Image lightbox |
| react-day-picker | Date picker |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

## API

Data is fetched from a MockAPI endpoint:

```
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

Filtering is handled server-side via query parameters (`location`, `form`, `engine`, `transmission`, `AC`, `kitchen`, etc.).

## Author

Halenur Gurel
