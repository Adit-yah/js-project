let btn = document.querySelector('button')
let img = document.querySelector('.card img')

let flag = 0
btn.addEventListener('click' , ()=>{
    if (flag == 0){
        btn.innerHTML = 'Removed Friend'
        btn.style.backgroundColor = 'red'
        flag = 1
    }
    else{
        btn.innerHTML = 'Add friend'
        btn.style.backgroundColor = 'greenyellow'
        flag = 0
    }
})
