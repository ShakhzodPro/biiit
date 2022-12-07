/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  $(document).ready(function(){
    $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active')
      $('body').toggleClass('lock')
      $('.header').toggleClass('full')
    })
  });
  new WOW().init();



  