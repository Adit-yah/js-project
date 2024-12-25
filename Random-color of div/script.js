let btn = document.querySelector('button')
let clr = document.querySelector('.colors')


btn.addEventListener('click' , ()=>{
    let r= Math.floor(Math.random()*256)
    let g = Math.floor(Math.random()*256)
    let b = Math.floor(Math.random()*256)

    clr.style.backgroundColor = `rgb(${r},${g},${b})`
    clr.style.height =( `${r}`+'px')
    clr.style.width = ( `${g}`+'px')
    clr.style.borderRadius = ( `${g}`+'px')
    console.log(r);
})