var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

// Require module
var TiSMPageControl 	= require('de.marcelpociot.smpagecontrol');

// Examples
var tintingBtn = Ti.UI.createButton({
	layout: 'horizontal',
	top: 50,
	width: 200,
	height: 50,
	title: 'Tinting Example'
});
win.add( tintingBtn );
tintingBtn.addEventListener('click',function(e){
	var exampleWin  = Ti.UI.createWindow({ backgroundColor: 'white', title: 'Tinting example' });
	var closeBtn	= Ti.UI.createButton({ title: 'Close' });
	closeBtn.addEventListener('click',function(e){ exampleWin.close(); });
	exampleWin.rightNavButton = closeBtn;
	var customScrollView	= TiSMPageControl.createScrollableView({
		showPagingControl: true,
		pageIndicatorTintColor: 'red',
		currentPageIndicatorTintColor: '#FF9900',
		pagingControlAlignment: 'center',
		pagingControlDiameter: 10,
		pagingControlMargin: 15,
		views: [
			Ti.UI.createView({backgroundColor: 'red'}),
			Ti.UI.createView({backgroundColor: 'blue'}),
			Ti.UI.createView({backgroundColor: 'green'}),
			Ti.UI.createView({backgroundColor: 'pink'})
		]
	});
	exampleWin.add(customScrollView);
	exampleWin.open({
		modal: true
	});
});
// Alignment example
var alignmentBtn = Ti.UI.createButton({
	layout: 'horizontal',
	top: 100,
	width: 200,
	height: 50,
	title: 'Alignment Left'
});
win.add( alignmentBtn );
alignmentBtn.addEventListener('click',function(e){
	var exampleWin  = Ti.UI.createWindow({ backgroundColor: 'white', title: 'Alignment example' });
	var closeBtn	= Ti.UI.createButton({ title: 'Close' });
	closeBtn.addEventListener('click',function(e){ exampleWin.close(); });
	exampleWin.rightNavButton = closeBtn;
	var customScrollView	= TiSMPageControl.createScrollableView({
		showPagingControl: true,
		pagingControlAlignment: 'left',
		pagingControlDiameter: 10,
		pagingControlMargin: 15,
		views: [
			Ti.UI.createView({backgroundColor: 'red'}),
			Ti.UI.createView({backgroundColor: 'blue'}),
			Ti.UI.createView({backgroundColor: 'green'}),
			Ti.UI.createView({backgroundColor: 'pink'})
		]
	});
	exampleWin.add(customScrollView);
	exampleWin.open({
		modal: true
	});
});
// Images example
var imageBtn = Ti.UI.createButton({
	layout: 'horizontal',
	top: 150,
	width: 200,
	height: 50,
	title: 'Indicator images'
});
win.add( imageBtn );
imageBtn.addEventListener('click',function(e){
	var exampleWin  = Ti.UI.createWindow({ backgroundColor: 'white', title: 'Image example' });
	var closeBtn	= Ti.UI.createButton({ title: 'Close' });
	closeBtn.addEventListener('click',function(e){ exampleWin.close(); });
	exampleWin.rightNavButton = closeBtn;
	var customScrollView	= TiSMPageControl.createScrollableView({
		showPagingControl: true,
		pagingControlHeight: 30,
		pageIndicatorImage: 'pageDot.png',
		currentPageIndicatorImage: 'currentPageDot.png',
		views: [
			Ti.UI.createView({backgroundColor: 'red'}),
			Ti.UI.createView({backgroundColor: 'blue'}),
			Ti.UI.createView({backgroundColor: 'green'}),
			Ti.UI.createView({backgroundColor: 'pink'})
		]
	});
	exampleWin.add(customScrollView);
	exampleWin.open({
		modal: true
	});
});
// Image mask example
var maskBtn = Ti.UI.createButton({
	layout: 'horizontal',
	top: 200,
	width: 200,
	height: 50,
	title: 'Indicator mask images'
});
win.add( maskBtn );
maskBtn.addEventListener('click',function(e){
	var exampleWin  = Ti.UI.createWindow({ backgroundColor: 'white', title: 'Mask example' });
	var closeBtn	= Ti.UI.createButton({ title: 'Close' });
	closeBtn.addEventListener('click',function(e){ exampleWin.close(); });
	exampleWin.rightNavButton = closeBtn;
	var customScrollView	= TiSMPageControl.createScrollableView({
		showPagingControl: true,
		pagingControlHeight: 30,
		pageIndicatorTintColor: 'red',
		currentPageIndicatorTintColor: 'blue',
		pageIndicatorMaskImage: 'appleMask.png',
		views: [
			Ti.UI.createView({backgroundColor: 'red'}),
			Ti.UI.createView({backgroundColor: 'blue'}),
			Ti.UI.createView({backgroundColor: 'green'}),
			Ti.UI.createView({backgroundColor: 'pink'})
		]
	});
	exampleWin.add(customScrollView);
	exampleWin.open({
		modal: true
	});
});
// per page images example
var perImageBtn = Ti.UI.createButton({
	layout: 'horizontal',
	top: 200,
	width: 200,
	height: 50,
	title: 'per-page images'
});
win.add( perImageBtn );
perImageBtn.addEventListener('click',function(e){
	var exampleWin  = Ti.UI.createWindow({ backgroundColor: 'white', title: 'Per Page example' });
	var closeBtn	= Ti.UI.createButton({ title: 'Close' });
	closeBtn.addEventListener('click',function(e){ exampleWin.close(); });
	exampleWin.rightNavButton = closeBtn;
	var customScrollView	= TiSMPageControl.createScrollableView({
		showPagingControl: true,
		pagingControlMargin: 35,
		pagingControlHeight: 30,
		images: [{
					image: 'appleDot.png',
					page: 0
				},
				{
					image: 'pageDot.png',
					page: 1
				}],
		currentImages: [{
					image: 'currentAppleDot.png',
					page: 0
				},
				{
					image: 'currentPageDot.png',
					page: 1
				}],
		views: [
			Ti.UI.createView({backgroundColor: 'red'}),
			Ti.UI.createView({backgroundColor: 'blue'}),
			Ti.UI.createView({backgroundColor: 'green'}),
			Ti.UI.createView({backgroundColor: 'pink'})
		]
	});
	exampleWin.add(customScrollView);
	exampleWin.open({
		modal: true
	});
});

win.open();