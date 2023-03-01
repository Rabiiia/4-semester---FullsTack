import React from 'react'
import { Person } from '../App'
import { Dispatch, SetStateAction } from 'react'
import Button from 'react-bootstrap/Button';


type PersonTableProps =  {
  people: Person[] // in order to display people
  setPeople: Dispatch<SetStateAction<Person[]>> // in order to delete a person
  setPerson: Dispatch<SetStateAction<Person>> // in order to edit a person in the AddUser component.
}

const PersonTable = (props: PersonTableProps) => {


  const deletePerson = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const id = evt.currentTarget.id;
    fetch(`http://localhost:4000/person/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        const restOfPeople = props.people.filter((person) => person.id !== parseInt(id));
        props.setPeople([...restOfPeople]);
      });
  };

  const editPerson = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const id = evt.currentTarget.id;
    props.setPerson(props.people.find((person) => person.id === parseInt(id))!);
  };


  return (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>age</th>
        <th>occupation</th>
        <th>salary</th>
      </tr>
    </thead>
    <tbody>
      {props.people.length > 0 ? (
        props.people.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.occupation}</td>
            <td>{person.salary}</td>
            <td>
              <Button className="edit-btn" id={person.id.toString()} onClick={editPerson}>Edit</Button>
              <Button className="delete-btn" id={person.id.toString()} onClick={deletePerson}>Delete</Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No persons</td>
        </tr>
      )}
    </tbody>
  </table>
  )
}

export default PersonTable;