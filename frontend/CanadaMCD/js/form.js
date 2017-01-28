$("form").submit(function() {
    $.ajax({
        type: "POST",
        url: "../mail.php",
        data: $("form").serialize()
    }).done(function() {
        alert("Thanks for the request!");
        setTimeout(function() {
            $.fancybox.close();
        }, 1000);
    });
    return false;
});