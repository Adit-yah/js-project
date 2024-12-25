let bulb = document.querySelector('.bulb')
let btn = document.querySelector('button')

let flag = 0
btn.addEventListener('click', function() {
   if(flag == 0){
       btn.innerHTML = 'Off'
        flag = 1
        bulb.style.backgroundColor = 'yellow'
   }
   else{
    btn.innerHTML = 'On'
       bulb.style.backgroundColor = '#888'
       flag = 0
   }
})