import { useEffect, useState } from "react"
import React from 'react'
import { IState  } from "../App"


interface IProps {
    people: IState["people"]
    setUpdatePeople:  React.Dispatch<React.SetStateAction<boolean>>

}

const redborder = {
    border: '2px solid red',
    width: '900px',
    margin: '5px'
}


const intitalState = { name: "", age: "", occupation: "", salary: "" }

 const CreatePerson: React.FC<IProps> = (props: IProps) => {
 
    const [newPerson, setNewPerson] = useState(intitalState);
  

 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value; // ved hvert input felt target, får jeg fat på value 
      const keyName = event.target.id; //nu kan jeg få fat på alle id'er ved den input felt. initial states keys afspejler i id input
      setNewPerson(curr => {return {...curr, [keyName]:value}}) //sætte min  key [name] og dets value som bliver sat i setNewPerson og derefter i newPerson
      
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
      event.preventDefault();
      console.log(props.people.length + 1);
      fetch('http://localhost:4000/person', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id: props.people.length + 1,
            name: newPerson.name,
            age: parseInt(newPerson.age),
            occupation: newPerson.occupation,
            salary: parseInt(newPerson.salary)
        })
        })
        .then((res)=> res.json())
        .then((data)=>{
          props.setUpdatePeople(true);
          setNewPerson(intitalState);

      });

  }

    return (<div style={redborder}>
          <form onSubmit={handleSubmit} >
          {/* <input   onChange={handleChange} type ="number" id="id" value={props.people.length + 1}   /> */}
          <input   onChange={handleChange} type ="text" id="name" value= {newPerson.name}   />
          <input   onChange={handleChange} type = "number" id="age" value= {newPerson.age}   />
          <input    onChange={handleChange} type ="text" id="occupation" value= {newPerson.occupation}  />
          <input   onChange={handleChange}  type ="number" id="salary" value= {newPerson.salary}  />
          <input   onChange={handleChange}  type="submit" value="Submit" />
       
       </form>
       <p>{JSON.stringify(newPerson)}</p>
      </div>
  )
}

export default CreatePerson;
