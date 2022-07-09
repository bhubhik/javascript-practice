console.log('hello');
let age = [22, 31, 18, 19, 54, 49, 23, 22, 21, 19, 23];

let filteredAge = () =>
  age.filter((num, index) => {
    return age.indexOf(num) === index;
  });

console.log(filteredAge());

console.log(Math.floor(Math.random() * 25 + 1));

const vowels = ['a', 'e', 'i', 'o', 'u'];
const totalVowel = (string) =>
  string
    .toLowerCase()
    .split('')
    .filter((char) => vowels.indexOf(char) > -1).length;

console.log(totalVowel('AnubhAob'));

//COUNTER
let number = document.querySelector('.counter-display');
let decrease = document.querySelector('.minus');
let increase = document.querySelector('.plus');

let count = 0;

increase.addEventListener('click', () => {
  count++;
  number.innerHTML = count;
});

decrease.addEventListener('click', () => {
  count--;
  number.innerHTML = count;
});

// TODO

// Function called while clicking add button
function addItem() {
  // Getting box and ul by selecting id;
  let item = document.getElementById('box');
  let list_item = document.getElementById('list_item');
  if (item.value != '') {
    // Creating element and adding value to it
    let make_li = document.createElement('LI');
    make_li.appendChild(document.createTextNode(item.value));

    // Adding li to ul
    list_item.appendChild(make_li);

    // Reset the value of box
    item.value = '';

    // Delete a li item on click
    make_li.onclick = function () {
      this.parentNode.removeChild(this);
    };
  } else {
    // Alert msg when value of box is "" empty.
    alert('plz add a value to item');
  }
}
