# Taller 03 — Landing con componentes de React

Landing page de "ReactAcademy" construida con Vite + React, dividida en componentes reutilizables, como parte del Taller 03 de la Semana 6 (React).

## Requisitos cumplidos

- ✅ Proyecto con Vite + React
- ✅ Un archivo `.jsx` por componente en `src/components/`, con su propio CSS
- ✅ `CourseCard` recibe props y se reutiliza 4 veces
- ✅ Las tarjetas de cursos salen de un array (`src/data/courses.js`) recorrido con `.map()` y `key`
- ✅ El contador de estudiantes usa `useState`

## Estructura del proyecto

```
src/
├── App.jsx
├── App.css
├── main.jsx
├── index.css
├── data/
│   └── courses.js
└── components/
    ├── Navbar.jsx / Navbar.css
    ├── Hero.jsx / Hero.css
    ├── CoursesSection.jsx / CoursesSection.css
    ├── CourseCard.jsx / CourseCard.css
    ├── EnrollCounter.jsx / EnrollCounter.css
    └── Footer.jsx / Footer.css
```

## Cómo correr el proyecto

```bash
npm install
npm run dev
```

Luego abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Componentes

- **Navbar**: barra superior con el logo y los enlaces de navegación.
- **Hero**: sección principal con el título, la descripción y el botón "Ver Cursos".
- **CoursesSection**: recorre el array de cursos y renderiza un `CourseCard` por cada uno.
- **CourseCard**: tarjeta reutilizable que recibe `icon`, `title`, `description` y `level` como props.
- **EnrollCounter**: contador de estudiantes con botones `+` / `−` manejado con `useState`.
- **Footer**: pie de página con el copyright.
