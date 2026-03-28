# Portfolio Website

A modern, responsive portfolio website built with Django (backend) and Next.js (frontend). Featuring a unique glassmorphism design, smooth animations, and full-stack integration.

## 🚀 Features

- **Modern Design**: Glassmorphism UI with animated backgrounds and smooth transitions
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Components**: Hover effects, animations, and micro-interactions
- **Project Showcase**: Dynamic project filtering and detailed project cards
- **Contact Form**: Functional contact form with validation
- **GitHub Integration**: Real-time GitHub stats and repository display
- **SEO Optimized**: Meta tags, semantic HTML, and structured data

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Next Themes** - Theme management

### Backend
- **Django** - Python web framework
- **Django REST Framework** - API development
- **SQLite** - Database (development)
- **PostgreSQL** - Database (production)
- **CORS Headers** - Cross-origin resource sharing

## 📁 Project Structure

```
Portfolio/
├── backend/                 # Django backend
│   ├── professor/           # Django project
│   │   ├── projects/       # Projects app
│   │   ├── settings.py     # Django settings
│   │   └── urls.py        # Main URLs
│   └── manage.py          # Django management
├── frontend/               # Next.js frontend
│   ├── app/               # App Router pages
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/        # React components
│   │   ├── About.tsx     # About section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Hero.tsx      # Hero section
│   │   └── ...          # Other components
│   ├── types/            # TypeScript types
│   └── package.json      # Dependencies
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Python 3.8+
- Git

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run migrations:
```bash
python manage.py migrate
```

5. Create sample projects (optional):
```bash
python manage.py create_sample_projects
```

6. Start the Django server:
```bash
python manage.py runserver
```

The backend will be available at `http://127.0.0.1:8000`

### Frontend Setup

1. Navigate to the frontend directory:
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

The frontend will be available at `http://localhost:3000`

## 📡 API Endpoints

### Projects
- `GET /api/projects/` - List all projects
- `POST /api/projects/` - Create new project (admin only)

### GitHub Status
- `GET /api/github-status/` - Get GitHub statistics

### Contact
- `POST /api/contact/` - Submit contact form

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Hero Component** (`frontend/components/Hero.tsx`):
   - Name and title
   - Social media links
   - Tech stack badges

2. **About Component** (`frontend/components/About.tsx`):
   - Skills and experience
   - Personal description
   - Timeline details

3. **Contact Component** (`frontend/components/Contact.tsx`):
   - Contact information
   - Social media links

### Projects
Add your projects through:
- Django admin interface (`/admin/`)
- Management command: `python manage.py create_sample_projects`
- Direct API calls

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `app/globals.css` for global styles
- Adjust component-specific styles in individual files

## 🌟 Features in Detail

### Glassmorphism Design
- Frosted glass effect with backdrop blur
- Subtle borders and shadows
- Animated background gradients

### Animations
- Smooth scroll animations
- Hover effects and micro-interactions
- Loading states and transitions
- Floating background elements

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Touch-friendly interactions
- Optimized navigation

### Performance
- Code splitting and lazy loading
- Optimized images and assets
- Efficient animations
- SEO best practices

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- Email: your.email@example.com
- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourusername

---

Built with ❤️ using Django, Next.js, and modern web technologies.
