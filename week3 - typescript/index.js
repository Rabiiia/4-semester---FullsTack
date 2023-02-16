"use strict";
// const helloWorld = (name: string):string => {
//     return `Hello from ${name}`;
//   };
//   console.log(helloWorld('World'));
//   document.getElementById("root")!.innerHTML = helloWorld("TypeScript");
class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const people = [];
const names = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan"];
const ages = [23, 44, 66, 12, 4, 34, 18, 88, 55, 14];
const gender = ['male', 'female'];
for (let i = 0; i < 10; i++) {
    people[i] = new Person(names[i], ages[i], gender[i % 2]);
}
console.log(people);
function showPeople() {
    let table = '<table>';
    table += '<tr><th>Name</th><th>Age</th><th>Gender</th></tr>';
    people.map((person) => {
        table = table + '<tr>',
            console.log(table);
        table = table + '<td>' + `${person.name}` + '</td>',
            table = table + '<td>' + `${person.age}` + '</td>',
            table = table + '<td>' + `${person.gender}` + '</td>';
    });
    table += "</table>";
    document.getElementById("root").innerHTML = table;
}
showPeople();
// const array2table = (element:HTMLElement) => {
//   const table = document.createElement('table');
//   const thead = document.createElement('thead');
//   const tbody = document.createElement('tbody');
//   const tr = document.createElement('tr');
//   const th1 = document.createElement('th');
//   const th2 = document.createElement('th');
//   const th3 = document.createElement('th');
//   th1.innerHTML = 'Name';
//   th2.innerHTML = 'Age';
//   th3.innerHTML = 'Gender';
//   table.appendChild(thead);
//   table.appendChild(tbody);
//   thead.appendChild(tr);
//   tr.appendChild(th1);
//   tr.appendChild(th2);
//   tr.appendChild(th3);
//   for (let i = 0; i < people.length; i++) {
//     const tr = document.createElement('tr');
//     const td1 = document.createElement('td');
//     const td2 = document.createElement('td');
//     const td3 = document.createElement('td');
//     td1.innerHTML = people[i].name;
//     td2.innerHTML = people[i].age.toString();
//     td3.innerHTML = people[i].gender;
//     tr.appendChild(td1);
//     tr.appendChild(td2);
//     tr.appendChild(td3);
//     tbody.appendChild(tr);
//   }
//   element.appendChild(table);
// }
// array2table(document.getElementById('root')!);
