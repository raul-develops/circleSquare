$(document).ready(function() {
    $(".circle").click(function() {
        $(this).hide();
        $(".square").toggle();
    });
});