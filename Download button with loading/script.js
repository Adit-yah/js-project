let grow = document.querySelector('.grow')
let btn = document.querySelector('button')

btn.addEventListener('click' , ()=>{
 
btn.innerHTML = 'Downloading...'
 
 let z = 0
 let intval = setInterval(() => {
        z++
         grow.style.width = z + '%'
    },30);

    setTimeout(()=>{
        clearInterval(intval)
        btn.innerHTML = 'Downloaded'
        btn.style.backgroundColor = 'lightgreen'
    },3000)
})