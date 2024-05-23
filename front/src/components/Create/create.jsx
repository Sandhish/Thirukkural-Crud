import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './create.module.css'

const create = () => {

  const [kural, setKural] = useState('')
  const [kuralNo, setKuralNo] = useState('')
  const navigate = useNavigate()

  const Submit = async (e) => {
    e.preventDefault();
    await axios.post("https://thirukkural-crud.onrender.com/kural/", { kural, kuralNo })
      .then(result => {
        console.log(result);
        setKural('');
        setKuralNo('');
        navigate('/home');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className={styles.createContainer}>
      <div className={styles.createMain}>
        <form onSubmit={Submit}>
          <div className={styles.createHeading}>Add Kural</div>
          <label htmlFor="kuralNo" className={styles.createLabel}>KuralNo</label>
          <input type="number" name='kuralNo' className={styles.createInput}
            onChange={(e) => setKuralNo(e.target.value)} value={kuralNo} />
          <label htmlFor="kural" className={styles.createLabel}>Kural</label>
          <textarea name="kural" className={`${styles.createInput} ${styles.updateInput}`}
            onChange={(e) => setKural(e.target.value)} value={kural} rows={'3'} cols={'50'} />
          <button className={styles.createButton} type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default create