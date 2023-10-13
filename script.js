var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < 150 && $(window).width()>430) {
    $("nav").css("backgroundColor","transparent");
    $(".container").css("height","9rem");
    $(".menu-links").css("paddingTop","3rem");
    $(".menu-links").css("paddingBottom","3rem");
    $(".menu-links").css("color","#16161a");
    $(".menu-links").hover(
      function() {
        $(this).css("color","#eaeaea");
      }, function() {
        $(this).css("color","#16161a");
      });
      $(".logo-name a").css("color","#16161a");
      $(".logo-name a").hover(
        function() {
          $(this).css("color","#eaeaea");
        }, function() {
          $(this).css("color","#16161a");
        });
    } 
  else {
 //   $("nav").css("background","linear-gradient(90deg, rgba(224,116,22,0.8892507686668417) 0%, rgba(255,157,0,1) 50%, rgba(255,238,0,0.8052171552214635) 100%)")
    $("nav").css("backgroundColor","#16161a");
    $(".container").css("height","7rem");
    $(".menu-links").css("paddingTop","2.4rem");
    $(".menu-links").css("paddingBottom","2.4rem"); 
    $(".menu-links").css("color","#d06502");
    $(".menu-links").hover(
      function() {
        $(this).css("color","#eaeaea");
      }, function() {
        $(this).css("color","#d06502");
      });
      $(".logo-name a").css("color","#d06502");
      $(".logo-name a").hover(
        function() {
          $(this).css("color","#eaeaea");
        }, function() {
          $(this).css("color","#d06502");
        });
    }
  prevScrollpos = currentScrollPos;
  
}
        
$(".nav-icon").click(function() {

  
  $("#navbar").toggleClass('responsive');
  
  
  });