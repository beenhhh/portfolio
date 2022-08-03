var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('BEEN ')
    .pauseFor(2500)
    .typeString('BY')
    .pauseFor(2500)
    .deleteChars(7)
    .pauseFor(2500)
    .start();


    var du = 400;   //변수설정, 시간

//세번째 줄 .third    - 글씨가 중앙에서 
$('.flexbox .item').on('mouseenter',function(){
    $(this).find('.vn').stop().animate({opacity:1},du);
    $(this).find('.txt').stop().delay(200).animate({bottom:0},1000);
   // $(this).find('img').stop().animate({width:'110%'},du);
    $(this).find('img').css({'transform':'scale(1.1)'});
})
.on('mouseleave',function(){
    $(this).find('.vn').stop().delay(200).animate({opacity:""},du);
    $(this).find('.txt').stop().animate({bottom:'-50px'},du);
   // $(this).find('img').stop().animate({width:'100%'},du);
    $(this).find('img').css({'transform':'scale(1)'});
})



//클릭시 원하는 페이지로 이동
const menuCategory = document.querySelector('.main_categories');
menuCategory.addEventListener('click', (e) => {
    //console.log(e.target.dataset.key);
  const target = e.target;
  const menuKey = target.dataset.key;
  if (menuKey == null) {
    return;
  }
  const scrollMenu = document.querySelector(menuKey);
  scrollMenu.scrollIntoView({ behavior: 'smooth' });
});


$('.count').each(function() { // .count-num에 각각 적용
  var $this = $(this),
      countTo = $this.attr('data-count');
      // $this = 첫번째~세번째 .count-num
      // countTo = 첫번째~세번째 .count-num의 data-count 속성의 값(777,555,333)
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo 
    // countNum: $this.text() = 0, countNum: countTo = 777, 555, 333
    // 0에서 countNum이 된다
  },
  {
    duration: 3000, // 애니메이션이 완료될때까지 걸리는 시간
    easing:'linear', // 애니메이션 효과 방식
    step: function() { // 움직임 각 스텝별로 실행될 함수
      $this.text(Math.floor(this.countNum));
      // Math.floor -> this.countNum의 값을 정수로 만들어준다
    },
    complete: function() { // 움직임이 멈춘 후 실행될 함수
      $this.text(this.countNum);
      // this.countNum이 $this의 text값이 된다
      //alert('finished');
    }
  });  
});