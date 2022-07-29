import React from 'react'
import styles from './ClassCard.module.css'
import Link from 'next/link'

const ClassCard = ({classes}) => {
 
  return (
        // Link will navigate to student with unique id
    <Link href="#">
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_title}>
                    <h3>Math 101</h3>
                </div>
                <div className={styles.student_card}>
                    <h2>Student attending</h2>
                    <span>Tom Yotwongjai</span>
                    <span>Agnieszka Madeja</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ClassCard