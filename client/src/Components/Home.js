import React from 'react'
import styles from './CSS/Home.module.css'
import { IoMdCloseCircle } from 'react-icons/io';
import { useState } from 'react';
import axios from 'axios'
 
axios.defaults.baseURL = 'http://localhost:8080/'

function Home() {

  const [addSection, setAddSection] = useState(false)
  const [formdata,setFormData] = useState({
    name:"",
    email:'',
    mobile:"",
  })
  const handleChange = (e)=>{
    const{value,name} = e.target
    setFormData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  }

const handleSubmit = async(e)=>{
  e.preventDefault();
  const data = await axios.post("/create",formdata)
  console.log(data)
  if(data.data.success){
    setAddSection(false)
    alert(data.data.message)
  }

}


  

  return (
    <div className={styles.box}>
      <button  className={styles.addBtn} onClick ={()=>setAddSection(true)}>Add </button>
      {
        addSection && (

          <div className={styles.container}>
          <div className={styles.icon} onClick ={()=>setAddSection(false)}>
            <IoMdCloseCircle />
          </div>
  
  
          <form  onSubmit={handleSubmit}>
            <label className={styles.label} hmtlFor="name">Name:</label>
            <br />
            <input className={styles.input} type="text" label="name"  name="name" onChange={handleChange}/>
            <br />
            <br />
  
  
            <label className={styles.label} >Email:-</label>
            <br />
  
            <input className={styles.input} type="email" id="name" name="email" onChange={handleChange} />
            <br />
            <br />
  
            <label className={styles.label} >Mobile Number:-</label>
            <br />
            <input className={styles.input} type="number" name="mobile" onChange={handleChange} />
            <br />
            <input className={styles.button} type="submit" />
          </form>
  
        </div>

        )
      }
     

    </div>
  )
}

export default Home