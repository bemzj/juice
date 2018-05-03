$(function(){

});
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
	stop();
	switch(parseInt(id))
	{
		case 0:
			var elseN = 1000-parseInt(n);
			$('.page125').show().hide().removeClass('animated bounceIn');
			html += '<div class="gj1 animated bounceInDown"><img src="img/sni26.png" /></div><div class="gj2 animated bounceIn">';
			html += '<img src="img/sni27.png" /></div><div class="gj3 animated rollIn">';
			html += '<p>您已成功榨取<span>'+n+'ml</span>新鲜果汁还差<span>'+elseN+'ml</span>就能免费领榨汁机</p>';
			break;
		case 1:
			$('.page125').show().hide().removeClass('animated bounceIn');
			html += '<div class="gj1 animated bounceInDown"><img src="img/sni29.png" /></div><div class="gj2 animated bounceIn">';
			html += '<img src="img/sni30.png" /></div><div class="gj3 animated rollIn">';
			html += '<p>碰倒榨汁机，洒了<span>'+n+'ml</span>果汁！<br/>你也快快来免费领榨汁机套装吧！</p>';
			break;
		case 2:
			$('.page125').show().hide().removeClass('animated bounceIn');
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
	var timeout;
	$('.jClose a').on('click', function() {
		$(this).addClass('animated fadeOutDown');
		$('.getJuice').addClass('animated bounceOut');
		clearTimeout(timeout);
		setTimeout(function(){
			move();
			$('#getJuice').remove();
			switch(id)
			{
				case 0:	
					app.btnCode=2;
					app.wxNumber = n;
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);
					break;
				case 1:	
					app.btnCode=4;
					setTimeout(function(){
						$('.page1113').show().addClass('animated bounceInDown');
					},200);
					
					app.wxNumber += -n;
					app.change = 1;
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);
					break;
				case 2:	
					app.btnCode=4;
					setTimeout(function(){
						$('.page1113').show().addClass('animated bounceInDown');
					},200);
					app.wxNumber += n;
					app.change = 1;
					
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);

					break;
				case 3:	
					app.btnCode=6;
					break;
			}
		},900);
		
	});
	timeout = setTimeout(function(){
		
		$('.jClose a').addClass('animated fadeOutDown');
		$('.getJuice').addClass('animated bounceOut');
		setTimeout(function(){
			move();
			$('#getJuice').remove();
			switch(id)
			{
				case 0:	
					app.btnCode=2;
					app.wxNumber = n;
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);
					break;
				case 1:	
					app.btnCode=4;
					setTimeout(function(){
						$('.page1113').show().addClass('animated bounceInDown');
					},200);
					app.wxNumber += -n;
					app.change = 1;
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);
					break;
				case 2:	
					app.btnCode=4;
					setTimeout(function(){
						$('.page1113').show().addClass('animated bounceInDown');
					},200);
					app.wxNumber += n;
					app.change = 1;
					var wxvar = app.wxNumber/1000;
					setAnimate(wxvar,500);
					break;
				case 3:	
					app.btnCode=6;		
					break;
			}
		},900);
	},5000);
}
//分享页面
function sharing(){
	$('#share').remove();
	stop();
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
			move();
		},900);
	});
		
}

function setAnimate(wxvar,time){
	$('.page125').show().hide().removeClass('animated bounceIn')
	setTimeout(function() {
		if(wxvar <= 0.74) {
	
			$('.page122').css('width', wxvar * 100 + '%');
			setTimeout(function() {
				if(0.05 >= wxvar) {
					$('.page125').css('left', '-5%');
				} else {
					$('.page125').css('left', (wxvar - 0.1) * 100 + '%');
				}
				$('.page125').show().addClass('animated bounceIn');
			}, 800);
		} else {
			$('.page122').css('width', '74%');
			$('.page1223').css('width', '79.8%');
			setTimeout(function() {
				$('#page1 .page123 .page1232').css('width', parseInt((wxvar - 0.74) / 0.26 * 100) + '%');
				$('.page125').css({
					'left': '82%',
					'bottom': '95%'
				}).show().addClass('animated bounceIn');
			}, 700);
		}
	}, time);
}
