let btn = document.querySelectorAll('button')
let bdy = document.querySelector('body')

btn.forEach( (elem)=>{
    elem.addEventListener('click' , ()=>{
        bdy.style.backgroundColor = `${elem.innerText}`
    }) 
})
