// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-02-15
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fade(b,a){var c=jQuery;a.each(function(d){if(d==b.startSlide){c(this).show()}else{c(this).hide()}});this.go=function(d,e){c(a.get(d)).fadeIn(b.duration);c(a.get(e)).fadeOut(b.duration);return d}}; if(!jQuery.fn.wowSlider){jQuery.fn.wowSlider=function(b){var j=this;var g=jQuery;b=g.extend({effect:function(f,d){var t=jQuery;d.each(function(L){if(L==f.startSlide){t(this).show()}else{t(this).hide()}});this.go=function(L,M){t(d.get(L)).fadeIn(f.duration);t(d.get(M)).fadeOut(f.duration);return L}},prev:"",next:"",duration:1000,delay:20*100,captionDuration:1000,outWidth:960,outHeight:360,width:960,height:360,caption:true,controls:true,autoPlay:true,bullets:true,onBeforeStep:function(d){return d+1},stopOnHover:0,preventCopy:1},b);var y=b.images&&(new wowsliderPreloader(this,b));b.loop=b.loop||Number.MAX_VALUE;var p=j.find(".ws_images li");var A=p.length;function k(d){return((d||0)+A)%A}b.stopOn=k(b.stopOn);b.startSlide=k(b.startSlide);g(p.get(b.startSlide)).css("z-index",1);p.css("position","absolute");j.find(".ws_images ul").css({animation:"none","-moz-animation":"none","-webkit-animation":"none"});var I;if(b.preventCopy){I=g('<div><a href="#" style="display:none;position:absolute;left:0;top:0;width:100%;height:100%"></a></div>').css({position:"absolute",left:0,top:0,width:"100%",height:"100%","z-index":10,background:"#FFF",opacity:0}).appendTo(j).find("A").get(0)}var m=[];p.each(function(d){var t=g(">img:first,>a:first,>div:first",this).get(0);var L=g("<div></div>");for(var f=0;f<this.childNodes.length;){if(this.childNodes[f]!=t){L.append(this.childNodes[f])}else{f++}}g(this).data("descr",L.html().replace(/^\s+|\s+$/g,"")).css({"font-size":0});m[m.length]=g(">a>img",this).get(0)||g(">*",this).get(0)});m=g(m);if(typeof b.effect=="string"){b.effect=window["ws_"+b.effect]}var r=new b.effect(b,m,g(".ws_images",j));p.find("IMG").css("visibility","visible");var a=b.startSlide;function w(t,f,d){t=k(t);if(a==t){return}if(y){y.load(t,function(){x(t,f,d)})}else{x(t,f,d)}}function x(t,f,d){var t=r.go(t,a,f,d);if(t<0){return}v(t);if(b.caption){l(p[t])}a=t;if(a==b.stopOn&&!--b.loop){b.autoPlay=0}E();if(b.onStep){b.onStep(t)}}var H,F,e=0;var z=j.get(0);if(z.addEventListener){z.addEventListener("touchmove",function(t){if(e){var f=(H-t.touches[0].pageX)/20;var d=(F-t.touches[0].pageY)/20;if((Math.abs(f)>1)||(Math.abs(d)>1)){H=F=e=0;D(t,a+((f+d)>0?1:-1),f,d)}}},false);z.addEventListener("touchstart",function(d){if(d.touches.length==1){H=d.touches[0].pageX;F=d.touches[0].pageY;e=1}else{e=0}},false);z.addEventListener("touchend",function(d){e=0},false)}function i(t){var f="";for(var d=0;d<t.length;d++){f+=String.fromCharCode(t.charCodeAt(d)^(1+(t.length-d)%32))}return f}function v(f){if(b.bullets){q(f)}if(I){var d=g("A",p.get(f)).get(0);if(d){I.setAttribute("href",d.href);I.setAttribute("target",d.target);I.style.display="block"}else{I.style.display="none"}}}var u;function E(d){B();if(b.autoPlay){u=setTimeout(function(){w(b.onBeforeStep(a,A))},b.delay+(d?0:b.duration))}}function B(){if(u){clearTimeout(u)}u=null}function D(L,t,f,d){B();L.preventDefault();w(t,f,d);E()}var s=c=g(".ws_images",j);var o="$#\"";if(!o){return}o=i(o);if(!o){return}o=o.replace(/^\s+|\s+$/g,"");c=o?g("<div></div>"):0;if(c){c.css({position:"absolute",right:"2px",bottom:"2px",padding:"0 0 0 0","z-index":10});s.append(c)}if(c&&document.all){var G=g('<iframe src="javascript:false"></iframe>');G.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",filter:"alpha(opacity=0)"});G.attr({scrolling:"no",framespacing:0,border:0,frameBorder:"no"});c.append(G)}var J=c?g(document.createElement("A")):c;if(J){J.css({position:"relative",display:"block","background-color":"#E4EFEB",color:"#837F80","font-family":"Lucida Grande,sans-serif","font-size":"11px","font-weight":"normal","font-style":"normal","-moz-border-radius":"5px","border-radius":"5px",padding:"1px 5px",width:"auto",height:"auto",margin:"0 0 0 0",outline:"none"});J.attr({href:"http://"+o.toLowerCase()});J.html(o);J.bind("contextmenu",function(d){return false});c.append(J)}if(b.controls){var C=g('<a href="#" class="ws_next">'+b.next+"</a>");var h=g('<a href="#" class="ws_prev">'+b.prev+"</a>");j.append(C);j.append(h);C.bind("click",function(d){D(d,a+1)});h.bind("click",function(d){D(d,a-1)})}function K(){var t=j.find(".ws_bullets>div");var P=g("a",t);P.click(function(Q){D(Q,g(Q.target).index())});var N=P.find("IMG");if(N.length){var M=g('<div class="ws_bulframe"/>').appendTo(t);var f=g("<div/>").css({width:N.length+1+"00%"}).appendTo(g("<div/>").appendTo(M));N.appendTo(f);g("<span/>").appendTo(M);var L=-1;function O(S){if(S<0){S=0}if(y){y.loadTtip(S)}g(P.get(L)).removeClass("ws_overbull");g(P.get(S)).addClass("ws_overbull");M.show();var T={left:P.get(S).offsetLeft-M.width()/2,"margin-top":P.get(S).offsetTop-P.get(0).offsetTop+"px"};var R=N.get(S);var Q={left:-R.offsetLeft+(g(R).outerWidth(1)-g(R).outerWidth())/2};if(L<0){M.css(T);f.css(Q)}else{if(!document.all){T.opacity=1}M.stop().animate(T,"fast");f.stop().animate(Q,"fast")}L=S}P.hover(function(){O(g(this).index())});var d;t.hover(function(){if(d){clearTimeout(d);d=0}O(L)},function(){P.removeClass("ws_overbull");if(document.all){if(!d){d=setTimeout(function(){M.hide();d=0},400)}}else{M.stop().animate({opacity:0},{duration:"fast",complete:function(){M.hide()}})}});t.click(function(Q){D(Q,g(Q.target).index())})}}function q(d){g(".ws_bullets A",j).each(function(f){if(f==d){g(this).addClass("ws_selbull")}else{g(this).removeClass("ws_selbull")}})}if(b.caption){$caption=g("<div class='ws-title' style='display:none'></div>");j.append($caption);$caption.bind("mouseover",function(d){B()});$caption.bind("mouseout",function(d){E()})}function l(f){var L=g("img",f).attr("title");var t=g(f).data("descr");var d=g(".ws-title",j);d.stop(1,1).stop(1,1).fadeOut(b.captionDuration/3,function(){if(L||t){d.html((L?"<span>"+L+"</span>":"")+(t?"<div>"+t+"</div>":""));n(d,{direction:"top",easing:"easeInOutExpo",complete:function(){if(g.browser.msie){d.get(0).style.removeAttribute("filter")}},duration:b.captionDuration})}})}if(b.bullets){K()}v(a);if(b.caption){l(p[a])}if(b.stopOnHover){this.bind("mouseover",function(d){B()});this.bind("mouseout",function(d){E()})}E(1);function n(O,T){var Q={};var R=["position","top","bottom","left","right"];for(var P=0;P<R.length;P++){Q[R[P]]=O[0].style[R[P]]}O.show();var N={width:O.outerWidth(true)+(document.all?1:0),height:O.outerHeight(true),"float":O.css("float"),overflow:"hidden",left:O.position().left,top:O.position().top,opacity:0},f=g("<div></div>").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});O.wrap(f);f=O.parent();if(O.css("position")=="static"){f.css({position:"relative"});O.css({position:"relative"})}else{g.extend(N,{position:O.css("position"),zIndex:O.css("z-index")});O.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}f.css(N).show();var S=T.direction||"top";var t=(S=="up"||S=="down")?"top":"bottom";var L=(S=="up"||S=="top");var d=T.distance||(t=="top"?O.outerHeight({margin:true}):O.outerWidth({margin:true}));O.css(t,L?(isNaN(d)?"-"+d:-d):d);var M={};M[t]=(L?"+=":"-=")+d;f.animate({opacity:1},{duration:T.duration,easing:T.easing});O.animate(M,{queue:false,duration:T.duration,easing:T.easing,complete:function(){for(var U in Q){O[0].style[U]=Q[U]}O.parent().replaceWith(O);if(T.complete){T.complete()}}})}return this}}jQuery.extend(jQuery.easing,{easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a}});
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Last updated: 2011-02-15
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fade",prev:"",next:"",duration:12*100,delay:30*100,outWidth:960,outHeight:360,width:960,height:360,caption:true,controls:true,autoPlay:true,bullets:true});