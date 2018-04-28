//点击获取
function gJuice(id,n){
	$('#getJuice').remove();
	var html = "";
	html += '<div id="getJuice" class="pw"><div class="getJuice">';
	html += '<img src="img/sni25.png" />';
	/*
	 * id：0，第一次领取的页面
	 * id：1，晒到的弹窗
	 * id：2，成功榨取
	 * id：3：领取成功
	 */
	
	switch(parseInt(id))
	{
		case 0:
			var elseN = 1000-parseInt(n);
			html += '<div class="gj1 animated bounceInDown"><img src="img/sni26.png" /></div><div class="gj2 animated bounceIn">';
			html += '<img src="img/sni27.png" /></div><div class="gj3 animated rollIn">';
			html += '<p>您已成功榨取<span>'+n+'ml</span>新鲜果汁还差<span>'+elseN+'ml</span>就能免费领榨汁机</p>';
			break;
		case 1:
			html += '<div class="gj1 animated bounceInDown"><img src="img/sni29.png" /></div><div class="gj2 animated bounceIn">';
			html += '<img src="img/sni30.png" /></div><div class="gj3 animated rollIn">';
			html += '<p>碰倒榨汁机，洒了<span>'+n+'ml</span>果汁！<br/>你也快快来免费领榨汁机套装吧！</p>';
			break;
		case 2:
			html += '<div class="gj1 animated bounceInDown"><img src="img/sni26.png" /></div><div class="gj2 animated bounceIn">';
			html += '<img src="img/sni27.png" /></div><div class="gj3 animated rollIn">';
			html += '<p>成功帮TA榨取了<span>'+n+'ml</span>果汁！<br/>你也快快来免费领榨汁机套装吧！</p>';
			break;
		case 3:
			html += '<div class="gj1 animated bounceInDown" style="top:13%"><img src="img/sni31.png" />';
			html += '</div><div class="gj4 animated bounceIn"><p>收货信息已提交！</p></div>';
			html += '<div class="gj4 gj5 animated rollIn">';
			html += '<p>奖品将在14个工作日内寄出请注意查收</p>';
			break;
	}
	html += '</div></div><div class="jClose animated fadeInUp">';
	html += '<a href="###"><img src="img/sni28.png" /></a></div></div>';
	$('body').append(html);
	$('.jClose a').on('click', function() {
		$(this).addClass('animated fadeOutDown');
		$('.getJuice').addClass('animated bounceOut');
		setTimeout(function(){
			$('#getJuice').remove();
		},900);
	});
}
//分享页面
function sharing(){
	$('#share').remove();
	var html = "";
	html += '<div id="share" class="pw"><div class="share1  animated fadeInDown">';
	html += '<img src="img/sni32.png" /></div>';
	html += '<div class="share2 animated bounceIn">';
	html += '<img src="img/sni33.png" /></div></div>';
	$('body').append(html);
	$('#share').on('click',function(){
		$('.share1').addClass('animated fadeOutUp');
		$('.share2').addClass('animated bounceOut');
		setTimeout(function(){
			$('#share').remove();
		},900);
	});
		
}
