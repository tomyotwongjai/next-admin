import React from 'react'
import styles from './StudentCard.module.css'
import Link from 'next/link'

const ClassCard = () => {

    // fetch data from prisma to show on page
    
  return (
        // Link will navigate to student with unique id
    <Link href="#">
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <div className={styles.card_title}>
                    <h3>Tom Yotwongjai</h3>
                </div>
                <div className={styles.student_card}>
                    <h2>Class attending</h2>
                    <span>Math 101</span>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ClassCard