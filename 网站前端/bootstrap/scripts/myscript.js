$(function(){
 //鼠标经过事件
 $('li a').hover(function(){
 //当光标进入时执行 this代表当前绑订事件的那个dom节点
 $(this).css('background-color','red');
 },function(){
 //当光标移出时执行
 $(this).css('background-color','#fff8dc');
 });
 
 
 	$('#a1').toggle(function(){
	//模块1
 		$(this).after("<div id='tips1'></div>");
 		$('#tips1').html('<ul id="uul"><li><a  id="innera" href="home1_1.html">党支部管理</a></li><li><a id="innera" href="home1_2.html">党支部生活</a></li><li><a id="innera" href="home1_3.html"><span class="glyphicon glyphicon-search"></span>简单查询</a></li></ul>');
 },function(){
 $('#tips1').remove();
 });
 //模块2
 $('#a2').toggle(function(){
 		$(this).after("<div id='tips2'></div>");
 		$('#tips2').html('<ul id="uul"><li><a  id="innera" href="home2_1.html">基本信息维护</a></li><li><a id="innera" href="home2_2.html">党员业务管理</a></li><li><a id="innera" href="home2_3.html">党员进出管理</a></li><li><a id="innera" href="home2_4.html">简单查询</a></li></ul>');
 },function(){
 $('#tips2').remove();
 });
 //模块3
 $('#a3').toggle(function(){
 		$(this).after("<div id='tips3'></div>");
 		$('#tips3').html('<ul id="uul"><li><a id="innera" href="home3_1.html">基本信息维护</a></li><li><a id="innera" href="home3_2.html">入党申请人员业务</a></li><li><a id="innera" href="home3_3.html">积极分子业务</a></li><li><a id="innera" href="home3_4.html">发展对象业务</a></li></ul>');
 },function(){
 $('#tips3').remove();
 });
 //模块4
 $('#a4').toggle(function(){
 		$(this).after("<div id='tips4'></div>");
 		$('#tips4').html('<ul id="uul"><li><a id="innera" href="home4_1.html">统计报表系统</a></li></ul>');
 },function(){
 $('#tips4').remove();
 });
 });