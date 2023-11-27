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