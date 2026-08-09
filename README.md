# PROFESSOR COMIC

### Creative Technology • Software Engineering • Graphic Design • Visual Communication

**Professor Comic** is a full-stack personal portfolio and creative technology showcase built to present software systems, digital products, brochures, graphic design, branding, UI/UX work, photography, video production, and motion graphics in one immersive experience.

The portfolio combines a cinematic space-inspired interface with a content-driven project archive and contact experience.

## 🌌 Portfolio Mission

The mission of this portfolio is to bring together the different sides of **Professor Comic** — developer, designer, creative technologist, and visual storyteller — without separating technical work from creative work.

The **Mission Archive** is designed to showcase:

- 🚀 Software and web applications
- 📖 Brochures and company-profile publications
- 🎨 Graphic design and promotional artwork
- 🟣 Branding and visual identity
- 🖥️ UI/UX design
- 📸 Photography
- 🎬 Video production
- ✨ Motion graphics
- 🐍 Python and Django systems
- ⚛️ React, Next.js, Angular and TypeScript projects
- 🔐 Data science and cybersecurity work

## ✨ Core Features

- Responsive one-page portfolio experience
- Space-inspired visual interface with cyan, deep-space and violet accents
- Centered orbital navigation
- Animated sections and ambient particle effects
- Cursor trail and scroll-progress systems
- Dynamic Mission Archive with category filters
- Software and creative-work project cards
- Brochure and visual-design project support
- Backend-powered portfolio content
- Contact form API
- GitHub status integration support
- Responsive desktop, tablet and mobile layouts

## 🛰️ Mission Archive Categories

The project showcase is organized into mission sectors so visitors can quickly explore different areas of Professor Comic's work:

| Sector | Focus |
|---|---|
| Software | Web applications, platforms and digital systems |
| Brochures | Company profiles, product brochures and publication design |
| Graphic Design | Posters, promotional graphics and digital artwork |
| Branding | Brand identity and visual communication |
| UI/UX Design | Interfaces, user journeys and product experiences |
| Photography | Photography and visual documentation |
| Video Production | Video and audiovisual production |
| Motion Graphics | Animated visual communication |
| Python / Django | Python-based systems and web applications |
| Next.js / React / Angular | Modern frontend applications |
| Data Science | Data-focused projects and analysis |
| Cybersecurity | Security-focused technical work |

## 🛠️ Technology Stack

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

## 📁 Project Structure

```text
MAIN_PORTFOLIO/
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
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   │   ├── images/
│   │   │   └── projects/
│   │   │       ├── software/
│   │   │       ├── brochures/
│   │   │       ├── graphic-design/
│   │   │       ├── branding/
│   │   │       └── visual-media/
│   │   └── documents/
│   │       └── brochures/
│   ├── types/
│   └── package.json
│
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- Python 3.10+
- npm or yarn
- Git

### Backend Setup

```bash
cd backend/professor
```

Create and activate a virtual environment:

```bash
python -m venv venv
```

**Windows:**

```bash
venv\\Scripts\\activate
```

**macOS/Linux:**

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r ../requirements.txt
```

Apply migrations:

```bash
python manage.py migrate
```

Optionally create sample project data:

```bash
python manage.py create_sample_projects
```

Start Django:

```bash
python manage.py runserver
```

The backend API runs at:

```text
http://127.0.0.1:8000
```

### Frontend Setup

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The frontend runs at:

```text
http://localhost:3000
```

## 📡 API Endpoints

- `GET /api/projects/` — list portfolio projects
- `POST /api/contact/` — submit a contact message
- `GET /api/github-status/` — return GitHub statistics data

## 🖼️ Adding Brochures and Design Work

Creative assets belong in the frontend public directory so they can be served directly by Next.js.

Recommended structure:

```text
frontend/public/
├── images/
│   └── projects/
│       ├── brochures/
│       │   └── tgg-carry-deck-crane/
│       │       ├── cover.jpg
│       │       ├── page-2.jpg
│       │       ├── page-3.jpg
│       │       └── page-4.jpg
│       ├── graphic-design/
│       ├── branding/
│       └── visual-media/
│
└── documents/
    └── brochures/
        └── TGG-Carry-Deck-Crane.pdf
```

For example, an image can be referenced from a component with:

```tsx
<Image
  src="/images/projects/brochures/tgg-carry-deck-crane/cover.jpg"
  alt="TGG Carry Deck Crane brochure"
  width={800}
  height={600}
/>
```

## 🎨 Professor Comic Identity

The portfolio should consistently use **Professor Comic** as the primary identity.

The space interface is a presentation layer — the actual portfolio identity remains **Professor Comic**.

Use the identity consistently across:

- Page titles
- Mission Archive
- Hero section
- Footer
- README
- Project descriptions
- Creative-work credits

## 🔧 Customization

Key areas can be personalized in:

- `frontend/components/Hero.tsx` — introduction and primary identity
- `frontend/components/About.tsx` — profile, experience and capabilities
- `frontend/components/ProjectsSection.tsx` — Mission Archive categories and project presentation
- `frontend/components/ProjectCard.tsx` — individual project-card presentation
- `frontend/components/Contact.tsx` — communication details
- Django project data — portfolio projects and backend content

## 🌠 Design Direction

The interface uses a deep-space visual language with:

- near-black cosmic backgrounds
- cyan orbital highlights
- blue atmospheric glow
- violet/purple nebula accents
- glassmorphism panels
- animated particles
- orbital terminology
- HUD-inspired information labels

The intention is to make the portfolio feel like a **personal command deck for Professor Comic's technical and creative missions** while remaining readable and professional.

## 📜 License

This repository represents the personal portfolio and creative work of **Professor Comic**.

© Professor Comic. All rights reserved.
