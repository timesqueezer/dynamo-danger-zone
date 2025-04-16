# Dynamo Danger Zone Frontend (Vite)

## Getting Started

### Prerequisites
- Node.js 18 or newer
- npm

### Install dependencies
```
cd frontend
npm install
```

### Start development server
```
npm run dev
```
- The app will be available at http://localhost:3000
- The Vite dev server proxies API and image requests to the backend at http://localhost:3001

### Build for production
```
npm run build
```
- Output is in the `build/` folder

## Environment Variables
- `VITE_BACKEND_API_URL` (for production builds, set to your backend URL)

## Notes
- All trip data and images are served from the backend.
- For local development, ensure the backend is running on port 3001.
- No Create React App scripts or files are used.

---

## Backend
See `../backend/README.md` for backend instructions.
