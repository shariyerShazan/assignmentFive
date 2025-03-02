const today = new Date();


// const day = today.getDate();
// const month = today.getMonth() + 1;
// const year = today.getFullYear();


const options = { year: 'numeric', month: 'long', day: 'numeric' };
const day = new Date().toLocaleDateString('en-US', options);

let date = `${day} `

const dayName = today.toLocaleDateString('en-US', { weekday: 'long' });

document.getElementById('day-name').innerText = dayName

document.getElementById('date-today').innerText = date