let btn = document.querySelector('button')
let bdy = document.querySelector('body')
let arr = ['https://imgs.search.brave.com/EaVK15AN5KRQYCCpO8V8AeYDl992Xk7uYUovlXLBSEc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxNy8w/NS9JbnNlY3QucG5n',
    'https://imgs.search.brave.com/gFwKi4hP64KBoLhVJ9lptnrHkxavEfkZ9P3JDf0YqsI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEyL0Fu/dHMtUE5HLUhELVF1/YWxpdHkucG5n',
    'https://imgs.search.brave.com/Dh6UAGI9egaj-qkxMe-PT5so8-rcAARNW9-Ca94eB00/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NC9Dcmlja2V0LUlu/c2VjdC1QTkctUGlj/LnBuZw',
    'https://imgs.search.brave.com/TRTfqIEVsFDCNRLMa3Nfsyh90BYUg70Ba5WrlU0wWcw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOC8w/NC9Dcmlja2V0LUlu/c2VjdC5wbmc',
'https://imgs.search.brave.com/DdPumfYNeDNi1Q_vUAVq_pUjqULOFFaJAc_cWPbaxAg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5ncGxheS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzEvQnV0/dGVyZmx5LVBORy1U/cmFuc3BhcmVudC1J/bWFnZXMucG5n',
]

let interval
let flag = 0
btn.addEventListener('click', ()=>{
    
    btn.innerHTML = 'Stop Generating'
    if(flag==0){
         
    interval =   setInterval(()=>{
            let a = Math.random()*80
            let c =Math.floor (Math.random()*(arr.length))
            console.log(c);
            
            let b = Math.random()*80
            let img = document.createElement('img')
            bdy.appendChild(img)
            
            img.setAttribute('src' , `${arr[c]}`)
            img.style.position = 'absolute'
            img.style.left =  a+'%'
            img.style.top =  b+'%'
            img.style.zIndex = '-1'
            img.style.height = '90px'
            // console.log(img);
        },500)
        flag=1
    }
    else{
        btn.innerHTML = 'Generate Insects'
        clearInterval(interval)
        
        flag = 0
    }
})
