let  img1 = document.querySelector('.photu1')
let img2  = document.querySelector('.photu2')
let btn  = document.querySelector('button')



btn.addEventListener('click' , ()=>{
    let    img2src =   img2.getAttribute('src')
    let    img1src =   img1.getAttribute('src')

    img1.setAttribute('src' , `${img2src}`)
    img2.setAttribute('src' , `${img1src}`)
   
})