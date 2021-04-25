

   // start carousel

   $(document).ready(function(){
    $('.carousel__inner').slick({
      dots: true,

    });
              
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  function toggleSlide(item){
    $(item).each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
      })
    });
  };
  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //end carousel
  
  //Modal

    $('[data-modal=consultation]').on('click', function() {
       $('.overlay, #consultation').fadeIn('slow');
     });

       $('.modal__close').on('click', function(){
         $('.overlay, #consultation, #order, #thanks').fadeOut(1000);
       });
      // $('.button_mini').on('click', function(){
           //$('#order').fadeIn('slow');
          // $('.overlay, #order').fadeIn('slow');
      // });

       $('.button_mini').each(function(i){
          $(this).on('click', function(){
              $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
              $('.overlay, #order').fadeIn('slow');
          })
       });

      //  let $elems = $('div, .button_mini ');
      //  $elems.css({'color':'blue'});
     
    
      // plugin validate

     //let valid = $('#consultation-form,  #consultation form,   #order form').validate();

     //$('#consultation-form').validate();
     


     

    function validateForms(form){
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: {
             required: true,
             minlength: 8
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
         name: {
           required: "Введите ваше имя",
           minlength: jQuery.validator.format("Не менее {0} символов!")
         },
         phone: {
          required: "Введите ваш номер телефона",
          minlength: jQuery.validator.format("Не менее {0} цифр!")
         },
         email: {
           required: "Введите вашу почту для связи",
           email: "Не правильно введён адрес !"
         }
       }
 
      });
    };
      validateForms('#consultation-form');
      validateForms('#consultation form');
      validateForms('#order form');

      $("input[name=phone]").mask("+7(999) 999-99-99");

// start mailer

$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
    }).done(function(){
      $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
    });
    return false;
});


// Smooth scroll and pageup

    $(window).scroll(function(){
      if( $(this).scrollTop() > 1600){
        $('.pageup').fadeIn();

      } else{
        $('.pageup').fadeOut();
      }
    });

    $("a[href=#up]").click(function(){
      var _href = $(this).attr("href");
      $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
      return false;
});

  });


