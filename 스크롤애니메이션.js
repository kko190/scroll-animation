$(window).scroll(function () {
  let height = $(window).scrollTop();

  let y = (-1 / 520) * height + 125 / 52;
  $(".card-box").eq(0).css("opacity", y);
  let z = (-1 / 4200) * height + 5023 / 4200;
  $(".card-box").eq(0).css("transform", `scale(${z})`);

  // let d = (-1 / 439) * height + 1805 / 439;
  // $(".card-box").eq(1).css("opacity", d);
  // let h = (-1 / 4390) * height + 1805 / 4390;
  // $(".card-box").eq(1).css("transform", `scale(${h})`);
});

// opacity1 : 730, opacity0 : 1250
