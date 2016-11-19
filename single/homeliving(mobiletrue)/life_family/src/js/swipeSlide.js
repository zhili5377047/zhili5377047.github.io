/**
 * swipeSlide
 * http://ons.me/500.html
 * 西门
 * 3.4.2(150930)
 */
;(function(win,$){
    'use strict';

    // 判断IE
    var browser = {
        ie10 : win.navigator.msPointerEnabled,
        ie11 : win.navigator.pointerEnabled
    };
    // 触摸事件
    var events = ['touchstart','touchmove','touchend'];
    // 检测
    var support = {
        // 触摸
        touch : (win.Modernizr && Modernizr.touch === true) || (function () {
            return !!(('ontouchstart' in win) || win.DocumentTouch && document instanceof DocumentTouch);
        })()
    };

    // 判断浏览器
    if (browser.ie10) events = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
    if (browser.ie11) events = ['pointerdown', 'pointermove', 'pointerup'];

    // 触摸赋值
    var touchEvents = {
        touchStart : events[0],
        touchMove : events[1],
        touchEnd : events[2]
    };

    // 绑定swipeSlide
    $.fn.swipeSlide = function(options){
        var list = [];
        this.each(function(i, me){
            list.push(new sS(me, options));
        });
        return list;
    };
    var sS = function(element, options){
        var me = this;
        me.$el = $(element);
        me._distance = 50;
        me.allowSlideClick = true;
        me.init(options);
    };

    // 初始化
    sS.prototype.init = function(options){
        var me = this;
        me.opts = $.extend({}, {
            ul : me.$el.children('ul'),             // 父dom
            li : me.$el.children().children('li'),  // 子dom
            index : 0,                              // 轮播初始值
            continuousScroll : false,               // 连续滚动
            autoSwipe : true,                       // 自动切换
            speed : 4000,                           // 切换速度
            axisX : true,                           // X轴
            transitionType : 'ease',                // 过渡类型
            lazyLoad : false,                       // 图片懒加载
            firstCallback : function(){},           // 页面加载回调
            callback : function(){}                 // 每次滚动回调
        }, options);
        me._index = me.opts.index;
        // 轮播数量
        me._liLength = me.opts.li.length;
        me.isScrolling;

        // 回调
        me.opts.firstCallback(me._index,me._liLength,me.$el);

        // 如果轮播小于等于1个，跳出
        if(me._liLength <= 1){="" if(me.opts.lazyload)="" fnlazyload(me,="" 0);="" return="" false;="" }="" 连续滚动，复制dom="" if(me.opts.continuousscroll)="" me.opts.ul.prepend(me.opts.li.last().clone()).append(me.opts.li.first().clone());="" 懒加载图片="" if(me.opts.lazyload){="" me._index);="" if(me.opts.continuousscroll){="" me._index+1);="" me._index+2);="" 如果是第一屏="" if(me._index="=" 0){="" me._lilength);="" 如果是最后一屏="" }else="" if(me._index+1="=" me._lilength){="" 1);="" }else{="" 如果不连续滚动="" me._index-1);="" 轮播的宽度="" fngetslidedistance();="" if(browser.ie10="" ||="" browser.ie11){="" ie触控="" var="" action="" ;="" if(me.opts.axisx){="" me.$el.css({'-ms-touch-action':action,'touch-action':action});="" 解决ie滑动触发click="" me.$el.on('click',function(){="" me.allowslideclick;="" });="" 调用轮播="" fnautoslide(me);="" 绑定触摸="" me.$el.on(touchevents.touchstart,function(e){="" fntouches(e);="" fntouchstart(e,="" me);="" me.$el.on(touchevents.touchmove,function(e){="" fntouchmove(e,="" me.$el.on(touchevents.touchend,function(){="" fntouchend(me);="" me.opts.ul.on('webkittransitionend="" mstransitionend="" transitionend',function(){="" 横竖屏、窗口调整="" $(win).on('onorientationchange'="" in="" win="" ?="" 'orientationchange'="" :="" 'resize',function(){="" cleartimeout(me.timer);="" me.timer="setTimeout(fnGetSlideDistance,150);" 获取轮播宽度="" function="" fngetslidedistance(){="" $li="me.opts.ul.children();" me._slidedistance="me.opts.axisX" me.opts.ul.width()="" me.opts.ul.height();="" 定位="" fntransition(me,="" me.opts.ul,="" fntranslate(me,="" -me._slidedistance*me._index);="" $li,="" num="me.opts.continuousScroll" -1="" 0;="" $li.each(function(i){="" $(this),="" me._slidedistance*(i+num));="" };="" css过渡="" dom,="" num){="" dom.css({="" '-webkit-transition':'all="" '+num+'s="" '+me.opts.transitiontype,="" 'transition':'all="" '+me.opts.transitiontype="" css位移="" distance){="" result="me.opts.axisX" distance+'px,0,0'="" '0,'+distance+'px,0';="" '-webkit-transform':'translate3d('+result+')',="" 'transform':'translate3d('+result+')'="" index){="" $thisimg="$li.eq(index).find('[data-src]');" if($thisimg){="" $thisimg.each(function(i){="" $this="$(this);" if($this.is('img')){="" $this.attr('src',$this.data('src'));="" $this.removeattr('data-src');="" $this.css({'background-image':'url('+$this.data('src')+')'});="" touches="" fntouches(e){="" if(support.touch="" &&="" !e.touches){="" e.touches="e.originalEvent.touches;" touchstart="" me){="" me.isscrolling="undefined;" me._movedistance="me._moveDistanceIE" =="" 按下时的坐标="" me._startx="support.touch" e.touches[0].pagex="" (e.pagex="" e.clientx);="" me._starty="support.touch" e.touches[0].pagey="" (e.pagey="" e.clienty);="" touchmove="" 如果自动切换，move的时候清除autoslide自动轮播方法="" if(me.opts.autoswipe)="" fnstopslide(me);="" me.allowslideclick="false;" 触摸时的坐标="" me._curx="support.touch" me._cury="support.touch" 触摸时的距离="" me._movex="me._curX" -="" me._startx;="" me._movey="me._curY" me._starty;="" 优化触摸禁止事件="" if(typeof="" 'undefined'){="">= Math.abs(me._moveY));
            }else{
                me.isScrolling = !!(Math.abs(me._moveY) >= Math.abs(me._moveX));
            }
        }

        // 距离
        if(me.isScrolling){
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            // 触摸时跟手
            fnTransition(me, me.opts.ul, 0);
            me._moveDistance = me._moveDistanceIE = me.opts.axisX ? me._moveX : me._moveY;
        }
        if(!me.opts.continuousScroll){
            // 如果是第一屏，并且往下滚动，就不让滚动 || 如果是最后一屏，并且往上滚动，就不让滚动
            if(me._index == 0 && me._moveDistance > 0 || (me._index + 1) >= me._liLength && me._moveDistance < 0){
                me._moveDistance = 0;
            }
        }
        // 触摸时跟手滚动
        fnTranslate(me, me.opts.ul, -(me._slideDistance * me._index - me._moveDistance));
    }

    // touchend
    function fnTouchend(me){
        // 优化触摸禁止事件
        if(!me.isScrolling){
            fnAutoSlide(me);
        }

        // 解决IE滑动触发click
        if(browser.ie10 || browser.ie11){
            if(Math.abs(me._moveDistanceIE) < 5){
                me.allowSlideClick = true;
            }
            setTimeout(function(){
                me.allowSlideClick = true;
            },100);
        }

        // 距离小
        if(Math.abs(me._moveDistance) <= me._distance){="" fnslide(me,="" '',="" '.3');="" 距离大="" }else{="" 手指触摸上一屏滚动="" if(me._movedistance=""> me._distance){
                fnSlide(me, 'prev', '.3');
                // 手指触摸下一屏滚动
            }else if(Math.abs(me._moveDistance) > me._distance){
                fnSlide(me, 'next', '.3');
            }
        }
        me._moveDistance = me._moveDistanceIE = 0;
    }

    // 自动轮播
    function fnAutoSlide(me){
        if(me.opts.autoSwipe){
            fnStopSlide(me);
            me.autoSlide = setInterval(function(){
                fnSlide(me, 'next', '.3');
            },me.opts.speed);
        }
    }

    // 停止轮播
    function fnStopSlide(me){
        clearInterval(me.autoSlide);
    }

    // 指定轮播
    sS.prototype.goTo = function(i){
        var me = this;
        fnSlide(me, i, '.3');
    };

    // 轮播方法
    function fnSlide(me, go, num){
        // 判断方向
        if(typeof go === 'number'){
            me._index = go;
            // 加载当前屏、前一屏、后一屏
            if(me.opts.lazyLoad){
                // 因为连续滚动，复制dom，所以要多加1
                if(me.opts.continuousScroll){
                    fnLazyLoad(me, me._index);
                    fnLazyLoad(me, me._index+1);
                    fnLazyLoad(me, me._index+2);
                }else{
                    fnLazyLoad(me, me._index-1);
                    fnLazyLoad(me, me._index);
                    fnLazyLoad(me, me._index+1);
                }
            }
        }else if(go == 'next'){
            me._index++;
            if(me.opts.lazyLoad){
                if(me.opts.continuousScroll){
                    fnLazyLoad(me, me._index+2);
                    // 滑到最后一屏
                    if(me._index+1 == me._liLength){
                        fnLazyLoad(me, 1);
                        // 最后一屏，继续往后滑动
                    }else if(me._index == me._liLength){
                        fnLazyLoad(me, 0);
                    }
                }else{
                    fnLazyLoad(me, me._index+1);
                }
            }
        }else if(go == 'prev'){
            me._index--;
            if(me.opts.lazyLoad){
                if(me.opts.continuousScroll){
                    fnLazyLoad(me, me._index);
                    // 滑到第一屏
                    if(me._index == 0){
                        fnLazyLoad(me, me._liLength);

                        // 第一屏，继续往前滑动
                    }else if(me._index < 0){
                        fnLazyLoad(me, me._liLength-1);
                    }
                }else{
                    fnLazyLoad(me, me._index-1);
                }
            }
        }
        // 如果是连续滚动
        if(me.opts.continuousScroll){
            if(me._index >= me._liLength){
                fnScroll(me, num);
                me._index = 0;
                setTimeout(function(){
                    fnScroll(me, 0);
                    return;
                },300);
            }else if(me._index < 0){
                fnScroll(me, num);
                me._index = me._liLength-1;
                setTimeout(function(){
                    fnScroll(me, 0);
                    return;
                },300);
            }else{
                fnScroll(me, num);
            }
        }else{
            if(me._index >= me._liLength){
                me._index = 0;
            }else if(me._index < 0){
                me._index = me._liLength-1;
            }
            fnScroll(me, num);
        }
        // 如果第二个参数为空，就不回调
        if(arguments[1] !== ''){
            me.opts.callback(me._index,me._liLength,me.$el);
        }
    }

    // 轮播动作
    function fnScroll(me, num){
        fnTransition(me, me.opts.ul, num);
        fnTranslate(me, me.opts.ul, -me._index*me._slideDistance);
    }

})(window, window.Zepto || window.jQuery);</=></=>