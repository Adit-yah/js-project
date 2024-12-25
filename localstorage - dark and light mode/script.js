localStorage.setItem('theme' , 'dark')
let  main = document.querySelector('.main')
let btn = document.querySelector('.button')

flag = 0
btn.addEventListener('click' , ()=>{
    let theme = localStorage.getItem('theme')
if(flag == 0){
    main.setAttribute( 'id' , theme)
    localStorage.setItem('theme' ,'light') 
    btn.innerHTML = '<i class="ri-moon-fill"></i>'

    flag=1
}
else{
    main.setAttribute( 'id' , theme)
    localStorage.setItem('theme' , 'dark')      
    btn.innerHTML = ' <i class="ri-sun-fill"></i> '
    flag=0
}


})