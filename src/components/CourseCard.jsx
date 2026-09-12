import './CourseCard.css'

function CourseCard({ icon, title, description, level }) {
  const levelClass = `course-card__level course-card__level--${level.toLowerCase()}`

  return (
    <article className="course-card">
      <span className="course-card__icon">{icon}</span>
      <h3 className="course-card__title">{title}</h3>
      <p className="course-card__description">{description}</p>
      <span className={levelClass}>{level}</span>
    </article>
  )
}

export default CourseCard
