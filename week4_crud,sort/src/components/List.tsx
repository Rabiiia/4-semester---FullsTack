import React, { useEffect, useState } from "react";
import { IState } from "../App"


interface IProps {
    people: IState["people"]
    setPeople:  React.Dispatch<React.SetStateAction<IState["people"]>>
    updatedPeople: boolean
    setEditPeople:  React.Dispatch<React.SetStateAction<boolean, number>>
    editPeople: [boolean,number]
    useSt

}
  

const List: React.FC<IProps> = (props: IProps) => {


    useEffect(() => {
        console.log(props.updatedPeople);
        const getData = async () => {
            const response = await fetch('http://localhost:4000/person');
            const json = await response.json();
            console.log(json);
            props.setPeople(json);
        }
        getData();
    },[props.updatedPeople]);


    const handleSortByAge = () => {
        const sortedPeople = [...props.people].sort((a, b) => a.age - b.age);
        props.setPeople(sortedPeople);
      };


      const removeLastPerson = (): void => {
        props.setPeople(props.people.slice(0,-1))
    }
  
    return (
      <div>
        <h1>People</h1>
        <table>
          <thead> <tr><th>Id</th><th>Name</th> <th>Age</th> <th>occupation</th> <th>salary</th></tr> </thead>
          <tbody>
            {props.people.map((person) => {
              return (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.name}</td>
                <td>{person.age}</td>
                <td>{person.occupation}</td>
                <td>{person.salary}</td>
                <td><button onClick={(e) => {props.setEditPeople([true, parseInt(e.currentTarget.value)])}} value={person.id}>Edit</button></td>
                {/* <td><button onClick={() => props.editPeople} value={person.id}>Edit</button></td> */}
              </tr>
              //)
            )}
            )
            }
          </tbody>
        </table>
          <button onClick={handleSortByAge}>Sort by age</button>
          <br></br>
          <button onClick={removeLastPerson}>Delete last person</button>
        </div>
    )
  }

  export default List;

  