import {useState} from 'react';
import  Router from 'next/router'
import { PrismaClient } from '@prisma/client'
import styles from './classes.module.css'
import AddClass from '../../components/ClassComponents/AddClass/AddClass';
import ClassCard from '../../components/ClassComponents/ClassCard/ClassCard';



const Classes = ({classes}) => {
  const [addClass, setAddClass] = useState(false);

  // Navigate to students page
  const handleNavigate = () =>{
    Router.push('/');
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
          onClick={() => setAddClass((prevState) => !prevState)}>
          Add Classes
        </button>
        <button className="btn"
          styles={{
            paddingLeft: '10px',
            paddingRight: '10px',
            fontWeight: '500'
          }}
          onClick={handleNavigate}>
          Go to Student
        </button>
      </div>

      <div className={styles.card_container}>

      </div>

      {addClass ? (
        <AddClass closeModal={() => setAddClass(false)} />
      ) : null}
    </main>
      <div className={styles.card_container}>
          <ClassCard  />
      </div>
  </>
  )
}

export default Classes