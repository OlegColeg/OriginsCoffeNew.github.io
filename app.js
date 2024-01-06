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
document.getElementById('btntea').addEventListener('click', function() {
  if (a == 0) {
    document.getElementById('addteablock').style.display = 'flex';
   document.getElementById('tea__description').scrollIntoView();
    a++;
  }
  else {

    document.getElementById('addteablock').style.display = 'none';
    document.getElementById('tea_all').scrollIntoView();
    a--;
  }
  console.log(a);
});
// hamb list btn
document.getElementById('btn_hamb_coffee').addEventListener('click', function() {

    const coffeepage = document.getElementById('coffee1');
    coffeepage.scrollIntoView();
});
document.getElementById('btnb_coffee1').addEventListener('click', function() {

  const coffeepage = document.getElementById('coffee1');
  coffeepage.scrollIntoView();
});
document.getElementById('btn_hamb_tea').addEventListener('click', function() {

  const coffeepage = document.getElementById('tea_all');
  coffeepage.scrollIntoView();
});
document.getElementById('btn_hamb_contact').addEventListener('click', function() {

  const coffeepage = document.getElementById('contact_page');
  coffeepage.scrollIntoView();
});
// footer button
document.getElementById('footer_coffe').addEventListener('click', function() {

  const coffeepage = document.getElementById('coffee1');
  coffeepage.scrollIntoView();
});
document.getElementById('return_btn').addEventListener('click', function() {
  document.getElementById('gallery_box').style.display = 'grid';
  document.getElementById('gallery_btn_back').style.display = 'none';
  document.getElementById('barista_gallery_box').style.display = 'none';
  document.getElementById('ice_gallery_box').style.display = 'none';
  document.getElementById('anturaj_gallery_box').style.display = 'none';
  document.getElementById('clienti_gallery_box').style.display = 'none';
  
})

document.getElementById('barista').addEventListener('click', function() {
  document.getElementById('gallery_box').style.display = 'none';
document.getElementById('barista_gallery_box').style.display = 'grid';
document.getElementById('barista_gallery_box').style.paddingTop = '0px';
document.getElementById('gallery_btn_back').style.display = 'flex';

});

document.getElementById('ice_drinks').addEventListener('click', function() {
  document.getElementById('gallery_box').style.display = 'none';
  document.getElementById('ice_gallery_box').style.display = 'grid';
  document.getElementById('ice_gallery_box').style.paddingTop = '0px';
  document.getElementById('gallery_btn_back').style.display = 'flex';

  
})
document.getElementById('anturaj').addEventListener('click', function() {
  document.getElementById('gallery_box').style.display = 'none';
  document.getElementById('anturaj_gallery_box').style.display = 'grid';
  document.getElementById('anturaj_gallery_box').style.paddingTop = '0px';
  document.getElementById('gallery_btn_back').style.display = 'flex';

  
})
document.getElementById('relatii').addEventListener('click', function() {
  document.getElementById('gallery_box').style.display = 'none';
  document.getElementById('clienti_gallery_box').style.display = 'grid';
  document.getElementById('clienti_gallery_box').style.paddingTop = '0px';
  document.getElementById('gallery_btn_back').style.display = 'flex';

  
})