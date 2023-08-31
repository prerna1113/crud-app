import React from 'react'
import styles from './CSS/Home.module.css'
import {  IoMdCloseCircle } from 'react-icons/io';

function Home() {
  return (
    <div>
        <button>Add </button>
        <div className={styles.container}>
       <div className={styles.icon}>     
        <IoMdCloseCircle/>
        </div> 
          

        <form >
          <label  className={styles.label} hmtlFor="name">Name:</label>
          <br/>
            <input className={styles.input} type ="text" label="Name"  />
            <br/>
            <br/>
            

            <label  className={styles.label} >Email:-</label>
            <br/>
           
            <input   className={styles.input}type ="email" id="name" name="name" />
            <br/>
            <br/>

            <label   className={styles.label} >Mobile Number:-</label>
            <br/>
            <input   className={styles.input} type = "number"  />
            <br/>
            <input  className={styles.button} type ="submit" />
        </form>

        </div>
        
    </div>
  )
}

export default Home