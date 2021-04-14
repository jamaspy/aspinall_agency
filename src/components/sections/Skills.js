import React from "react"
import * as styles from "../../scss/skills.module.scss"
import { work_skills, home_skills, design_skills } from "../../data/skills"
const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.work_skills}>
        <p className={styles.title}>@Work</p>
        {work_skills.map(skill => (
          <p>> {skill}</p>
        ))}
      </div>
      <div className={styles.home_skills}>
        <p className={styles.title}>@Home</p>
        {home_skills.map(skill => (
          <p>> {skill}</p>
        ))}
      </div>
      <div className={styles.design_skills}>
        <p className={styles.title}>@Design</p>
        {design_skills.map(skill => (
          <p>> {skill}</p>
        ))}
      </div>
    </div>
  )
}

export default Skills
