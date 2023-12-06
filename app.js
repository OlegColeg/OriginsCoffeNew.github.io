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
// let ii= 0;
// document.getElementById('btntea').addEventListener('click', function() {
//   if (ii == 0) {
//     document.getElementById('over_tea').style.display = 'flex';
//     ii++;
//   }
//   else {
//     document.getElementById('over_tea').style.display = 'none';
//     ii--;
//   }
//   console.log(ii);
// });
let ii= 0;
document.getElementById('btntea').addEventListener('click', function() {
  if (ii == 0) {
    const overTeaElement = document.getElementById('over_tea');
    overTeaElement.style.display = 'flex';
    overTeaElement.scrollIntoView({behavior: "smooth"});
    ii++;
  }
  else {
    document.getElementById('over_tea').style.display = 'none';
    ii--;
  }
  console.log(ii);
});