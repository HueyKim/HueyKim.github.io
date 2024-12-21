/**
 * Menu
 */
$("a.menu-icon").on("click", function(event) {
  var w = $(".menu");

  w.css({
    display: (w.css("display") === "none")
      ? "block"
      : "none"
  });
});

/**
 * Footer year
 */
$(document).ready(function() {
  $("#year").text(new Date().getFullYear());
});

/**
 * Footer email
 */
$(document).ready(function() {
  $(".email-link-cloaked").on("click", function(event) {
    const _link = event.target;

    const _user = reverseString(_link.getAttribute("data-resu"));
    const _domain = reverseString(_link.getAttribute("data-eman-niamod"));
    const _tld = reverseString(_link.getAttribute("data-dlt-niamod"));

    window.location.href = `mailto:${_user}@${_domain}.${_tld}`;
  });
});

/**
 * Reverses a string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Moves WeChat widget
 */
function moveWidget(event) {
  var w = $("#wechat-widget");

  w.css({
    left: event.pageX - 25,
    top: event.pageY - w.height() - 60
  });
}

$("a#wechat-link").on("mouseenter", function(event) {
  $("#wechat-widget").css({ display: "block" });

  moveWidget(event);
});

$("a#wechat-link").on("mousemove", function(event) {
  moveWidget(event);
});

$("a#wechat-link").on("mouseleave", function(event) {
  $("#wechat-widget").css({ display: "none" });
});

/**
 * Language toggle for Short Bio
 */
$(document).ready(function () {
  const bioContainer = $("#short-bio-content");
  const btnKorean = $("#btn-korean");
  const btnEnglish = $("#btn-english");

  // JSON 파일 경로
  const bioJsonPath = "/assets/data/bio.json";

  // 소개글 데이터를 저장할 변수
  let bioData = {};

  // JSON 파일 로드
  $.getJSON(bioJsonPath, function (data) {
    bioData = data;

    // 기본값: Korean
    bioContainer.text(bioData.korean);
  });

  // 버튼 클릭 이벤트
  btnKorean.on("click", function () {
    bioContainer.text(bioData.korean);
    btnKorean.addClass("active");
    btnEnglish.removeClass("active");
  });

  btnEnglish.on("click", function () {
    bioContainer.text(bioData.english);
    btnEnglish.addClass("active");
    btnKorean.removeClass("active");
  });
});