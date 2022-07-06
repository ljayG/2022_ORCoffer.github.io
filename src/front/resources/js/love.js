$(document).ready(function () {
  $(".btn_txt_expend").bind("click", function (e) {
    e.preventDefault();
    $(this).closest(".apl_textarea").toggleClass("expend");
  });

  $(".aplv_popwrap").popup({
    scrolllock: true,
    transition: "all 0.3s",
  });
});
