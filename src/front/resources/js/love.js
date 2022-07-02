$(document).ready(function () {
  $(".btn_txt_expend").bind("click", function (e) {
    e.preventDefault();
    $(this).closest(".apl_textarea").toggleClass("expend");
  });
});
