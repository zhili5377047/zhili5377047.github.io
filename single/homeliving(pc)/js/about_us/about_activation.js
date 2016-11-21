window.onload = function(e){
// document.addEventListener('DOMContentLoaded', function(e) {
    //元素获取公共函数
    //获取元素
    var dd = document;
    var section = dd.querySelector('.section');
    var asides = section.querySelector('.aside');
    var allmain = section.querySelectorAll('.main');
    var oDiv = asides.querySelector('div');
    var changebg = oDiv.children;
    var oUl = asides.querySelector('ul');
    var changecolor = oUl.querySelectorAll('li a');
    //获取侧边栏定位需要的高度
    var H = window.innerHeight || dd.body.clientHeight;
    var h = asides.clientHeight;
    var here = h/2+30;
    // console.log(H,h,here);
    //不滚动时候的初始定位
    asides.style.top = here + 'px';

    //页面滚动事件触发
    // window.onscroll = function() {
    //     var sTop;
    //     if (dd.documentElement && dd.documentElement.scrollTop) {
    //         sTop = dd.documentElement.scrollTop;
    //     } else if (dd.body) {
    //         sTop = dd.body.scrollTop;
    //     };
    //     console.log(sTop);
    //     if(sTop >= 210){
    //         sTop = 210;
    //     }
    //     asides.style.top = sTop + 'px';
    // };
    //侧边栏点击事件
    // asides.addEventListener('click', function(e) {
    asides.onclick = function(e){
        var e = e || window.event;
        var target = e.target || srcElement;
        var changebgs = changebg;
        var changecolors = changecolor;
        var mainalls = allmain;
        for (var i = 0, len = changebgs.length; i < len; i++) {
            (function(index) {
                if (target === changebgs[index] || target === changecolors[index]) {
                    changebgs[index].classList.add('change_bg');
                    changecolors[index].classList.add('change_color');
                    mainalls[index].style.cssText='display:block';
                } else {
                    if (target === oDiv || target.tagName === 'LI') {
                        return false;
                    }
                    changebgs[index].classList.remove('change_bg');
                    changecolors[index].classList.remove('change_color');
                    mainalls[index].style.cssText='display:none';
                }
            }(i));
        }
    };

    //页面点击元素获取
     var bottomBar= section.querySelector('.about_activation .bottom_bar');
     var liA = bottomBar.querySelectorAll('li a');
     var before = bottomBar.querySelector('.before');
     var after = bottomBar.querySelector('.after');
     var index = 1;

    // //元素点击事件
     // bottomBar.addEventListener('click',callback,false);
     bottomBar.onclick = function(e){
        callback(e);
     }
     //点击回调函数;
     function callback(e){
           var e = e || window.event;
           var target = e.target||e.srcElement;
           var liAs = liA;
          if(target.className ===''&&target.tagName==='A'){
             for(var i =1,len=liAs.length-1;i<len;i++ ){
                 liAs[i].className = '';
             }
             target.className = 'bottom_bar_color';
             index = parseInt(target.textContent);


           }else if(target.className ==='bottom_bar_color'){
             return false;
           }
           //前一个页面点击before
           if(target===before){
             liAs[index].className='';
             index--;
             if(index<1){
               index = 1;
             }
             liAs[index].className='bottom_bar_color';
           }
           //下一个页面after
           if(target===after){
             liAs[index].className='';
             index++;
             if(index>6){
               index=6
             }
             liAs[index].className='bottom_bar_color';
           }
     }
};
