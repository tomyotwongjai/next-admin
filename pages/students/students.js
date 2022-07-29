import {useState} from 'react';
import  Router from 'next/router'
import {PrismaClient} from '@prisma/client';
import styles from './students.module.css'
import AddStudent from '../../components/StudentComponents/AddStudent/AddStudent';
import StudentCard from '../../components/StudentComponents/StudentCard/StudentCard';


const Classes = () => {
  const [addStudent, setAddStudent] = useState(false);

  // Navigate to students page
  const handleNavigate = () =>{
    Router.push('/classes');
  }

  return (
  <>
    <main className={styles.container}>
      <div>
        <button className="btn"
          styles={{
            paddingLeft: '10px',
            paddingRight: '10px',
            fontWeight: '500'
          }}
          onClick={() => setAddStudent((prevState) => !prevState)}>
          Add Students
        </button>
        <button className="btn"
          styles={{
            paddingLeft: '10px',
            paddingRight: '10px',
            fontWeight: '500'
          }}
          onClick={handleNavigate}>
          Go to Class
        </button>
      </div>

      <div className={styles.card_container}>

      </div>

      {addStudent ? (
        <AddStudent closeModal={() => setAddStudent(false)} />
      ) : null}
    </main>
      <div className={styles.card_container}>
        <StudentCard />
      </div>
  </>
  )
}

export default Classes