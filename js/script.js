$(document).ready(function(){
    // Home-slider //////////////////////////////////////////////////////////////////////////////
    $('.your-class').slick({
        infinite: true,
        speed:700,
        fade: true,
        autoplay: true,         
        autoplaySpeed: 2500,
        cssEase:"ease-out"
    });
    // Testimonial-slider ///////////////////////////////////////////////////////////////////////
    $('.slider').slick({
        accessibility:true,
        dots: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed:2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
