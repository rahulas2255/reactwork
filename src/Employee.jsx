import { useState } from "react";
import Company from "./Company";
import styles from './style.module.css'
function Employee(props){
    console.log(props);
    const [username,setUsername]= useState("")

    const handleAdd = ()=>{
        alert("Add Button Clicked!!!")
    }
    const addUserName = (uname)=>{
        alert(`Username is : ${uname}`)
        setUsername(uname)
    }
    console.log(username);
    return (
        <>
        <h1 className={styles.bg}>Employee Component : {props.username} </h1>
        <h2 style={{marginTop:'10px',color:'red',fontSize:'50px'}}>Username is : {username} </h2>
        <Company empStatus='true' />
        <button onClick={handleAdd} style={{padding:'10px 20px',backgroundColor:'blue',color:'white',borderRadius:'10px',fontSize:'15px'}}>Add</button>
        <button onClick={()=>addUserName("Max")} style={{padding:'10px 20px',backgroundColor:'blue',color:'white',borderRadius:'10px',fontSize:'15px'}}>Add with Username</button>

        </>
    )
}

export default Employee;