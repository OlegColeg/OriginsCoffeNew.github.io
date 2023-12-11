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
let ii= 0;
document.getElementById('btntea').addEventListener('click', function() {
  if (ii == 0) {
    document.getElementById('over_tea').style.display = 'flex';
    ii++;
  }
  else {
    document.getElementById('over_tea').style.display = 'none';
    ii--;
  }
  console.log(ii);
});

document.getElementById('btnb_coffee').addEventListener('click', function() {

    const coffeepage = document.getElementById('coffee1');
    coffeepage.scrollIntoView({behavior: "smooth"});
    ii++;
});