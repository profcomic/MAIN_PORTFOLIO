# Nexus Lab Portfolio

A polished full-stack portfolio website built with Django for the backend and Next.js for the frontend. The experience combines a cinematic, interactive UI with a content-driven project showcase and contact flow.

## Overview

This project is designed as a personal portfolio with:
- a modern one-page experience
- animated sections and ambient visual effects
- a dynamic projects showcase
- a lightweight API layer for portfolio content and contact handling

## Features

- Responsive, immersive landing page experience
- Animated navigation, particle effects, and cursor trails
- Theme-friendly visual system with glassmorphism-inspired styling
- Project cards and portfolio content driven by the backend
- Contact form endpoint for submissions
- GitHub status integration support

## Tech Stack

### Frontend
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next-themes

### Backend
- Django
- Django REST Framework
- django-cors-headers
- Pillow
- requests

## Project Structure

```text
main_portfolio/
├── backend/
│   └── professor/
│       ├── manage.py
│       ├── professor/
│       │   ├── settings.py
│       │   ├── urls.py
│       │   └── wsgi.py
│       └── projects/
│           ├── models.py
│           ├── serializers.py
│           ├── views.py
│           ├── urls.py
│           └── management/
├── frontend/
│   ├── app/
│   ├── components/
│   ├── types/
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js 18+
- Python 3.10+
- npm or yarn
- Git

### Backend Setup

1. Open the backend folder:
```bash
cd backend/professor
```

2. Create and activate a virtual environment:
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

3. Install Python dependencies:
```bash
pip install -r ../requirements.txt
```

4. Apply database migrations:
```bash
python manage.py migrate
```

5. Optionally create sample project data:
```bash
python manage.py create_sample_projects
```

6. Start the Django server:
```bash
python manage.py runserver
```

The backend API will run at http://127.0.0.1:8000.

### Frontend Setup

1. Open the frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at http://localhost:3000.

## API Endpoints

- GET /api/projects/ — list portfolio projects
- POST /api/contact/ — submit a contact form message
- GET /api/github-status/ — return GitHub statistics data

## Customization

You can personalize the portfolio by updating:
- [frontend/components/Hero.tsx](frontend/components/Hero.tsx) for your intro and links
- [frontend/components/About.tsx](frontend/components/About.tsx) for your bio and experience
- [frontend/components/Contact.tsx](frontend/components/Contact.tsx) for your contact details
- the Django project data in the admin panel or through the project API

## Notes

- The current frontend uses a custom sci-fi inspired visual language and animated layout.
- The backend currently exposes the project and contact endpoints while leaving room for further expansion.
- If you want to switch the GitHub integration to your own profile, update the username in the backend view logic.

## License

This project is provided as a personal portfolio template and can be adapted for your own use.
