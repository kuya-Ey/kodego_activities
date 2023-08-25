// genres-movielist 'GET'

// const data = null;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// xhr.addEventListener('readystatechange', function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// xhr.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?language=en');
// xhr.setRequestHeader('accept', 'application/json');
// xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMjNlNzJkMzFkN2NlMDlkODBjNTk4MjRhMTg0Mzc2MyIsInN1YiI6IjY0ZTVmZGQ5YzNjODkxMDBlMzVmMmViMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.E2RZVrF5jI3XqIFMRTXxJl7yc1edfsZB8paHwBrBSuY');

// xhr.send(data);

// GET method
let button = document.getElementById('button');

// create an XMLHttpRequest object
const req = new XMLHttpRequest();

// define a callback function, this case with an eventListener
button.addEventListener('click', function(){
    if(req.status === 200 && req.readyState === 4){
        const res = JSON.parse(req.responseText);
        console.log(res);
    }else{
        throw new Error("Something went wrong!");
        // console.log("Something went wrong!");
    }
});

// send a request to the server
req.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?language=en');

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

