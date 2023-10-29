document.getElementById('menuBtn').addEventListener('click', function(){
   document.getElementById('app').classList.add('opened'); 
});

document.getElementById('sideNavBg').addEventListener('click', function(){
   document.getElementById('app').classList.remove('opened'); 
});