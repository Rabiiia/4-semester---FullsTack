
import './App.css'
import Table, {Header, Row} from './components/Table';
const people = [
  { id: 1, name: 'Helle', age: 20 },
  { id: 2, name: 'Ib', age: 30 },
  { id: 3, name: 'Bodil', age: 40 },
  { id: 4, name: 'Yasmin', age: 32 },
];

const columns = ['ID', 'Name', 'Age'];


const App = () => {
  return (
    <div className="App">
      <h1>People</h1>
      
    
      <Table header={
        <Header columns={columns}/>
      }
       rows={
        people.map((person) => (
          <Row row={[person.id.toString(), person.name, person.age.toString()]}/>
        ))
        }
       />
    </div>
  );
};
export default App;
