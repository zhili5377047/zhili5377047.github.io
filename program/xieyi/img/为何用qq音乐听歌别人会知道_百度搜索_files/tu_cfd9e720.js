(function(){var f=navigator.platform.toUpperCase();var b=location.protocol==="http:"?"http://image.baidu.com/n/image":"https://sp1.baidu.com/70cHazva2gU2pMbgoY3K/n/image";var g=f.indexOf("MAC")!==-1;var k=$("#kw");var d=$("#form").parent();var h="https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/soutu/css/soutu_bff2306f.css";var m=1024*1024*10;var c=1024*100;var j={1:"抱歉，您上传的文件不是图片格式",2:"图片上传失败"};var i={getEnv:function(){if(bds&&bds.comm){if(bds.comm.ishome&&bds.comm.newindex){return"newindex"}else{if(bds.comm.ishome){return"index"}else{if(/^\/imgsearch/.test(location.pathname)){return"imgresult"}}}}return"result"},supportVoice:function(){window.URL=window.URL||window.webkitURL;navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;window.AudioContext=window.AudioContext||window.webkitAudioContext;if(!navigator.getUserMedia||!window.URL){return false}if(!window.AudioContext){return false}if(!window.Worker){return false}if(!swfobject.hasFlashPlayerVersion("11.1.0")){return false
}return true},parseQuery:function(){var s=window.location.search.substr(1);var p={};var r=s.substring(s.indexOf("?")+1,s.length).split("&");for(var n=0;n<r.length;n++){var q="r[n];var" o="q.split("=");if(o[0]){p[o[0]]=decodeURIComponent(o[1])}}return" p},getquery:function(n){var="" regexp("(^|&)"+n+"="([^&]*)(&|$)","i");var" p="window.location.search.substr(1).match(o);if(p!=null){return(p[2])}return" null},isurl:function(n){return(="" ^(((http[s]?:\="" \="" )|(ftp:\="" ))?([\w-]+\.)+(com|edu|gov|int|mil|net|org|biz|info|pro|name|museum|coop|aero|xxx|idv|al|dz|af|ar|ae|aw|om|az|eg|et|ie|ee|ad|ao|ai|ag|at|au|mo|bb|pg|bs|pk|py|ps|bh|pa|br|by|bm|bg|mp|bj|be|is|pr|ba|pl|bo|bz|bw|bt|bf|bi|bv|kp|gq|dk|de|tl|tp|tg|dm|do|ru|ec|er|fr|fo|pf|gf|tf|va|ph|fj|fi|cv|fk|gm|cg|cd|co|cr|gg|gd|gl|ge|cu|gp|gu|gy|kz|ht|kr|nl|an|hm|hn|ki|dj|kg|gn|gw|ca|gh|ga|kh|cz|zw|cm|qa|ky|km|ci|kw|cc|hr|ke|ck|lv|ls|la|lb|lt|lr|ly|li|re|lu|rw|ro|mg|im|mv|mt|mw|my|ml|mk|mh|mq|yt|mu|mr|us|um|as|vi|mn|ms|bd|pe|fm|mm|md|ma|mc|mz|mx|nr|np|ni|ne|ng|nu|no|nf|na|za|zq|aq|gs|eu|pw|pn|pt|jp|se|ch|sv|ws|yu|sl|sn|cy|sc|sa|cx|st|sh|kn|lc|sm|pm|vc|lk|sk|si|sj|sz|sd|sr|sb|so|tj|tw|th|tz|to|tc|tt|tn|tv|tr|tm|tk|wf|vu|gt|ve|bn|ug|ua|uy|uz|es|eh|gr|hk|sg|nc|nz|hu|sy|jm|am|ac|ye|iq|ir|il|it|in|id|uk|vg|io|jo|vn|zm|je|td|gi|cl|cf|cn)(:\d+)?(\="" [^\s]*)?)$="" ).test(n)="" },blobtobase64:function(o,p){var="" n="new" filereader();n.onload="function(){p(this.result)};n.onerror=function(q){p()};n.readAsDataURL(o)},compressImg:function(q){var" s="new" $.deferred();function="" o(u,v){var="" t="new" filereader();t.onload="function(){var" w="this.result.split("base64,")[1];v(w,this.result)};t.onerror=function(w){v()};t.readAsDataURL(u)}function" r(d,u,v){u="u||"";v=v||512;var" z="atob(D);var" b="[];var" y="z.length;for(var" c="z.slice(w,w+v);var" a="new" array(c.length);for(var="" x="0;x<C.length;x++){A[x]=C.charCodeAt(x)}var" uint8array(a);b.push(t)}return="" new="" blob(b,{type:u})}function="" n(v){var="">800||t>800){var x=Math.max(y/800,t/800);y/=x;t/=x}var w=document.createElement("canvas");w.width=y;w.height=t;var u=w.getContext("2d");u.fillRect(0,0,w.width,w.height);u.drawImage(v,0,0,y,t);var z=w.toDataURL("image/jpeg",1);return r(z.replace(/^.*?,/,""),"image/jpeg")}var p=q.size;o(q,function(t,v){var u=new Image();u.onload=function(){if(p<c&&u.width<800&&u.height<800){s.resolve(q); return}q="n(u);s.resolve(q)};u.src=v});return" s.promise()},sendlog:function(p){var="" o="location.href.match(/sign=(\w{32})\b/);var" n="o&&o[1]||"";p.sign=n;p.fm="inlo";if(p.rsv_imageclick){p.rsv_imageclick=i.getEnv()+"_"+p.rsv_imageclick}if(window.soutu_mixsearch){p.rsv_imagemix=1}window.ns_c(p)}};var" l="{graphIconHtml:function(){return'<span" class="soutu-btn">'},wrapHtml:function(){return'<div class="soutu-layer"><div class="soutu-url"><span class="soutu-url-wrap"><input id="soutu-url-kw" class="soutu-url-kw" maxlength="255" autocomplete="off" placeholder="在此处粘贴图片网址"></span><span class="soutu-url-btn"><i class="soutu-icon soutu-url-btn-icon"></i></span><span class="soutu-url-error">请输入正确的图片网址</span></div><div class="soutu-state-normal"><div class="soutu-drop"><span class="soutu-drop-tip">拖拽图片到这里</span><i class="soutu-icon soutu-drop-icon"></i></div><div class="upload-wrap"><input type="file" class="upload-pic" value="上传图片"><i class="soutu-icon upload-icon"></i><span class="upload-text">本地上传图片</span></div></div><a class="soutu-icon soutu-close" href="javascript:void(0);" target="_blank" rel="external"></a></div>'
},waitingHtml:function(){return'<div class="soutu-state-waiting soutu-waiting"><div class="ball"><div class="b"></div><div class="b"></div><div class="b"></div></div><span>正在加载图片</span></div>'},errorHtml:function(n){return'<div class="soutu-state-error soutu-error"><i class="soutu-icon soutu-error-icon"></i><p class="soutu-error-main">'+n+'，请<a href="#" class="soutu-error-upload">重新上传</a></p><p class="soutu-error-tip">仅支持10M以下JPG,JPEG,PNG,BMP,GIF格式图片</p></div>'},newTabTipHtml:function(n){return['<div class="soutu-state-newtabtip soutu-newtab">','<div class="soutu-newtab-cont">','<div class="soutu-newtab-img" style="background-image:url('+n.imgUrl+')">',"</div>",'<div class="soutu-newtab-text">',"<p>"+n.text+"</p>","<span></span>","</div>","</div>",'<a class="soutu-newtab-link" href="'+n.url+'" target="_blank">查看搜索结果</a>',"</div>"].join("")}};var e={init:function(){if(i.getEnv()!=="imgresult"){return}var o=$("#form");var t=o.find(".soutu-input-image");if(!t.length){return}var n=true;var r=i.parseQuery();
var q=o.find("input[type=hidden]");var s=q.clone();o.attr("action","/imgsearch");q.remove();delete r.wd;o.append('<input type="hidden" name="sign" value="'+r.sign+'">');var p=function(){t.remove();t.off("click.soutu");t.removeClass("soutu-input-image-active");k.off(".soutu");k.attr("placeholder","").removeClass("soutu-input");n=false;o.find("input[type=hidden]").remove();o.append(s);o.attr("action","/s")};t.on("click.soutu",function(){p();i.sendLog({rsv_imageclick:"del_thumb_by_click"})});k.on("keydown",function(v){var u=k.val();if(v.which===8&&!u.length){if(t.hasClass("soutu-input-image-active")){p();i.sendLog({rsv_imageclick:"del_thumb_by_return"})}else{t.addClass("soutu-input-image-active")}return}if(u.length<=1&&t.hasclass("soutu-input-image-active")){t.removeclass("soutu-input-image-active")}});k.on("focus.soutu",function(u){t.show()});k.on("click",function(u){if(n){i.sendlog({rsv_imageclick:"click_input_thumb"})}else{i.sendlog({rsv_imageclick:"click_input"})}});k.on("blur.soutu",function(u){t.removeclass("soutu-input-image-active") });$("#su").on("click.soutu",function(){var="" u="k.val();if(n&&!u.length){i.sendLog({rsv_imageclick:"search_only_thumb"});location.href="/imgsearch?"+$.param({sign:r.sign,wd:r.sign.substr(5,16)});return" false}});o.on("submit",function(){if(!n){i.sendlog({rsv_imageclick:"search_only_text"})}else{i.sendlog({rsv_imageclick:"search_image_and_text"})}})}};var="" a="{init:function(){var" o="this;o.canDrop="ondrop"" in="" document.body;var="" n="$('<link" rel="stylesheet" href="'+h+'" type="text/css" data-for="result">');if(i.getEnv()==="newindex"){n.insertBefore(d.parent())}else{n.appendTo("head")}o.$graphIcon=$(l.graphIconHtml()).prependTo(k.parent());d.addClass((g)?"soutu-env-mac":"soutu-env-nomac").addClass("soutu-env-"+i.getEnv());o.state="init";e.init();o.listenIcon()},listenIcon:function(){var n=this;n.$graphIcon.on("click",function(o){o.stopPropagation();o.preventDefault();n.show();n.log({rsv_imageclick:"camerabtn"})});$(document).on("dragstart.soutu",function(t){var o=t.originalEvent.dataTransfer;var s=t.target||t.srcElement;
var u=s.nodeName.toLowerCase();var q;if(u==="img"){q=s.src;try{o.setData("text/plain",q)}catch(r){o.setData("Text",q)}}else{if(u==="a"){var p=$(s).children("img");if(p.length){q=p[0].src;try{o.setData("text/plain",q)}catch(r){o.setData("Text",q)}}}}});k.on("drop.soutu",function(o){if(o.originalEvent.dataTransfer&&o.originalEvent.dataTransfer.files&&o.originalEvent.dataTransfer.files.length){o.stopPropagation();o.preventDefault();n.$graphIcon.trigger("click");n.handleDrop(o);n.log({rsv_imageclick:"iptdrop"})}}).on("dragover.soutu",function(q){var p=window.bds&&bds.se&&bds.se.upn&&bds.se.upn.cookieset||[];var o=p[0]&&p[0].v===1;return !o});$(window).one("index_off",function(){d.removeClass("soutu-env-newindex");d.removeClass("soutu-no-skin")})},show:function(){var o=this;if(!o.$layer){o.addLayer()}var n=o.$layer;o.setState("normal");n.show();o.$graphIcon.hide();if(window.pageState===1&&!d.hasClass("soutu-env-result")){d.addClass("soutu-env-result")}if(i.getEnv()==="newindex"){d.addClass("soutu-env-newindex");
if(!window.s_session||!!s_session.userSkinName===false){n.addClass("soutu-no-skin")}else{n.removeClass("soutu-no-skin")}}},close:function(){var n=this;n.$layer.hide();n.$graphIcon.show();n.setState("normal");n.$urlErrorTip.hide();n.$urlInput.val("")},addLayer:function(){var o=this;var n=o.$layer=$(l.wrapHtml()).prependTo($("#form"));o.$urlInput=n.find("#soutu-url-kw").on("focus",function(){n.find(".soutu-url-layer").addClass("focus")}).on("blur",function(){n.find(".soutu-url-layer").removeClass("focus")});if(i.getEnv()==="newindex"&&$(".s-lite").not(".hide-icon").length){n.find(".soutu-url-btn").css("width","103px")}o.$dropArea=n.find(".soutu-drop");o.$urlErrorTip=n.find(".soutu-url-error");o.$urlSearchBtn=n.find(".soutu-url-btn");o.panelHidden=false;o.listenLayer()},handleDrop:function(s){var r=this;r.$dropArea.removeClass("drag-over");var n;if(s.originalEvent.dataTransfer){n=s.originalEvent.dataTransfer.files}if(!n||n.length===0){var o;try{o=s.originalEvent.dataTransfer.getData("text/plain")||s.originalEvent.dataTransfer.getData("text/uri-list")
}catch(q){o=s.originalEvent.dataTransfer.getData("Text")||s.originalEvent.dataTransfer.getData("URL")}if(o){r.handleURL(o)}else{r.setState("error")}}else{var p=n[0];r.uptype="drag";r.upload(p)}},listenLayer:function(){var o=this;var n=o.$layer;o.$urlInput.on("focus",function(){n.find(".soutu-url-panel").addClass("focus")}).on("blur",function(){n.find(".soutu-url-panel").removeClass("focus")}).on("keydown",function(q){var p=q.keyCode;if(o.$urlErrorTip.css("display")!=="none"){o.$urlErrorTip.hide()}if(p===13){o.handleURL(this.value);q.stopPropagation();q.preventDefault();return false}});o.$urlSearchBtn.on("click",function(){var p=o.$urlInput.val();o.handleURL(p)});o.$layer.find(".upload-pic").on("change",function(){var p=this.files[0];if(p){o.uptype="upload";o.upload(p)}});o.$layer.find(".upload-pic").on("click",function(){o.log({rsv_imageclick:"uploadbtn"})});o.$dropArea.on("dragover",function(p){o.$dropArea.addClass("drag-over");p.stopPropagation();p.preventDefault()}).on("dragleave",function(p){o.$dropArea.removeClass("drag-over");
p.stopPropagation();p.preventDefault()}).on("drop",function(p){p.stopPropagation();p.preventDefault();o.handleDrop(p)});o.$layer.find(".soutu-close").on("click",function(){o.close(true);o.log({rsv_imageclick:"close"})});o.$layer.on("click",".soutu-error-upload",function(p){p.stopPropagation();p.preventDefault();o.setState("normal")});$(document).on("click",function(r){var q=r.target;var p=true;do{if(q===o.$layer[0]||q===o.$graphIcon[0]){p=false;break}}while(q=q.parentNode);if(p){o.close()}})},setNormal:function(){this.$layer.find(".soutu-state-normal").show();var n=this.$layer.find(".upload-pic");n.val("")},setWaiting:function(){var p=this;p.$layer.append(l.waitingHtml());var o=[[0,40],[20,20],[40,0]];var n=["rgb(55,137,250)","rgb(99,99,99)","rgb(235,67,70)"];p.$layer.find(".b").each(function(r,t){var s=0;$(t).css({"background-color":n[r]});(function q(){$(t).animate({left:o[r][s%2]},{duration:800,easing:"swing",progress:function(v,u){if(u>=0.5){$(t).css({"background-color":n[(s+r)%3]})
}},complete:function(){q()}});s++})()})},setError:function(n){var o=n.msg||j[2];this.$layer.append(l.errorHtml(o))},setNewTabTip:function(n){var o=this.$layer.find(".soutu-state-newtabtip");if(o.length){o.remove()}o=$(l.newTabTipHtml(n));this.$layer.append(o);i.sendLog({rsv_imageclick:"tipForNewTab"})},setState:function(p,o){var n=this;n.state=p;n.$layer.find(".soutu-state-normal").hide();n.$layer.find(".soutu-state-error").remove();n.$layer.find(".soutu-state-waiting").remove();n.$layer.find(".soutu-state-newtabtip").remove();n.$urlErrorTip.hide();p=p.charAt(0).toUpperCase()+p.substring(1);n["set"+p].apply(n,[o||{}])},handleURL:function(o,n){if(i.isURL(o)){this.$urlInput.val(o);this.setState("normal");this.$urlErrorTip.hide();this.uploadUrl(o);this.log({rsv_imageclick:"searchurl-success"})}else{this.setState("normal");this.$urlErrorTip.show();this.log({rsv_imageclick:"searchurl-error"})}},openResutlPage:function(n){var p=this;var q=$("#form").attr("target");if(q==="_blank"){var r="图片上传完毕，根据您的搜索习惯，<br>将打开新窗口展示搜索结果";
var o=window.player;if(o&&o.config&&o.config.play.on){r="您正在听音乐，为了不打扰您继续听音乐，<br>将打开新窗口查看搜索结果"}if(!$.isString(p.uploadObj)){i.blobtoBase64(p.uploadObj,function(s){p.setState("newTabTip",{text:r,imgUrl:s,url:n})})}else{p.setState("newTabTip",{text:r,imgUrl:p.uploadObj,url:n})}}else{location.href=n;p.close()}},validate:function(o){var q=["jpg","jpeg","png","bmp","gif"];var n=o.name.split(".");var p=n.pop().toLowerCase();if(!o.type||!p||$.inArray(p,q)===-1){return 1}if(o.size>m){return 2}return 0},doAjax:function(p,n){var o=this;if(this.state!=="waiting"){this.setState("waiting")}n=n||"";$.ajax({url:b+"?"+n,type:"POST",data:p,processData:false,contentType:false,success:function(q){o.uploadComplete(q)},error:function(){o.setState("error")},always:function(){}})},uploadUrl:function(n){var o=this;o.uploadObj=n;var p=["queryImageUrl="+encodeURIComponent(n),"uptype=urlsearch"].join("&");this.log({rsv_imageclick:"uploadurl"});setTimeout(function(){o.openResutlPage("http://image.baidu.com/n/pc_search?"+p)
},10)},upload:function(o){var q=this;q.uploadObj=o;q.$urlInput.val("");var p=q.validate(o);if(p){q.setState("error",{msg:j[p]});return}q.setState("waiting");var r=new FormData();r.append("image",o);var n=["fr=ps"+i.getEnv(),"target=pcSearchImage","needJson=true","id=WU_FILE_0","name="+o.name,"type="+o.type||"","lastModifiedDate="+o.lastModifiedDate||"","size="+o.size||0].join("&");q.doAjax(r,n);q.log({rsv_imageclick:"uploadfile"})},uploadComplete:function(n){var o=this;if(!n.errno&&n.data){setTimeout(function(){var p=n.data.pageUrl;p+="&uptype="+o.uptype||"upload";o.openResutlPage(p)},30)}else{o.setState("error")}},log:i.sendLog};a.init();if(typeof define==="function"){define("soutuIndex",[],function(){return a})}})();</=1&&t.hasclass("soutu-input-image-active")){t.removeclass("soutu-input-image-active")}});k.on("focus.soutu",function(u){t.show()});k.on("click",function(u){if(n){i.sendlog({rsv_imageclick:"click_input_thumb"})}else{i.sendlog({rsv_imageclick:"click_input"})}});k.on("blur.soutu",function(u){t.removeclass("soutu-input-image-active")></c&&u.width<800&&u.height<800){s.resolve(q);></r.length;n++){var>