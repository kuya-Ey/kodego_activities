// // genres-movielist 'GET'

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
// let button = document.getElementById('button');

// // create an XMLHttpRequest object
// const req = new XMLHttpRequest();


// // define a callback function, this case with an eventListener
// button.addEventListener('click', function(){
//     if(req.status === 200 && req.readyState === 4){
//         const res = JSON.parse(req.responseText);
//         console.log(res);
//     // }else{
//     //     throw new Error("Something went wrong!");
//     //     console.log("Something went wrong!");
//     }
// });

// // send a request to the server
// req.open('GET', 'https://api.themoviedb.org/3/genre/movie/list?language=en');

// req.send();

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

const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

button.addEventListener('click', function () {
	if(xhr.status === 200 && xhr.readyState === 4) {
        const res = JSON.parse(xhr.responseText);
		console.log(xhr.responseText);
	}else{
        throw new Error('Something went wrong!');
        // console.log(Something went wrong!);
    }
});

xhr.open('GET', 'https://odds.p.rapidapi.com/v4/sports');
xhr.setRequestHeader('X-RapidAPI-Key', '5cd923a73emshdcd724e0bc24203p1093aejsndb948d99de7b');
xhr.setRequestHeader('X-RapidAPI-Host', 'odds.p.rapidapi.com');
xhr.send(data);

let button = document.getElementById('button');

const ret = new XMLHttpRequest();

button.addEventListener("click", function () {
    if(ret.status === 200 && ret.readyState === 4) {
        const res = JSON.parse(ret.responseText);
        console.log(res.responseText);
    }else{
        throw new Error('Something went wrong!');
    }
});

ret.open("GET", "https://odds.p.rapidapi.com/v4/sports");

ret.send();