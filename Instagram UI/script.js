let stories = document.querySelector('.stories')
let Post = document.querySelector('.post')

let arr = [
  {
    profile: 'https://plus.unsplash.com/premium_photo-1664366737698-3a98169201c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGdpcmx8ZW58MHx8MHx8fDA%3D',
    name: 'Choti',
    post: 'https://plus.unsplash.com/premium_photo-1675433344518-21eb72dfc7a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8fDB8fHww',
    time: '12:02 pm',
    story: 'https://images.unsplash.com/photo-1529421052258-e208c07eea78?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8'
  },
  {
    profile: 'https://images.unsplash.com/photo-1646106249891-1759a4a679e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGdyaWx8ZW58MHx8MHx8fDA%3D',
    name: 'hella ',
    post: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww',
    time: '2:00 pm',
    story: 'https://images.unsplash.com/photo-1629121323095-99a8cb54249a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8'

  },
  {
    profile: 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z2lybHxlbnwwfHwwfHx8MA%3D%3D',
    name: 'jenni',
    post: 'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE5BVFVSRXxlbnwwfHwwfHx8MA%3D%3D',
    time: '5:02 pm',
    story: 'https://plus.unsplash.com/premium_photo-1668896123808-cd4f065911fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI0fHx8ZW58MHx8fHx8'

  },
  {
    profile: 'https://media.istockphoto.com/id/2182797436/photo/portrait-of-a-beautiful-young-woman-with-clear-skin.webp?a=1&s=612x612&w=0&k=20&c=nz5JdCC2_6dEbsNpWDY5AmrsQDYMwSw1W34qCWVEr7U=',
    name: 'Hema',
    post: 'https://images.unsplash.com/photo-1515096788709-a3cf4ce0a4a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5BVFVSRXxlbnwwfHwwfHx8MA%3D%3D',
    time: '7:42 pm',
    story: 'https://images.unsplash.com/photo-1610642434201-6cfd5cda24b9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D'

  },
  {
    profile: 'https://images.unsplash.com/photo-1562532739-3f66ac289def?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
    name: 'Ammanda',
    post: 'https://plus.unsplash.com/premium_photo-1675827055694-010aef2cf08f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fE5BVFVSRXxlbnwwfHwwfHx8MA%3D%3D',
    time: '5:52 am',
    story: 'https://images.unsplash.com/photo-1562532740-63d14bb5cc34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGJlYXV0aWZ1bCUyMGdpcmx8ZW58MHx8MHx8fDA%3D'

  },
]

let my = ` <div  class="scontain">
                    <div class="story">
                        <img id="own_story" src="https://media.istockphoto.com/id/1450052495/photo/happy-family-with-car-travel-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and.jpg?s=612x612&w=0&k=20&c=yj4tsXvfofdNC9yaWotQrJ0CJPeMQoU2zffXFsDCOxM=" alt="">
                        <div class="bl"><i class="ri-add-line"></i></div>
                    </div>
                        <h5>Your Story</h5>
                 </div>`

let nav_containt = ` <div class="story">
                    <img src="https://media.istockphoto.com/id/1450052495/photo/happy-family-with-car-travel-road-trip-summer-vacation-in-car-in-the-sunset-dad-mom-and.jpg?s=612x612&w=0&k=20&c=yj4tsXvfofdNC9yaWotQrJ0CJPeMQoU2zffXFsDCOxM=" alt="">
                </div>
                <div>
                    <h1 style="font-size: 16px; margin-top: 4px; ">Aditya_Chimaniya</h1>
                    <h2 style="font-size: 12px; font-weight: 400; ">Music</h2>
                </div>`
let post_content = ''

arr.forEach(function (elem, id) {
  my += `  <div class="scontain">
    <div class="story">
        <img  id="${id}" src="${elem.profile}" alt="">
    </div>
        <h5>${elem.name}</h5>
 </div>`

  post_content += `
                <div class="post_upper_part">
              <div class="pup">
                    <img   class="pup_img" src="${elem.profile}" alt="">
                    <div>
                        <h4>${elem.name}</h4>
                        <h6>${elem.time}</h6>
                     </div>
                    </div >
                <i class="ri-more-2-fill"></i>
              </div> 
              <div style="background-image: url(${elem.post});" class="post_post">
                 </div> 

                 <div class="post_btm">
                    <div class="bttm">
                        <i id="h${id}" class="ri-heart-3-fill"></i>
                        <i class="ri-chat-3-line"></i>
                        <i class="ri-telegram-2-line"></i>
                    </div>
                    <i class="ri-bookmark-line"></i>
                 </div>

            </div>`
            // console.log(post_content);
            
})

Post.innerHTML = post_content
stories.innerHTML = my

let x = document.querySelector('#stryopn')
let y = document.querySelector('.strynav')
let stryimg = ' '
let sotry

stories.addEventListener("click", (dets) => {

  sotry = (arr[dets.target.id].story)

  x.style.display = 'block'
  x.style.backgroundImage = `url(${sotry})`

  nav_containt = ` <div class="story">
                    <img src=${arr[dets.target.id].profile}  alt="">
                </div>
                <div id="story_h1">
                    <h1 style="font-size: 16px; margin-top: 4px; ">${arr[dets.target.id].name}</h1>
                    <h2 id="h1stry" style="font-size: 12px; font-weight: 500; ">Music</h2>
                </div>`
  y.innerHTML = nav_containt

  setTimeout(() => {
    x.style.display = 'none'
    clearInterval(interval)
  }, 3000)

  let z = 0
  let loading_grow = document.querySelector('#lf')

  let interval = setInterval(() => {
    z++
    loading_grow.style.width = z + '%'
  }, 30);
})

localStorage.setItem('theme' , 'dark')

let mode = document.querySelector('#icon')
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
