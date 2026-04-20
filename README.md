# TravelTrucks

A responsive camper van rental catalog application built with React, Redux Toolkit, and Tailwind CSS v4.

## Features

- Browse camper van listings fetched from a REST API
- Filter by location, camper form, engine type, and transmission
- Paginated listing with a "Load More" button (4 items per page)
- Detailed view page for each camper
- Responsive layout with a slide-in filter drawer on mobile

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 19 | UI framework |
| Redux Toolkit | Global state management |
| React Router v7 | Client-side routing |
| Tailwind CSS v4 | Utility-first styling |
| MUI Icons | Icon library |
| Vite 8 | Build tool |

## Project Structure

```
src/
├── assets/               # Static assets (images)
├── components/
│   ├── AdDetail.jsx      # Camper listing card
│   ├── Button.jsx        # Reusable button / link component
│   ├── FeatureBadge.jsx  # Individual feature badge
│   ├── Filter.jsx        # Sidebar filter panel
│   ├── Input.jsx         # Reusable input field
│   └── Loader.jsx        # Spinner component
├── constants/
│   ├── api.js            # API base URL
│   └── features.jsx      # Feature icons and form label mappings
├── layout/
│   └── Layout.jsx        # Shared page layout with Navbar
├── navigation/
│   └── Navbar.jsx        # Top navigation bar
├── pages/
│   ├── HomePage.jsx      # Landing page with hero image
│   ├── CatalogPage.jsx   # Listing page with filter + pagination
│   └── AdDetailsPage.jsx # Individual camper detail page
└── redux/
    ├── store.js           # Redux store configuration
    ├── truckSlice.js      # State slice (items, filters, loading)
    ├── truckThunks.js     # Async thunks (fetchTrucks, fetchTruckById)
    └── truckSelectors.js  # Selectors including selectFilteredTrucks
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## API

Data is fetched from a MockAPI endpoint:

```
https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers
```

### Camper object shape

```json
{
  "id": "1",
  "name": "Road Bear C 23-25",
  "price": 10000,
  "rating": 4.5,
  "location": "Ukraine, Kyiv",
  "description": "...",
  "form": "alcove",
  "engine": "diesel",
  "transmission": "automatic",
  "gallery": [{ "thumb": "...", "original": "..." }],
  "reviews": [{ "reviewer_name": "...", "rating": 5, "comment": "..." }]
}
```

### Supported `form` values

| API value | Display label |
|-----------|--------------|
| `alcove` | Alcove |
| `panelTruck` | Panel Truck |
| `fullyIntegrated` | Fully Integrated |

## Filtering

Filtering is handled server-side via query parameters sent to the MockAPI. Active filters are dispatched from `Filter.jsx` on Search button click or Enter key press in the location field, triggering a new `fetchTrucks` call with the selected params.

## Responsive Design

| Breakpoint | Layout |
|------------|--------|
| < `md` (768px) | Single column, filter hidden behind a slide-in drawer |
| ≥ `md` (768px) | Two-column layout, filter visible in sidebar |

## Author

**Halenur Gurel**
- GitHub: [@halenurgurel](https://github.com/halenurgurel)
