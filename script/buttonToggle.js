

function getRandomColor(){
    let r = Math.ceil(Math.random() * 255)
    let g = Math.ceil(Math.random() * 255)
    let b = Math.ceil(Math.random() * 255)
     return `rgb(${r},${g},${b})`
}

 document.getElementById('theme-btn').addEventListener('click' , ()=>{
    // const body = document.getElementsByTagName('body')
    document.body.style.backgroundColor = getRandomColor() ;
    
})