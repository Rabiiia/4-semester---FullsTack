import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import List from './components/List'
import CreatePerson from './components/CreatePerson'
import EditPerson from './components/EditPerson'


export interface IState {
  people: {
     id?: number
     name: string
     age: number
     occupation: string
     salary: number
   }[]
 }

function App() {
  // const [name, setName] = useState<string>("initial name")
  const [people, setPeople] = useState<IState["people"]>([]);
  const [updatedPeople, setUpdatedPeople] = useState<boolean>(false);
  const [editPeople, setEditPeople] = useState<[boolean, number]>([false, 0]);

  return (
    <div className="App">
      
      <List people={people} updatedPeople={updatedPeople} setPeople={setPeople} editPeople={editPeople}/>

      <CreatePerson people={people} setUpdatePeople={setUpdatedPeople}/>
      <EditPerson people={people} setEditPeople={setEditPeople} />

      {/* <In name={name} setName={setName} />
      <Out name={name} /> */}
      
    </div>
  )
}

// const In = ({name, setName}: {name:string, setName:React.Dispatch<React.SetStateAction<string>>}) => {
//   console.log("Component is rendered");
//   return (
//     <div>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input>
//     </div>
//   )
// }

// const Out = ({name}:{name:string}) => {
//   console.log("Out component rendered");
//   return (
//     <div>
//          <p>{name}</p>
//     </div>
//   )
// }


export default App;


// interface person {
//   map(args: (item: any) => JSX.Element): import('react').ReactNode;
//   id?: number;
//   name: string;
//   age: number;
//   city: string;
// }
// const PeopleViewer = () => {
//   const [person, setPerson] = useState<person | undefined>();
      
//   useEffect(() => {
//     fetch('http://localhost:4000/person')
//     .then((response) => response.json())
//     .then((json) => setPerson(json));
//   }, []);

//   return (
//     <div className="p-2">
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th scope="col">Id</th>
//             <th scope="col">Name</th>
//             <th scope="col">Age</th>
//             <th scope="col">City</th>
//           </tr>
//         </thead>
//         <tbody>
//           {person?.map((person) => (
//             <tr>
//               <th scope="row">{person.id}</th>
//               <td>{person?.name}</td>
//               <td>{person?.age}</td>
//               <td>{person?.city}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };





