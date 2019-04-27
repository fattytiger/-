window.onload=function(){
	var my_cd = document.getElementById("my_cd")
	if(my_cd.getContext){
		var ctx = my_cd.getContext('2d');
		ctx.save();
		ctx.lineWidth = 8;
		ctx.strokeStyle = "black";
		ctx.lineCap = "round";
		ctx.translate(235,235)
		ctx.beginPath();
		//外层空心
		ctx.save();
		ctx.strokeStyle = "#b0b1ab"
		ctx.lineWidth = 30;
		ctx.beginPath();
		ctx.arc(0,0,200,0,360*Math.PI/180);
		ctx.stroke();

		//内层空心
		ctx.save();
		ctx.strokeStyle = "#454545"
		ctx.lineWidth=60;
		ctx.beginPath();
		ctx.arc(0,0,170,0,360*Math.PI/180);
		ctx.stroke();
		
		//最内层
		ctx.save();
		ctx.strokeStyle = "#101010"
		ctx.lineWidth=30;
		ctx.beginPath();
		ctx.arc(0,0,130,0,360*Math.PI/180);
		ctx.stroke();
		
		//填充图片
		
		
		//内线
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,145,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,150,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,155,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,160,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,165,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,170,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,175,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,180,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,185,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,190,0,360*Math.PI/180);
		ctx.stroke();
		
		ctx.save();
		ctx.strokeStyle = "#343436"
		ctx.lineWidth=1;
		ctx.beginPath();
		ctx.arc(0,0,195,0,360*Math.PI/180);
		ctx.stroke();
	}
	/*
	 1.点击关闭按钮，列表下拉#close
	 2.点击播放列表。列表上啦#play_list
	 */
	var close_list = $("#close");
	var show_list = $("#show_list");
	//获取播放列表
	var play_list = $(".play_list");
	var compress = $("#compress");
	var footer = $(".footer");
	
	close_list.click(function(){
		display_list(true);
	})
	show_list.click(function(){
		display_list(false)
	})
	function display_list(e){
		if(e){
			play_list.css("bottom","-700px");
		}
		if(!e){
			play_list.css("bottom","30px");
		}
	}
	
	/*
	 
	 * 1.点击compress按钮，将按钮转换成expend
	 * 2.将footer隐藏
	 * */
	compress.click(function(){
		if(compress.hasClass("fa-compress")){
			compress.removeClass("fa-compress");
			compress.addClass("fa-expand");
			footer.css("bottom","-50px");
			play_list.css("bottom","-700px");
		}else{
			compress.removeClass("fa-expand")
			compress.addClass("fa-compress");
			footer.css("bottom","0");
		}
	})
	
	
	
	
	//数据渲染
	//渲染歌名，歌手，专辑，来源，歌词
	var data_list =[
	{
		"id":0,
		"song":"方圆几里",
		"album":"绅士",
		"singer":"薛之谦",
		"source":"我喜欢",
		"url":"./img/all_music/fangyuanjili.mp3",
		"cover":"./img/music_pic/薛之谦_方圆几里.png",
		"lyric":[{"time":18,"lineLyric":"感觉很诚恳是好事"},{"time":26,"lineLyric":"不需要发誓 那么幼稚"},{"time":34,"lineLyric":"本以为可以 就这样随你"},{"time":42,"lineLyric":"反正我也无处可去"},{"time":50,"lineLyric":"我怕太负责任的人"},{"time":58,"lineLyric":"因为他随时会牺牲"},{"time":66,"lineLyric":"爱不爱都可以 我怎样都依你"},{"time":73,"lineLyric":"连借口 我都帮你寻"},{"time":81,"lineLyric":"与其在你不要的世界里"},{"time":85,"lineLyric":"不如痛快把你忘记"},{"time":89,"lineLyric":"这道理谁都懂说容易 爱透了还要嘴硬"},{"time":97,"lineLyric":"我宁愿 留在你方圆几里"},{"time":101,"lineLyric":"我的心 要不回就送你"},{"time":106,"lineLyric":"因为我爱你 和你没关系"},{"time":132,"lineLyric":"感觉会压抑的样子"},{"time":140,"lineLyric":"勉强也没什么意思"},{"time":148,"lineLyric":"我不算很自私 也越来越懂事"},{"time":155,"lineLyric":"爱你只是我的事"},{"time":162,"lineLyric":"与其在你不要的世界里"},{"time":166,"lineLyric":"不如痛快把你忘记"},{"time":170,"lineLyric":"这道理谁都懂说容易 爱透了还要嘴硬"},{"time":178,"lineLyric":"我宁愿 留在你方圆几里"},{"time":182,"lineLyric":"至少能感受你的悲喜"},{"time":187,"lineLyric":"在你需要我的时候 就能陪你"},{"time":194,"lineLyric":"我在你 不要的世界里"},{"time":198,"lineLyric":"何苦不找个人来代替"},{"time":203,"lineLyric":"可惜我 谁劝都不听"},{"time":211,"lineLyric":"我宁愿 留在你方圆几里"},{"time":215,"lineLyric":"我的心 要不回就送你"},{"time":221,"lineLyric":"爱不爱都可以 我怎样都依你"},{"time":228,"lineLyric":"因为我爱你 和你没关系"},{"time":235,"lineLyric":"我的爱 扩散在方圆几里"},{"time":239,"lineLyric":"近的能 听见你的呼吸"},{"time":244,"lineLyric":"只要你转身 我就在这里"}],
		"love":1,
		"time":"1:56",
		"bg":"#282a28"
	},
	{
		"id":1,
		"song":"绅士",
		"album":"绅士",
		"singer":"薛之谦",
		"source":"我的收藏",
		"url":"./img/all_music/shenshi.mp3",
		"cover":"./img/music_pic/薛之谦_绅士.png",
		"lyric":[{"time":3,"lineLyric":""},{"time":18,"lineLyric":"好久没见了什么角色呢"},{"time":23,"lineLyric":"细心装扮着"},{"time":25,"lineLyric":"白色衬衫的袖扣是你送的"},{"time":31,"lineLyric":"尽量表现着像不在意的"},{"time":35,"lineLyric":"频繁暴露了自欺欺人者"},{"time":41,"lineLyric":"越掩饰越深刻"},{"time":44,"lineLyric":"你说我说听说"},{"time":47,"lineLyric":"忍着言不由衷的段落"},{"time":50,"lineLyric":""},{"time":51,"lineLyric":"我反正决定自己难过"},{"time":58,"lineLyric":""},{"time":61,"lineLyric":"我想摸你的头发"},{"time":63,"lineLyric":"只是简单的试探啊"},{"time":66,"lineLyric":""},{"time":69,"lineLyric":"我想给你个拥抱"},{"time":71,"lineLyric":"像以前一样可以吗"},{"time":76,"lineLyric":"你退半步的动作认真的吗"},{"time":81,"lineLyric":"小小的动作伤害还那么大"},{"time":85,"lineLyric":"我只能扮演个绅士"},{"time":88,"lineLyric":"才能和你说说话"},{"time":92,"lineLyric":""},{"time":94,"lineLyric":"我能送你回家吗"},{"time":97,"lineLyric":"可能外面要下雨啦"},{"time":100,"lineLyric":""},{"time":103,"lineLyric":"我能给你个拥抱"},{"time":105,"lineLyric":"像朋友一样可以吗"},{"time":108,"lineLyric":""},{"time":110,"lineLyric":"我忍不住从背后抱了一下"},{"time":115,"lineLyric":"尺度掌握在不能说想你啊"},{"time":118,"lineLyric":"你就当刚认识的绅士"},{"time":122,"lineLyric":"闹了个笑话吧"},{"time":127,"lineLyric":""},{"time":141,"lineLyric":"尽量表现着善解人意的"},{"time":145,"lineLyric":"频繁暴露了不欲人知的"},{"time":150,"lineLyric":"越掩饰越深刻"},{"time":153,"lineLyric":"想说听说别说"},{"time":157,"lineLyric":"忍着言不由衷的段落"},{"time":161,"lineLyric":"我反正注定留在角落"},{"time":168,"lineLyric":""},{"time":170,"lineLyric":"我想摸你的头发"},{"time":172,"lineLyric":"只是简单的试探啊"},{"time":177,"lineLyric":""},{"time":178,"lineLyric":"我想给你个拥抱"},{"time":181,"lineLyric":"像以前一样可以吗"},{"time":185,"lineLyric":""},{"time":186,"lineLyric":"你退半步的动作认真的吗"},{"time":190,"lineLyric":"小小的动作伤害还那么大"},{"time":194,"lineLyric":"我只能扮演个绅士"},{"time":198,"lineLyric":"才能和你说说话"},{"time":202,"lineLyric":""},{"time":204,"lineLyric":"我能送你回家吗"},{"time":206,"lineLyric":"可能外面要下雨啦"},{"time":211,"lineLyric":"我能给你个拥抱"},{"time":215,"lineLyric":"像朋友一样可以吗"},{"time":218,"lineLyric":""},{"time":220,"lineLyric":"我忍不住从背后抱了一下"},{"time":224,"lineLyric":"尺度掌握在不能说想你啊"},{"time":228,"lineLyric":"你就当刚认识的绅士"},{"time":232,"lineLyric":"闹了个笑话吧"},{"time":236,"lineLyric":""},{"time":237,"lineLyric":"你能给我只左手"},{"time":240,"lineLyric":"牵你到马路那头吗"},{"time":243,"lineLyric":""},{"time":245,"lineLyric":"我会像以前一样"},{"time":248,"lineLyric":"看着来往的车子啊"},{"time":253,"lineLyric":"我们的距离在眉间皱了下"},{"time":258,"lineLyric":"迅速还原成路人的样子啊"},{"time":262,"lineLyric":"越有礼貌我越害怕"},{"time":265,"lineLyric":"绅士要放得下"},{"time":279,"lineLyric":""}],
		"love":1,
		"time":"2:44",
		"bg":"#68345A"
	},
	{
		"id":2,
		"song":"演员","album":"绅士",
		"singer":"薛之谦","source":"我喜欢的音乐",
		"url":"./img/all_music/yanyuan.mp3",
		"cover":"./img/music_pic/薛之谦_演员.png",
		"lyric":[{"time":4,"lineLyric":""},{"time":21,"lineLyric":"简单点说话的方式简单点"},{"time":28,"lineLyric":""},{"time":30,"lineLyric":"递进的情绪请省略"},{"time":33,"lineLyric":"你又不是个演员"},{"time":36,"lineLyric":"别设计那些情节"},{"time":39,"lineLyric":""},{"time":41,"lineLyric":"没意见我只想看看你怎么圆"},{"time":50,"lineLyric":""},{"time":51,"lineLyric":"你难过的太表面 像没天赋的演员"},{"time":57,"lineLyric":"观众一眼能看见"},{"time":60,"lineLyric":""},{"time":62,"lineLyric":"该配合你演出的我演视而不见"},{"time":67,"lineLyric":"在逼一个最爱你的人即兴表演"},{"time":72,"lineLyric":"什么时候我们开始收起了底线"},{"time":78,"lineLyric":"顺应时代的改变看那些拙劣的表演"},{"time":83,"lineLyric":"可你曾经那么爱我干嘛演出细节"},{"time":88,"lineLyric":"我该变成什么样子才能延缓厌倦"},{"time":93,"lineLyric":"原来当爱放下防备后的这些那些"},{"time":99,"lineLyric":"才是考验"},{"time":101,"lineLyric":""},{"time":104,"lineLyric":"没意见你想怎样我都随便"},{"time":112,"lineLyric":""},{"time":114,"lineLyric":"你演技也有限"},{"time":117,"lineLyric":"又不用说感言"},{"time":120,"lineLyric":"分开就平淡些"},{"time":122,"lineLyric":""},{"time":125,"lineLyric":"该配合你演出的我演视而不见"},{"time":130,"lineLyric":"别逼一个最爱你的人即兴表演"},{"time":135,"lineLyric":"什么时候我们开始没有了底线"},{"time":141,"lineLyric":"顺着别人的谎言被动就不显得可怜"},{"time":146,"lineLyric":"可你曾经那么爱我干嘛演出细节"},{"time":151,"lineLyric":"我该变成什么样子才能配合出演"},{"time":156,"lineLyric":"原来当爱放下防备后的这些那些"},{"time":161,"lineLyric":"都有个期限"},{"time":164,"lineLyric":""},{"time":167,"lineLyric":"其实台下的观众就我一个"},{"time":173,"lineLyric":"其实我也看出你有点不舍"},{"time":178,"lineLyric":"场景也习惯我们来回拉扯"},{"time":182,"lineLyric":"还计较着什么"},{"time":187,"lineLyric":""},{"time":188,"lineLyric":"其实说分不开的也不见得"},{"time":194,"lineLyric":"其实感情最怕的就是拖着"},{"time":199,"lineLyric":"越演到重场戏越哭不出了"},{"time":204,"lineLyric":"是否还值得"},{"time":208,"lineLyric":""},{"time":209,"lineLyric":"该配合你演出的我尽力在表演"},{"time":214,"lineLyric":"像情感节目里的嘉宾任人挑选"},{"time":219,"lineLyric":"如果还能看出我有爱你的那面"},{"time":224,"lineLyric":"请剪掉那些情节让我看上去体面"},{"time":230,"lineLyric":"可你曾经那么爱我干嘛演出细节"},{"time":235,"lineLyric":"不在意的样子是我最后的表演"},{"time":241,"lineLyric":"是因为爱你我才选择表演 这种成全"}],
		"love":1,
		"time":"4:12",
		"bg":"#64AAFF"
	}
	,{
		"id":3,
		"song":"李荣浩",
		"album":"小黄",
		"singer":"李荣浩",
		"source":"我喜欢",
		"url":"./img/all_music/laojie.mp3",
		"cover":"./img/music_pic/李荣浩_老街.png",
		"lyric":[{"time":16,"lineLyric":"一张褪色的照片"},{"time":20,"lineLyric":"好像带给我一点点怀念"},{"time":23,"lineLyric":"巷尾老爷爷卖的热汤面"},{"time":27,"lineLyric":"味道弥漫过旧旧的后院"},{"time":31,"lineLyric":"流浪猫睡熟在摇晃秋千"},{"time":35,"lineLyric":"夕阳照了一遍他眯着眼"},{"time":40,"lineLyric":"那张同桌寄的明信片"},{"time":44,"lineLyric":"安静的躺在课桌的里面"},{"time":49,"lineLyric":"快要过完的春天"},{"time":51,"lineLyric":"还有雕刻着图案的门帘"},{"time":55,"lineLyric":"窄窄的长长的过道两边"},{"time":59,"lineLyric":"老房子依然升起了炊烟"},{"time":63,"lineLyric":"刚刚下完了小雨的季节"},{"time":67,"lineLyric":"爸妈又一起走过的老街"},{"time":72,"lineLyric":"记不得哪年的哪一天"},{"time":75,"lineLyric":"很漫长又很短暂的岁月"},{"time":80,"lineLyric":"现在已经回不去"},{"time":84,"lineLyric":"早已流逝的光阴"},{"time":88,"lineLyric":"手里的那一张渐渐模糊不清的车票"},{"time":93,"lineLyric":"成了回忆的信号"},{"time":97,"lineLyric":"忘不掉的是什么我也不知道"},{"time":102,"lineLyric":"想不起当年模样"},{"time":106,"lineLyric":"看也看不到 去也去不了的地方"},{"time":114,"lineLyric":"也许那老街的腔调是属于我的忧伤"},{"time":122,"lineLyric":"嘴角那点微笑越来越勉强"},{"time":128,"lineLyric":""},{"time":129,"lineLyric":"忘不掉的是什么我也不知道"},{"time":134,"lineLyric":"放不下熟悉片段"},{"time":138,"lineLyric":"回头望一眼 已经很多年的时间"},{"time":145,"lineLyric":"透过手指间看着天"},{"time":150,"lineLyric":"我又回到那老街"},{"time":154,"lineLyric":"靠在你们身边渐行渐远"},{"time":162,"lineLyric":""},{"time":190,"lineLyric":"快要过完的春天"},{"time":193,"lineLyric":"还有雕刻着图案的门帘"},{"time":197,"lineLyric":"窄窄的长长的过道两边"},{"time":201,"lineLyric":"老房子依然升起了炊烟"},{"time":205,"lineLyric":"刚刚下完了小雨的季节"},{"time":209,"lineLyric":"爸妈又一起走过的老街"},{"time":214,"lineLyric":"记不得哪年的哪一天"},{"time":217,"lineLyric":"很漫长又很短暂的岁月"},{"time":222,"lineLyric":"现在已经回不去"},{"time":226,"lineLyric":"早已流逝的光阴"},{"time":230,"lineLyric":"手里的那一张渐渐模糊不清的车票"},{"time":235,"lineLyric":"成了回忆的信号"},{"time":239,"lineLyric":"忘不掉的是什么我也不知道"},{"time":244,"lineLyric":"想不起当年模样"},{"time":248,"lineLyric":"看也看不到 去也去不了的地方"},{"time":255,"lineLyric":"也许那老街的腔调是属于我的忧伤"},{"time":264,"lineLyric":"嘴角那点微笑越来越勉强"},{"time":271,"lineLyric":"忘不掉的是什么我也不知道"},{"time":276,"lineLyric":"放不下熟悉片段"},{"time":280,"lineLyric":"回头望一眼 已经很多年的时间"},{"time":287,"lineLyric":"透过手指间看着天"},{"time":292,"lineLyric":"我又回到那老街"},{"time":296,"lineLyric":"靠在你们身边渐行渐远"}],
		"love":1,
		"time":"05:18",
		"bg":"#68345A"
	}]
	
	/*
	 
	 * 1.歌名
	 * 2.歌手
	 * 3.专辑
	 * 4.歌词
	 * 5.封面
	 * */
	//歌名
	var music_name = $("#music_name");
	//专辑zhuanji
	var zhuanji = $("#zhuanji")
	//歌手
	var singner = $("#singner");
	//来源
	var source = $("#source");
	//歌词
	var wrap_geci = document.getElementById("wrap_geci")
	//封面
	var ch_cover = $("#ch_cover");
	var song_counts=$("#song_conunts");
	//当前时间
	var persent_time = $(".footer>.progress>#persent_time")[0];
	//总时间
	var all_time = $(".footer>.progress>#all_time")[0];
	//audio
	var my_audio = document.querySelector("#my_audio");
	//音量按钮
	var volumn_btn = $("#volunm_btn");
	//音量
	var sound = document.getElementById("sound")
	//音量滚轮
	var sound_pro = document.getElementById("sound_pro")
	//音量滚轮按钮
	var sound_wrap = document.getElementById("sound_wrap")
	//音量滚轮红色区域
	var sound_wrap_red =document.getElementById("sound_wrap_red");
	//显示歌曲数量
	var change_moudle = $("#change_moud");
	//改变模式
	var change_moudle_btn = $("#change_moud>span")
	//改变模式按钮
	
	
	function show_song_counts(){
		song_counts.html(data_list.length)
	}
	
	
	
	//渲染歌名
	function show_music_name(e){
		music_name.html(data_list[e].song);
	}
	
	
	//渲染专辑
	function show_zhuanji(e){
		zhuanji.html(data_list[e].album);
	}
	
	
	//渲染歌手
	function show_singer(e){
		singner.html(data_list[e].singer)
	}
	
	
	//渲染源
	function show_source(e){
		source.html(data_list[e].source);
	}
	
	//渲染封面
	
	function show_cover(e){
		ch_cover.html("<img src='"+data_list[e].cover+"'/>")
	}
	
	
	//渲染背景
	function show_bg(e){
		$("body").css("background",data_list[e].bg)
		$("body").addClass("bg_blur")
	}
	
	//渲染歌词
	function show_geci(e){
		wrap_geci.innerHTML = ""
		for(var i=0;i<data_list[e].lyric.length;i++){
			var ci_line = "<span class='geci' data-geci="+i+">"+data_list[e].lyric[i].lineLyric+"</span><br>"
			wrap_geci.innerHTML += ci_line
		}	
	}
	/**
	 * 1.监听时间线，播放到当前时间，top-43px
	 * 			当前播放时间 = data_list.line_lyric[i].time
	 * 			定义一个for循环
	 * 
	 * 				for(var i=0;i<data_list[e].lyric[i].time == current_time){
	 	* 				wrap_geci.style.top = 43*i+"px"
	 	* 			获取data-geci属性
	 	* 				(wrap_geci>span).getAttribute("data-geci") = i
	 	* 				wrap_geci>span.addClass("gaoliang")
	 * 	
	 * }
	 * 2.给当前歌词加上高亮
	 * 
	 * 
	 * 
	 * */
	function listen_geci(e){
		for(var i=0;i<data_list[e].lyric.length-1;i++){
			if(parseInt(my_audio.currentTime) == data_list[e].lyric[i].time)
			{
				wrap_geci.style.top = -(i*41-100) + "px"
				wrap_geci.style.transition = "all 1s ease-in"
				document.querySelector("#wrap_geci>span:nth-of-type("+(i+1)+")").style.color = "#FFFFFF"
				document.querySelector("#wrap_geci>span:nth-of-type("+(i)+")").style.color = "#000000"
			}
		}		
	}
	
	
	
	//渲染总时间
	function show_all_time(e){
		all_time.innerHTML = data_list[e].time
	}
	
	function show(e){
		show_music_name(e)
		show_zhuanji(e)
		show_singer(e)
		show_source(e)
		show_cover(e);
		show_bg(e);
		show_geci(e);
		insert_music(e);
		show_all_time(e);
        show_geci_list()
//      show_current_time()
	}
	
	
	
	
	//渲染歌词列表
	var detail = $("#detail")
	function show_geci_list(){
		detail.empty()
		for(var i=0;i<data_list.length;i++){
			var ge_list = "<div class='show_detail'><span></span><span onclick='play_list("+i+")'>"+data_list[i].song+"</span><span>"+data_list[i].singer+"</span><span class='fa fa-link'></span><span>"+data_list[i].time+"</span><div>"
			detail.append(ge_list)
		}
	}
	
	function play_list(e){
		console.log(e)
	}
	
	/*
	 * 清空：
	 * 1.清空列表
	 * 
	 * */
	var clear_music = $("#clear_music");
	var detail = $("#detail");
	clear_music.click(function(){
		detail.toggle()
	})
	/*
	 
	 * 播放列表#pl_list
	 * 历史记录history_record
	 * 1.点击历史记录播放列表的背景变成白色，字体变成白色
	 * 2.点击播放列表历史记录背景变成白色，字体变成黑色
	 * */
	var pl_list = $("#pl_list");
	var history_record = $("#history_record");
	pl_list.click(function(){pl_list.css({
		"color":"#FFFFFF","background-color":"#7d7d85"})
		history_record.css({"color":"#000000","background":"#FFFFFF"});
		detail.css("opacity","1")
		song_counts.html(data_list.length)
	})
	
	history_record.click(function(){
		history_record.css({"color":"#FFFFFF","background":"#7d7d85"});
		pl_list.css({"color":"#000000","background-color":"#FFFFFF"});
		detail.css("opacity","0")
		song_counts.html("0")
	})
	
	
	/*
	 * 
	 * 
	 * 音频#my_audio
	 * 1.渲染音乐
	 * 
	 */
	
	
	function insert_music(e){
		my_audio.src = "";
		my_audio.src = data_list[e].url
		my_audio.setAttribute("data-id",data_list[e].id)
	}
	
	
	/*
	 
	 * 1.点击暂停、播放歌曲change_pause
	 * 2.图标改变
	 * 
	 * */
	var change_pause = $("#change_pause");
	var change_btn = $("#change_pause_btn");
	var wrap = document.querySelector("#wrap");//进度条的拖拽圆点
	var wrap_red = document.querySelector("#wrap_red");//进度条的红色区域
	var pro = document.querySelector(".pro")
	var timer = 0;//时间戳
	
	function btn_trans(e){
		if(e==0){
			//切换到暂停
			change_btn.removeClass('fa-play');
			change_btn.addClass('fa-pause');
		}
		else if(e==1){
			//切换到播放
			change_btn.removeClass('fa-pause');
			change_btn.addClass('fa-play');
		}
	}
	
	
	change_pause.click(function(){
		if(my_audio.paused){
			my_audio.play()
			btn_trans(0)
			timer = setInterval(move,100)
			console.log(timer)
		}
		else{
			my_audio.pause()
			btn_trans(1)
			clearInterval(timer)
		}	
	})
	var flag=1;
	function move(){
		wrap.style.left = wrap_red.style.width = (my_audio.currentTime/my_audio.duration)*(pro.clientWidth-wrap.offsetWidth)+"px"
		show_current_time()
		listen_geci(current_num)
		flag++
		rotate_cd(flag)
	}
	
	
	
	/*
	 
	 * 点击进度条，完成和歌曲同步
	 * 
	 * */
	var progress = document.querySelector(".progress");
	pro.onclick = function(ev){
		ev = ev||event
		if(my_audio.paused){
			my_audio.play()
			wrap.style.left = wrap_red.style.width = (ev.clientX-progress.offsetLeft-pro.offsetLeft-(wrap.offsetWidth/2))+"px"
			my_audio.currentTime = my_audio.duration*((ev.clientX-progress.offsetLeft-pro.offsetLeft-(wrap.offsetWidth/2))/pro.offsetWidth);
			btn_trans(0)
			timer = setInterval(move,100)
		}
		else{
			wrap.style.left = wrap_red.style.width = (ev.clientX-progress.offsetLeft-pro.offsetLeft-(wrap.offsetWidth/2))+"px"
			my_audio.currentTime = my_audio.duration*((ev.clientX-progress.offsetLeft-pro.offsetLeft-(wrap.offsetWidth/2))/pro.offsetWidth);
		}
	}
	
	/*
	 
	 * 上一曲，下一曲#back_music,next_music
	 * 1.点击上一首切换为上一首√
	 * 2.点击下一首切换为下一首√
	 * 3.更改封面√
	 * 3.更改歌词√
	 * 4.更改歌手√
	 * 5.更改专辑√
	 * 6.更改来源√
	 * 7.更改歌词√
	 * */
	var back_music = $("#back_music");
	var next_music = $("#next_music");
	

	var current_num = 0;
	show(current_num);
	back_music.click(function(){
		clearInterval(timer)
		current_num = my_audio.getAttribute("data-id");
		if(current_num == 0){
			current_num = data_list.length-1;
			show(current_num);
		}else{
			current_num--;
			show(current_num)	
		}
		btn_trans(1);
	})
	next_music.click(function(){
		clearInterval(timer)
		current_num = my_audio.getAttribute("data-id");
		console.log(current_num)
		if(current_num==data_list.length-1){
			current_num =0;
			show(current_num);
		}
		else{
			current_num++;
			show(current_num)
		}
		btn_trans(1);
	})
	
	/*
	 
	 * 声音开始，歌曲总长
	 * persent_time
	 * all_time
	 * 
	 * 
	 * */
	function show_current_time(){
		persent_time.innerHTML = ""
		if(parseInt(my_audio.currentTime)<60){
			if(parseInt(my_audio.currentTime)<10){
				persent_time.innerHTML+="00 :"+"0"+parseInt(my_audio.currentTime)
			}else
			persent_time.innerHTML+="00 :"+parseInt(my_audio.currentTime)
		}
		else{
			if(parseInt(my_audio.currentTime%60)<10){
				persent_time.innerHTML+="0"+parseInt((my_audio.currentTime)/60)+":"+"0"+parseInt(my_audio.currentTime)%60
			}else
			persent_time.innerHTML+="0"+parseInt((my_audio.currentTime)/60)+":"+parseInt(my_audio.currentTime)%60
		}
	}
	/*
	 
	 * 设置音频静音
	 * 
	 * */
	sound.onclick = function(){
		if(my_audio.volume!=parseInt(0)){
			my_audio.volume = 0
			volumn_btn.removeClass("fa-volume-up")
			volumn_btn.addClass("fa-volume-off")
			sound_wrap.style.left = sound_wrap_red.style.width = 0
		}
		else if(my_audio.volume == parseInt(0)){
			my_audio.volume = 1
			volumn_btn.removeClass("fa-volume-off")
			volumn_btn.addClass("fa-volume-up")
			sound_wrap.style.left = sound_wrap_red.style.width = sound_pro.offsetWidth-sound_wrap.offsetWidth +"px"
			console.log(sound_wrap.style.left)
		}
	}
	sound_pro.onclick = function(ev){
		ev = ev||event
		sound_wrap.style.left = sound_wrap_red.style.width = (ev.clientX-progress.offsetLeft-sound_pro.offsetLeft-(sound_wrap.offsetWidth/2))+"px"
		my_audio.volume = (ev.clientX-progress.offsetLeft-sound_pro.offsetLeft-(sound_wrap.offsetWidth/2))/sound_pro.offsetWidth;
	}
	
	/*
	 
	 * 点击播放歌曲
	 * 
	 * */
	

	function rotate_cd(e){
		var now_pic = document.querySelector(".now_pic>img")
		now_pic.style.transform = "rotate("+e+"deg)"
	}
	
	
	function play_list(e){
		console.log(e)
	}
	
	/*
	 *
	 * change_moud
	 * 点击按钮变换图标（三种模式  单曲循环  顺序播放  随机播放）
	 * 
	 * */
	
//	change_moudle.onclick = function(){
//		if(change_moudle_btn)){
//			
//		}
//		if(change_moudle_btn.hasAttribute("class","fa-refresh")){
//			this.removeAttribute("class","fa-refresh");
//			this.setAttribute("class","fa fa-bars")
//			console.log("a")
//		}
//	}
	var click_num = 2
	change_moudle_btn.on('click',function(){
		click_num++
		if(click_num%3 == 0){
			change_moudle_btn.removeClass("fa-random")
			change_moudle_btn.addClass("fa-refresh")
			//循环播放
			show(parseInt(Math.random()*data_list.length))
			clearInterval(timer)
			btn_trans(1)
		}
		if(click_num%3 == 1){
			change_moudle_btn.removeClass("fa-refresh")
			change_moudle_btn.addClass("fa-bars")
			my_audio.loop = true
		}
		if(click_num%3 == 2){
			change_moudle_btn.removeClass("fa-bars")
			change_moudle_btn.addClass("fa-random")
			my_audio.loop = false
			my_audio.ended = function(){
				show(current_num+1)
			}
		}
		console.log(click_num%3)
	})
//	change_moudle_btn.unbind().on("click",function(){
//		if(change_moudle_btn.hasClass("fa-refresh")){
//			change_moudle_btn.removeClass("fa-refresh")
//			change_moudle_btn.addClass("fa-random")
//		}
//	})
	function listen_all_music(e){
		
	}
}	
function play_list(e){
	console.log(e)
}
