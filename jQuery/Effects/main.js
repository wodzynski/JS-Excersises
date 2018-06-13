$("#fade").on("click", function() {
  $("div").fadeOut(1000, function() {
    // $(this).remove();
    console.log("Fade Completed!");
  });
});

$("#fadeback").on("click", function() {
  $("div").fadeIn(1000, function() {
    console.log("Fade Completed!");
  });
});

$("#slidedown").on("click", function() {
  $("div").slideDown(100);
});

$("#slideup").on("click", function() {
  $("div").slideUp(100);
});

$("#slidetoggle").on("click", function() {
  $("div").slideToggle(1000, function() {
    console.log("SLIDE IS DONE!");
    // $(this).remove();
  });
});
