var memberCountConTxt= 385;
  
  $({ val : 0 }).animate({ val : memberCountConTxt }, {
   duration: 4000,
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $(".memberCountCon2").text(num);
  }
});

//3자리마다 , 찍기
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}