let cursor = document.querySelector('.cursor')
let bdy = document.querySelector('body')
let h1 =document.querySelector('h1')

bdy.addEventListener('mousemove', (elem)=>{
    let X = (elem.x)
    let Y = (elem.y)

    
    cursor.style.left  = X + 'px'
    cursor.style.top = Y + 'px'
 
})
h1.addEventListener('mouseenter' , ()=>{
    cursor.style.scale='2.5'
})
h1.addEventListener('mouseleave' , ()=>{
    cursor.style.scale='1'
})

