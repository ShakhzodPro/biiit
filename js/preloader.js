document.body.onload = function() {
    setTimeout(function(){
      var preloader = document.getElementById("loading")
      if( !preloader.classList.add('done'))
      {
        preloader.classList.add('done')
      }
    }, 1000)
  }
