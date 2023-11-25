/*(preloader starts)*/
var pLoad = document.getElementById("wrapLoader");
function pLoader() {
    pLoad.style.cssText = "display: none;";
}
/*(preloader ends)*/
/*(menu item responsive starts)*/
var menuItemId = document.getElementById("menuItemsId");
var menuIconId = document.getElementById("menuIconsId");
menuIconId.addEventListener("click", function() {
  if(menuItemId.style.opacity == "1"){
      menuItemId.style.cssText = "opacity: 0; right: -100%; transition: .5s; -webkit-transition: .5s;";
  }
  else{
    menuItemId.style.cssText = "opacity: 1; right: 0; transition: .5s; -webkit-transition: .5s;";
  }
});
/*(menu item responsive ends)*/
/*(owl carousel starts for connected with)*/
$('.connectedWithContents .owl-carousel').owlCarousel({
  loop:false,
  margin:30,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})
/*(owl carousel ends for connected with)*/
/*(owl carousel starts for quotes)*/
$('.quotesContents .owl-carousel').owlCarousel({
  loop:false,
  margin:0,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
/*(owl carousel ends for quotes)*/
/*(owl carousel starts for portfolio)*/
$('.myWorkContainer .owl-carousel').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  /*(owl carousel ends for portfolio)*/
  /*(owl carousel starts for client)*/
$('.clientContents .owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:6
        },
        1000:{
            items:8
        }
    }
  })
  /*(owl carousel ends for client)*/
  /*(owl carousel starts for testimonials)*/
$('.testimonialContents .owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
  })
  /*(owl carousel ends for testimonials)*/
  /*(contact form)*/
  const form = document.querySelector('form');
  const messageStatus = document.querySelector('#message-status');
  const fName = document.querySelector('#fName');
  const lName = document.querySelector('#lName');
  const email = document.querySelector('#email');
  const sub = document.querySelector('#sub');
  const message = document.querySelector('#message');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    messageStatus.textContent = ' Sorry, sending has failed. System not developed yet!';
    fName.value = '';
    lName.value = '';
    email.value = '';
    sub.value = '';
    message.value = '';
  });

  fName.addEventListener("focus", () => {
    messageStatus.innerText = "";
  });

  lName.addEventListener("focus", () => {
    messageStatus.innerText = "";
  });

  email.addEventListener("focus", () => {
    messageStatus.innerText = "";
  });

  sub.addEventListener("focus", () => {
    messageStatus.innerText = "";
  });

  message.addEventListener("focus", () => {
    messageStatus.innerText = "";
  });
  /*(contact form)*/
