$(document).ready(function () {
  $(".btn_txt_expend").bind("click", function (e) {
    e.preventDefault();
    $(this).closest(".apl_textarea").toggleClass("expend");
  });

  $(".aplv_popwrap").popup({
    scrolllock: true,
    transition: "all 0.3s",
  });

  $("#btnListMode").bind("click", function (e) {
    e.preventDefault();

    let thText = $(this).children("span");

    if (!$(this).hasClass("type_gallery")) {
      thText.text("갤러리형 보기");
      $(this).removeClass("type_list").addClass("type_gallery");
      $("#typeGallery").removeClass("active");
      $("#typeList").addClass("active");
    } else if (!$(this).hasClass("type_list")) {
      thText.text("리스트형 보기");
      $(this).removeClass("type_gallery").addClass("type_list");
      $("#typeList").removeClass("active");
      $("#typeGallery").addClass("active");
    }
  });
});
