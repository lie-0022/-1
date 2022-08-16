//배열: 하나의 변수에 여러 값이 저장됨
let slide = $("#slider a");
let sno = 0; 
function playSlide(){
	$(slide[sno]).animate({left:"100%"},1000,function(){
		$(this).css({left:"-100%"});
	});
	sno++; //sno = sno + 1;
	if( sno > 2 ) sno = 0;
	$(slide[sno]).animate({left:"0"},1000);
}

let timer = setInterval(function(){
	playSlide();
},3000);

function openPop() {
	$("#modal, #pop").show();
}
function closePop() {
	$("#modal, #pop").hide();
}