// declare variables
let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");

// listen to an event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

// add item function
function addItem(e){
    // prevent the default behaviour of the form
    e.preventDefault();
    
    // retrieve the input from the user
    let newItem = document.getElementById('item').value;
    
    // create li element
    let newLi = document.createElement('li');

    // add a class name to the new li
    newLi.className = 'list-group-item';

    // create text node in li
    let newLiTextNode = document.createTextNode(newItem);

    // append the text node in li
    newLi.appendChild(newLiTextNode);


    // create button element
    let deleteButton = document.createElement('button');

    // add class name in delete button
    deleteButton.className = 'btn btn-danger btn-sm float-end delete';

    // create text node
    let deleteTextNode = document.createTextNode('X');

    // append delete button
    deleteButton.appendChild(deleteTextNode);

    // append delete button in li
    newLi.appendChild(deleteButton);

    // append the new li in ul
    itemList.appendChild(newLi);

}

// remove item function
function removeItem(e){
    if(e.target.classlist.contains('delete')){
        if(confirm('Are you sure?')){
            // get the parent of the selected li
            let li = e.target.parentElement;

            // remove the li from the list
            itemList.removeChild(li);

        }
    }
}

// filter item function
function filterItems(e){
    // convert input to all lowercase
    let text = e.target.value.toLowerCase();

    // get all the list items
    let items = document.getElementByTagName('li');

    // convert items to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;

        if (itemName.toLowerCase().indexOf(text) != -1){
            // show if the item contains text
            item.style.display = 'block';
        }else{
            // hide if the item does not contain the text
            item.style.display = "none";
        }
    });
}

// let time = 6;

// if(time => 6 && time < 12){
//     console.log('Good morning');
// }else if(time => 13 && time < 18){
//     console.log('Good Afternoon!');
// }else{
//     console.log('Good evening!');
// }

// Gender System

let gender = null;

// switch
switch(gender){

    case 'M':
        console.log('Male');
        break;

        case 'F':
            console.log('FeMale');
            break;

        default:
            console.log('Unknown');

}

// iteration

// while

let

