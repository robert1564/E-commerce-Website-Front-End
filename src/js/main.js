let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // nr va determina cat va dura animatia.
        duration: 4000,
        // indica ce funtie de easeing se utilizeaza pt tranzitie.
        easing: "swing",
        /**
         * o functie care trebuie apelata pentru fiecare proprietate animata a fiecarui element. 
         * aceasta functie ofera posibilitatea de a
         * modifica obiectul tween pentru a schimba valoarea propietatii inainte de a fi setata.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // .offset() ne permite sa regasim pozitia curenta a unui element in raport cu documentul
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



// Sticky Navigation

let navbar = $(".navbar");

$(window).scroll(function () {
  // bar show
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

// Smooth Scrolling
$('.navbar a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});