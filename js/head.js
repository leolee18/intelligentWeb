var daoHangLine = document.getElementById('daoHangLine');
var mInitLeft = daoHangLine.offsetLeft;
var mTime = 0;
var mInitTn = parseInt(daoHangLine.dataset.tn)

var mLineLeft = mInitLeft;
$(".sen-dh-li").hover(function(e){
	var mEle = e.currentTarget;
	if(mEle.className == 'sen-dh-li'){
		mLineLeft = mEle.offsetLeft;
		lineAnimation(parseInt(mLineLeft),parseInt(mEle.dataset.tn));
	}
},function(e){
	var mEle = e.currentTarget;
	if(mEle.className == 'sen-dh-li'){
		mLineLeft = mInitLeft;
		lineAnimation(parseInt(mLineLeft)-9,parseInt(mInitTn));
	}
});

function lineAnimation(mLeft,mWid){
	clearTimeout(mTime);
	mTime = setTimeout(function(){
		$(daoHangLine).velocity({left:(mLeft+9)+'px',width:(mWid*22)+'px'}, { duration:300});
	},100);
}


