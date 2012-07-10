$(document).ready(function() {
	// choose text and images for the increase font size / decrease font size link 
	var LargerText='<img src=\"../images/plus.gif\"/> Larger Type';
	var SmallerText='<img src=\"../images/minus.gif\"/> Smaller Type';
	var LargerFontSize="16px";
	var SmallerFontSize="14px";
	$('.article').css("font-size","14px");  //default to 14 px
	// append the toggle link (Increase/Decrease) to the element directly preceding the element with a class of "toggle"
	$('.toggle').prev().append(' <a href="#" class="toggleLink">' + LargerText + '</a>');  //default to show larger text


	$('a.toggleLink').click(function(e) {

		$('.article').css("font-size","16px");
		// change the link depending on whether the font is larger or smaller
		var txt = $(e.target).text();
		if ($.trim(txt) == 'Smaller Type'){
			$('.article').css("font-size","14px");
			$(this).html ($(this).html()==LargerText ? SmallerText : LargerText);
		}else{
			$('.article').css("font-size","16px");
			$(this).html ($(this).html()==SmallerText ? LargerText : SmallerText);
		}
		// return false so any link destination is not followed
		return false;

	});
});

