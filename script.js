const displayRules = document.querySelector('.display-rules')
const redCross=document.querySelector('.red-cross')
const rb = document.querySelector('.rb')
const nb =document.querySelector('.nb')
const pa =document.querySelector('.pa-btn')
const center=document.querySelector('.center-content')
const firstFrame=document.querySelector('.firstFrame')


pa.addEventListener('click',()=>{
  center.style.display='none'
  firstFrame.style.display='flex'
})

rb.addEventListener('click', ()=>{
  displayRules.style.display='block'
})

redCross.addEventListener('click',()=>{
  displayRules.style.display='none'
  
})

// nb.addEventListener('click',()=>{
//   body.style.display=
// })


document.getElementById('demo').addEventListener('click', function() {
  var contentDiv = document.getElementById('body');
  contentDiv.innerStyle = `
    
  `;
});
