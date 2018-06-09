// .click()
$("button").click(function() {
    var text = $(this).text();
    console.log("You clicked " + text);
});

// .keypress()

$("input[type='text']").keypress(function(event) {
    if (event.which === 13) {
        var text = $(this).val();
        alert("You typed " + text);
    }
});

// .on()

$("h1").on("click", function() {
    $(this).css("color", "purple");
});

$("input").on("keypress", function() {
    console.log("Keypressed!");
});

$("button").on("mouseenter", function() {
    $(this).css("font-weight", "bold");
});

$("button").on("mouseleave", function() {
    $(this).css("font-weight", "normal");
});