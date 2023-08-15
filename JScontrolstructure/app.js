// while loop
// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
//   console.log("text * 10 =");
// }

// for loop
// document.write('*');
// let text = "";

// for (let i = 0; i < 10; i++) {
//     (document.write('*')); text += "" + i + "<br>";
// }


// activity 3
// let vowel = ['a','e','i','o','u'];
// let consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
// let digit = [0,1,2,3,4,5,6,7,8,9];

// let sentence = "this website is aw3som3.";
// let pattern = /\a, e, i, o, u+/g;
// let result = ('sentence.match(pattern)');

// for (let i = 0; i < 10; i++) {
//     console.log("i");
// }

//variable N is height of the tree
var n = 20;

// each row
    for (var i = 1; i <= n; i++) {      
           
    for (var j = 1; j <= i; j++) {
        document.write("*");
    }
    document.write("<br>");
}
