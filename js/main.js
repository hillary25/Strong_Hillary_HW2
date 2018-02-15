(() => {
  console.log('fired!');

  //variables always go at the top
  var iconSet = document.querySelectorAll('svg');

  //functions here
  function logThisIcon(){
    console.log('click on this icon: ', this.id);

    //change opacity
    this.style.opacity = 0.5;

  }


  //event handling goes at the bottom
  iconSet.forEach(icon => icon.addEventListener('click',logThisIcon));
})();
