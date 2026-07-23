# Resume Builder Project

A full-stack resume interview assistant built with React + Vite on the frontend and Express + MongoDB on the backend.

## Project structure

- `frontend/` — React client application for interview planning, report viewing, and resume PDF generation
- `backend/` — Express API server with authentication, interview report generation, and AI-powered resume PDF creation

## Tech stack

### Frontend
- React
- Vite
- React Router
- Tailwind CSS
- Axios

### Backend
- Express
- MongoDB via Mongoose
- JWT authentication
- Google Gemini AI integration
- Puppeteer + PDF generation

## Deployment notes

### Vercel frontend deploy
- Deploy the `frontend/` folder as a Vercel project.
- Add `vercel.json` in the frontend root for SPA fallback routing.
- Set the frontend environment variable:
  - `VITE_API_URL` = your deployed backend URL

### Backend deploy
- Deploy the `backend/` folder separately on a Node.js host such as Render, Railway, or another server provider.
- Set the following environment variables on the backend:
  - `PORT`
  - `MONGO_URI`
  - `JWT_SECRET`
  - `GEMINI_API_KEY`
  - `CORS_ORIGIN` = your Vercel frontend URL (comma-separated if needed)

## Local development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
npm run dev
```

## Production build check

```bash
cd frontend
npm run build
```
