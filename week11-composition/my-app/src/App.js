
import './App.css';

import Table from './Table.js'

const people = [
  { id: 1, name: 'Helle', age: 20 },
  { id: 2, name: 'Ib', age: 30 },
  { id: 3, name: 'Bodil', age: 40 },
  { id: 4, name: 'Yasmin', age: 32 },
];

const headers = ['ID', 'Name', 'Age'];

const rows = people.map(person => [person.id, person.name, person.age]);

const App = () => {
  return (
    <div>
      <h1>People</h1>
      <Table headers={headers} rows={rows} />
    </div>
  );
};
export default App;
