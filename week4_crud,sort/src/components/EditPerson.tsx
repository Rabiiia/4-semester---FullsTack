import React  from 'react'
import { useEffect, useState } from "react"
import { IState } from "../App"


// interface IProps {
//     people: IState["people"];
//     onSave: (people: IState) => void;

// }

interface PersonData {
    id?: number
    name: string
    age: number
    occupation: string
    salary: number
  }
  
  interface IProps {
    people: IState["people"]
    setEditPeople:  React.Dispatch<React.SetStateAction<boolean, number>>
    editPeople: [boolean,number]
    
    onSave: (personData: PersonData) => void;
  }

const EditPerson: React.FC<IProps> = (props: IProps) => {
    const [name, setName] = useState(props.people);
    const [age, setAge] = useState(props.people);
    const [occupation, setOccupation] = useState(props.people);
    const [salary, setSalary] = useState(props.people);

    useEffect(() => {
        {
          props.editPeople[1] > 0 &&
            props.setEditPeople(
              props.people.find((person) => person.id === props.editPeople[1])
            );
          console.log(props.editPeople);
          if (props.editPeople != undefined) {
            setName(props.editPeople.name);
            setNewAge(personToEdit.age);
            setNewCity(personToEdit.city);
          }
          console.log(newName, newAge, newCity);
        }
      }, [props.editPeople]);
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    if (props.editPeople != undefined) {
      props.people = name;
      props.people = age;
      props.people = occupation;
      props.people = salary;

    }


      fetch('http://localhost:4000/person' + "/" + props.setEditPeople[1], {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: props.people.length + 1,
          name: name,
          age: age,
          occupation: occupation,
          salary: salary
      })
      })
      .then((res)=> res.json())
      .then((data)=>{
        props.setEditPeople(true);
        // setNewPerson(intitalState);

    });
    props.setEditPeople([false,0])
    //   props.onSave(...props.people{name, age, occupation, salary});
    };



  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Age:
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(parseInt(e.target.value))}
          />
        </label>
        <br />
        <label>
          Occupation:
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
        <br />
        <br />
        <label>
          Salary:
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(parseInt(e.target.value))}
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    );
  };


export default EditPerson