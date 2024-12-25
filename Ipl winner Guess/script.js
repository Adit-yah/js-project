let arr = [{
    team_name:' RCB',
    logo:'https://imgs.search.brave.com/kjGlvDNnEi_nYL9Osrx2LQROdllhkjzc-_tEUngIhE0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mcGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvUm95YWwtQ2hh/bGxlbmdlcnMtQmFu/Z2Fsb3JlLUlQTC1S/Q0ItTG9nby1JUEwu/d2VicA' ,
},
 {
 team_name:' CSK',
 logo: 'https://imgs.search.brave.com/GQzb14liPA1XutUCmj7RB6JmTcVeAnoAndzyK5UKDwA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mcGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvQ2hlbm5haS1T/dXBlci1LaW5ncy1s/b2dvLUNTSy1Mb2dv/LUlQTC53ZWJw',
},
 {
 team_name:'MI ',
 logo: 'https://imgs.search.brave.com/-f86bzdG0xrGRzuYJb_Am0t038oBiDb5jkmtC0IRsLI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzVlLzBk/L2ZmLzVlMGRmZmY4/ZTg2NjZhZjdlMjI3/YmJiNmNjYmYwNzU2/LmpwZw' ,
},
 {
 team_name:'RR ',
 logo:'https://imgs.search.brave.com/oNnvNElH4IjBKR_n35uaUwB0lvzC_4iOx-J2cm1b3gY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzNjL2I3/Lzg5LzNjYjc4OThi/ZTAzMzYyMmQyZmNm/ZjY4OWJiZjk2NDkx/LmpwZw' ,
},
 {
 team_name:'DC ',
 logo: 'https://imgs.search.brave.com/jO-PAVJYQNIi4niTgWgvEJ2-BvmMdvCxyeq2g8aeyqY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzlhLzJi/Lzg0LzlhMmI4NGE3/ZjdiYjMyYzQ1NDA0/NTcxNWIxYTNhMmI3/LmpwZw',
},
 {
 team_name:'LSG' ,
 logo: 'https://imgs.search.brave.com/iOd9yr4VNNLC8KD0VcQuROlwR_eN62GXO1Rhov7jezk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mcGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvTHVja25vdy1T/dXBlci1HaWFudHMt/TG9nby1MU0ctTG9n/by1JUEwud2VicA',
},
 {
 team_name:'KKR',
 logo:'https://imgs.search.brave.com/cITrqNoGFjIoXYpg969dbkdLblx9cOuxtXlGNZvJK7M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzUwLzQy/LzI5LzUwNDIyOTU2/NzBiM2Y0ZTYxMDhi/ZGEwOTBhMzM5N2Jj/LmpwZw' ,    
},
 {
 team_name:'PBKS' ,
 logo:'https://imgs.search.brave.com/NVYfNi-XJkY9se_zzS3Xp1OMSBQArqobkAVCwJ9wY9s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzZhLzkw/Lzc1LzZhOTA3NWM5/MDc0NmNhN2QwZjlk/ZTkyODU0NmVmMjg1/LmpwZw' ,
},
 {
 team_name:' GT',
 logo: 'https://imgs.search.brave.com/6PMmfRSLm8AvCcM9__ZLKAMoNyEfag-fAuuUieAqcVk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mcGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvR3VqYXJhdC1U/aXRhbnMtTG9nby1H/VC1Mb2dvLUlQTC53/ZWJw' ,
},
 {
 team_name:'SRH' ,
 logo: 'https://imgs.search.brave.com/DUHHsz_DPudHV7t74MQJUtcd2hDzwNKY67jjf6hMCls/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aW1l/c29mcGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDkvU3VucmlzZXJz/LUh5ZGVyYWJhZC1M/b2dvLVNSSC1Mb2dv/LUlQTC53ZWJw' ,
},]

let team_name = document.querySelector('.team_name h2')
let team_logo = document.querySelector('.team_logo')
let  btn = document.querySelector('button')

arr.forEach(function (elem) {


})

btn.addEventListener('click' , ()=>{
  let y =    Math.floor(Math.random()*10)
  console.log(y);
 team_name.innerHTML = `${arr[y].team_name}`
 team_logo.style.backgroundImage = `url(${arr[y].logo})` 
})
