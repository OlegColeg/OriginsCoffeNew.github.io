let i= 0;
document.getElementById('hamb').addEventListener('click', function() {
  if (i == 0) {
    document.getElementById('hamblist').style.display = 'flex';
    i++;
  }
  else {
    document.getElementById('hamblist').style.display = 'none';
    i--;
  }
  console.log(i);
});
let a= 0;
document.getElementById('btnb_coffee1').addEventListener('click', function() {
  if (a == 0) {

    a++;
  }
  else {
  
    a--;
  }
  console.log(a);
});

// document.getElementById('btnb_coffee').addEventListener('click', function() {

//     const coffeepage = document.getElementById('coffee1');
//     coffeepage.scrollIntoView();
// });
// document.getElementById('btnb_coffee1').addEventListener('click', function() {

//   const coffeepage = document.getElementById('coffee1');
//   coffeepage.scrollIntoView();
// });