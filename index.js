currentTarget - always refers to the element to which the event handler has been attached to
target - identifies the element on which the event occured

 

btns.forEach(btn => {
  btn.addEventListener('click', function(e) {
     console.log(e.currentTarget);
     e.currentTarget.style.background = 'green';
    console.log('current', e.currentTarget);
    console.log('target', e.target);
  e.target.style.background = 'green';
  });
});


const btns = document.querySelectorAll(".btn")
btns.forEach(function(params) {
  console.log(params);
  params.style.background = 'yellow'
  
})

