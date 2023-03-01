import React, { useState, Dispatch, SetStateAction} from 'react'
import { initialState, Person } from '../App'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


type AddPersonProps = {
    setPeople: Dispatch<SetStateAction<Person[]>>
    people: Person[]
    setPerson: Dispatch<SetStateAction<Person>> // post, put specific
    person: Person //post, put specific
  }

const AddPersonForm = (props: AddPersonProps) => {


    const postPerson = (person: Person) => {
        fetch("http://localhost:4000/person", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        })
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            props.setPeople([...props.people, json]) //interesting thing with , json
          });
        props.setPerson(initialState);
      };

      const putPerson = (person: Person) => {
        fetch(`http://localhost:4000/person/${person.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(person),
        })
          .then((response) => response.json())
          .then((json) => {
            props.setPeople(props.people.map((p) => (p.id === person.id ? json : p))); // why json : p?
          });
        props.setPerson(initialState);
      };

    
        
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    console.log('NAME AND VALUE: ', name, value);
    props.setPerson({ ...props.person, [name]: value });
    };

        
    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (props.person.id === 0) {
        postPerson(props.person);
    } else {
        putPerson(props.person);
    }
    };

    return (
        <div>
        <Form onSubmit={handleSubmit}>
          {/* <h2>Person Form</h2> */}
  
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label column sm={2}>Name</Form.Label>
            <Col sm={10}><Form.Control name="name" type="text" placeholder="Put name here" value={props.person.name} onChange={handleChange} /></Col>
          </Form.Group>
  
          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label column sm={2}>Age</Form.Label>
            <Col sm={10}><Form.Control name="age" type="text" placeholder="Put age here" value={props.person.age ? props.person.age : ""} onChange={handleChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label column sm={2}>Occupation</Form.Label>
            <Col sm={10}><Form.Control name="occupation" type="text" placeholder="Put occupation here" value={props.person.occupation} onChange={handleChange} /></Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label column sm={2}>Salary</Form.Label>
            <Col sm={10}><Form.Control name="salary" type="text" placeholder="Put salary here" value={props.person.salary ? props.person.salary : ""} onChange={handleChange} /></Col>
          </Form.Group>
  
    
  
          <Button className="btn" type="submit"> Submit </Button>
  
        </Form>
      </div>
      )
}

export default AddPersonForm