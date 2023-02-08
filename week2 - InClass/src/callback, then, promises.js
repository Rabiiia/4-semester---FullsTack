const superagent = require('superagent');
const fs = require('fs'); //works with packages and is shorthand for filesystem

// Callback - hell
// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//     superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`)
//     .end((err,res) => {
//         if (err) return console.log(err);
//         console.log(res.body.message);

//         fs.writeFile('dog.img.txt', res.body.message, err => {
//             if (err) return console.log(err);
//             console.log("Dog img saved to File successfully");
//         })
//     })

// });


// THEN SYnTAX

// fs.readFile(`${__dirname}/dog.txt`, 'utf-8', (err, data) => {
//     superagent
//     .get(`https://dog.ceo/api/breed/${data.trim()}/images/random`) //return a promise kan superagent gøre. derfor kan man bruge then
//     .then(res => {
//         console.log(res.body.message);

//         fs.writeFile('dog.img.txt', res.body.message, err => {
//             if (err) return console.log(err);
//             console.log("Dog img saved to File successfully");
//         })
//     })
//     .catch(err => console.log(err.message)); //kun error hvis du skriver 'breed' til 'breedg' i api kald
// });

//PROMISES

const readFilePro = file => {
    return new Promise( (resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) reject('file not found')
            resolve(data);
        })
    })
}

const writeFilePro = (data) => {
    return new Promise ( (resolve, reject) => {
        fs.writeFile("dog.img.txt", data, err => {
            if (err) reject("file not found");
            resolve("Dog image saved to file")
        })
    })
}

// readFilePro(`${__dirname}/dog.txt`)
//     .then(data => 
//     superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`))
//      .then(res => writeFilePro(res.body.message))
//      .then(res => console.log(res))
//      .catch(err => console.log(err))
//      .finally(()=> console.log("i am done"))


// ASYNC / AWAIT

// const getDogPics = async () => {

//     try {
//     const data = await readFilePro(`${__dirname}/dog.txt`)
//     const response = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
//     const text = await writeFilePro(response.body.message)
//     return(text);
//   } catch (e) {
//        throw new Error(e.message);
//     }
// };

//IFFI ({})()so that you dont have to use then on getDogPics().then(res => console.log(res));
// immediately invoked function expressions
// console.log('1: Will get dog pics');
// (async () => {
//     try {
//         const data = await getDogPics();
//         console.log('2', data)
// }catch (e) {
//     console.log(e);
// }
    
// })()
// console.log('3: Done getting dog pics');

// Waiting for multiply Promises

const getDogPics = async () => {

    try {
    const data = await readFilePro(`${__dirname}/dog.txt`)
    const res1 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    const res2 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    const res3 = await superagent.get(`https://dog.ceo/api/breed/${data.trim()}/images/random`);
    
    const all = await Promise.all([res1, res2, res3]);  
    const images = all.map( el => el.body.message);
    console.log(images);


     const text = await writeFilePro(images.join('\n'));
     console.log(text);
     return(text);
  } catch (e) {
       throw new Error(e.message);
    }
};

getDogPics();



