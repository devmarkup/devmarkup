$(function() {
    $('img').on('dragstart', function(event) { event.preventDefault(); });
});
// setEqualHeight
function setEqualHeight(columns) {
    var tallestcolumn = 0;
    columns.each(
        function() {
            currentHeight = $(this).height();
            if(currentHeight > tallestcolumn) {
                tallestcolumn = currentHeight;
            }
        }
    );
    columns.height(tallestcolumn);
}
$(document).ready(function() {
    setEqualHeight($('.services_holder > div'));
});
// slick carousel
$('.slick_sl').slick({
    slidesToShow: 3,
    infinite: true,
    arrows: false,
    dots: true,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});
$('.brand_sl').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    dots: true
});
// toggle mobile menu
$('.toggle').click(function () {
    $('.nav_block').toggle();
});
// nav menu
$(document).ready(function(){
    $('.nav, .arrow_down').on('click','a', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});
