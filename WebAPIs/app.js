// // genres-movielist 'GET'

// // const data = null;

// // const xhr = new XMLHttpRequest();
// // xhr.withCredentials = false;

// // xhr.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?language=en');
// // xhr.setRequestHeader('accept', 'application/json');
// // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNlNzJkMzFkN2NlMDlkODBjNTk4MjRhMTg0Mzc2MyIsInN1YiI6IjY0ZTVmZGQ5YzNjODkxMDBlMzVmMmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E2RZVrF5jI3XqIFMRTXxJl7yc1edfsZB8paHwBrBSuY');

// // xhr.addEventListener('readystatechange', function () {
// //   if (xhr.status === 200 && xhr.readyState === 4) {
// //     const req = JSON.parse(xhr.responseText);
// //     console.log(this.responseText);
// //   }
// // });

// // xhr.send(data);

// GET method
let button = document.getElementById('button');

const req = new XMLHttpRequest();

req.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?language=en');

button.addEventListener('click', function(){
    if(req.status === 200 && req.readyState === 4){
        const res = JSON.parse(req.responseText);
        console.log(res);
    }else{
        throw new Error("Something went wrong!");
        // console.log("Something went wrong!");
    }
});

req.send();

//POST request (Lists - Create: ) for exploring
// const req = new XMLHttpRequest();

// req.open('POST', 'https://api.themoviedb.org/3/list');

// req.setRequestHeader('Content-Type', 'application/json');

// button.addEventListener('click', function(){
//     if(req.status === 201 && req.readyState === 4){
//         const res = JSON.parse(req.responseText);
//         console.log(res);
//     }else{
//         throw new Error("Something went wrong!");
//         // console.log("Something went wrong!");
//     }
// });

// const newUser = {
//     "name": "morpheus",
//     "job": "leader"
// }

// req.send(JSON.stringify(newUser));