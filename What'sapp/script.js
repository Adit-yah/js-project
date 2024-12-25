let status_in = document.querySelector('.status_in')

let arr = [
    {
      profile: 'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      name: 'Choti',
      time : '12:40 am',
      story: 'https://images.unsplash.com/photo-1529421052258-e208c07eea78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
    },
    {
      profile: 'https://images.unsplash.com/photo-1646106249891-1759a4a679e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdyaWx8ZW58MHx8MHx8fDA%3D',
      name: 'hella ',
      time : '1:32 pm',
      story: 'https://images.unsplash.com/photo-1629121323095-99a8cb54249a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
  
    },
    {
      profile: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'jenni',
      time : '6:14 pm',
      story: 'https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'
  
    },
    {
      profile: 'https://media.istockphoto.com/id/2182797436/photo/portrait-of-a-beautiful-young-woman-with-clear-skin.webp?a=1&s=612x612&w=0&k=20&c=nz5JdCC2_6dEbsNpWDY5AmrsQDYMwSw1W34qCWVEr7U=',
      name: 'Hema',
      time : '8:08 pm',
      story: 'https://images.unsplash.com/photo-1610642434201-6cfd5cda24b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
  
    },
    {
      profile: 'https://images.unsplash.com/photo-1562532739-3f66ac289def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
      name: 'Ammanda',
      time : '12:00 pm',
      story: 'https://images.unsplash.com/photo-1562532740-63d14bb5cc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D'
  
    },
    {
      profile: 'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
      name: 'Choti',
      time : '12:40 am',
      story: 'https://images.unsplash.com/photo-1529421052258-e208c07eea78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
    },
    {
      profile: 'https://images.unsplash.com/photo-1646106249891-1759a4a679e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdyaWx8ZW58MHx8MHx8fDA%3D',
      name: 'hella ',
      time : '1:32 pm',
      story: 'https://images.unsplash.com/photo-1629121323095-99a8cb54249a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'
  
    },
    {
      profile: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
      name: 'jenni',
      time : '6:14 pm',
      story: 'https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'
  
    },
    {
      profile: 'https://media.istockphoto.com/id/2182797436/photo/portrait-of-a-beautiful-young-woman-with-clear-skin.webp?a=1&s=612x612&w=0&k=20&c=nz5JdCC2_6dEbsNpWDY5AmrsQDYMwSw1W34qCWVEr7U=',
      name: 'Hema',
      time : '8:08 pm',
      story: 'https://images.unsplash.com/photo-1610642434201-6cfd5cda24b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'
  
    },
    {
      profile: 'https://images.unsplash.com/photo-1562532739-3f66ac289def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
      name: 'Ammanda',
      time : '12:00 pm',
      story: 'https://images.unsplash.com/photo-1562532740-63d14bb5cc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D'
  
    },
  ]

  let sum = ' '
  
  arr.forEach(function(elem,id){
         sum +=  `<div id="${id}" class="status_all">
                  <img src="${elem.profile}" alt="">
                  <div class="user_time">
                    <h4>${elem.name}</h4>
                    <h6>${elem.time} </h6>
                  </div>
            </div>`
    
  })

status_in.innerHTML = sum

let status_opn = document.querySelector('.status_open')
let loading_grow = document.querySelector('.loading_grow')

let inte

status_in.addEventListener('click', (dets)=>{
    let gold =( arr[dets.target.id].story)
 
    status_opn.style.display = 'block'
    status_opn.style.backgroundImage = `url(${gold})`

    let z = 0
    inte = setInterval(()=>{
        z++
       loading_grow.style.width = z + '%'
    },30)

    setTimeout(function(){
        clearInterval(inte)
          status_opn.style.display = 'none'
    },3000)
})

localStorage.setItem('theme' , 'dark')

let mode = document.querySelector('.status i')
let card = document.querySelector('#card')
let flag = 0

mode.addEventListener('click',()=>{
  
  let theme = localStorage.getItem('theme')

  if (flag == 0){
   const thm =  card.getAttribute('class')
    card.setAttribute('class' , theme)
    localStorage.setItem('theme' ,thm )
    mode.setAttribute('class' , 'ri-moon-fill')
    flag = 1
  }
  else{
   const thm =  card.getAttribute('class')
    card.setAttribute('class' , theme)
    localStorage.setItem('theme' ,thm )
    mode.setAttribute('class' , 'ri-sun-fill')
    flag = 0
  }
})
