let btn = document.querySelector('button')
let img = document.querySelector('.card img')
let  sf = document.querySelector('.card h2')

let flag = 0
btn.addEventListener('click' , ()=>{
    if (flag == 0){
        btn.innerHTML = 'Requesting....'
        btn.style.backgroundColor = 'greenyellow'
        setTimeout(()=>{
             btn.innerHTML = 'Removed Friend'
             btn.style.backgroundColor = 'red'
            sf.innerHTML = 'Friends'
            sf.style.color = 'green'
        },3000)
        flag = 1
    }
    else{
        btn.innerHTML = 'Add friend'
        btn.style.backgroundColor = 'greenyellow'
         sf.innerHTML = 'Stranger'
            sf.style.color = 'red'
        flag = 0
    }
})
