import Person from "./person.js";
import data from "./persondb.js";
//console.log(data);
function getPeople() {
    return new Promise((resolve, reject) => {
        try {
            const people = data.map((personData) => new Person(personData.name, personData.age, personData.occupation, personData.salary));
            resolve(people);
        }
        catch (error) {
            reject(error);
        }
    });
}
getPeople().then((people) => console.log(people));
export default getPeople;
// export function getPeople(): Promise<Person> {
//     return new Promise((resolve, reject) => {
//         fetch('http://localhost:4000')
//           .then(response => response.json())
//           .then(data => {  
//            resolve(data)
//            return reject(new Error('API returned an error'));  // bruge return her så den stopper?
//         })
//     });
// }
// getPeople().then((data) => data.map((personData: any) => new Person(
//     personData.name, 
//     personData.age,
//     personData.occupation, 
//     personData.salary
// ))).catch((error) => console.log(error));
// const getPeople = async (): Promise<Person> => {
//         const api = 'http://localhost:4000'
//         try {
//             const response = await fetch(api)
//             const data = await response.json()
//             console.log(data);
//         } catch (e) {
//             if (e) {
//                 console.error(e)
//         }
//     }
// }
// getPeople().then((data) => data.map((personData: any) => new Person(
//     personData.name, 
//     personData.age,
//     personData.occupation, personData.salary
// )))
// export default getPeople;
