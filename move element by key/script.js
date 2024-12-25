let img = document.querySelector('img')
let x = 0
let y = 0
document.addEventListener( 'keydown' , (dets)=>{
      console.log(dets.key);
    
      if( (dets.key == 'ArrowRight') &&  x<82){
        x+=2
        img.style.left = x + '%'
        // console.log(x);
      }
     else if((dets.key == 'ArrowLeft') && ( x >0) && (x<=82)) {
        x = x-2
        console.log(x);
        img.style.left = x + '%'
      }
     else if((dets.key == 'ArrowUp') && ( y >0) && (y<=82)) {
        y--
        console.log(y);
        img.style.top = y + '%'
      }
     else if((dets.key == 'ArrowDown') && (y<82)) {
        y++
        console.log(y);
        img.style.top= y + '%'
      }
      
})



















