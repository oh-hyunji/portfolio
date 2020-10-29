var port = port || (function () {
    var typingBool = false; 
    var typingIdx = 0; 
    var liIndex = 0;
    
    var textArr = ['MY:)', 'PORTFOLIO']
    var arrLenth = 2;
    var typingTxt = textArr[liIndex]; 

    typingTxt = typingTxt.split("");

    if(typingBool == false){ 
        typingBool = true; 
        var tyInt = setInterval(typing,150); 
    } 

    // typing effect
	function typing(){
        $(".title_box h1").removeClass("on");
        $(".title_box h1").eq(liIndex).addClass("on");
    
        if(typingIdx < typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
            $(".title_box h1").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
            typingIdx++; 
        } else {
            if(liIndex < arrLenth-1){
                liIndex++; //다음문장으로  가기위해 인덱스를 1증가
                
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false; 
                typingTxt = textArr[liIndex]; 
                
                clearInterval(tyInt); //다음문장 타이핑전 1초 쉰다

                setTimeout(function(){tyInt = setInterval(typing, 150);}, 1000); //1초후에 다시 타이핑 반복 시작
            } else if(liIndex == arrLenth - 1) {
                clearInterval(tyInt); //마지막 문장까지 써지면 반복종료
                headerAni();
            }
        }
    }

    // header animate
    function headerAni(){
        $('.img_box').animate({width:'50%'}, 1000);
        $('.line_box').css('border','1px solid #fff')
        $('.title_box h3').animate({opacity:1}, 1000, function(){
            $('.title_box .line').animate({width:'100%'},500, function(){
                $('.title_box p').animate({opacity:1}, 1000, function(){
                    $('.mouse_icon').animate({opacity:1}, 500);   
                });
            });
        });
    }

    // section1 animate
    function seFirstAni() {
        $('.ab_style').animate({opacity:1}, 2000, function(){
            $('.ab_style').addClass('ab_style_ani');
            $('.ab_content').animate({opacity:1}, 500);   
            $('#section1 h2').animate({opacity:1}, 500);
        });
    }

    var cnt = 25;
    // section2 counter
    function counterFn(){
        var counterUp = setInterval(counterUp, 50);
        function counterUp() {
            cnt++;
            if(cnt > 90){
                clearInterval(counterUp);
            } else {
                var cntPer = cnt + '%';
                if(cnt <= 90) $(".sk_content .sk_box:nth-child(1) .sk_right strong").text(cntPer);
                if(cnt <= 82) $(".sk_content .sk_box:nth-child(2) .sk_right strong").text(cntPer);
                if(cnt <= 84) $(".sk_content .sk_box:nth-child(3) .sk_right strong").text(cntPer);
                if(cnt <= 86) $(".sk_content .sk_box:nth-child(4) .sk_right strong").text(cntPer);
                if(cnt <= 78) $(".sk_content .sk_box:nth-child(5) .sk_right strong").text(cntPer);
                if(cnt <= 74) $(".sk_content .sk_box:nth-child(6) .sk_right strong").text(cntPer);
            }
        }
    }

    // section2 graphUp
    function graphUp(){
        $('.per_html').animate({width:'90%'}, 2000);   
        $('.per_css').animate({width:'82%'}, 2000);   
        $('.per_js').animate({width:'84%'}, 2000);   
        $('.per_php').animate({width:'86%'}, 2000);   
        $('.per_psd').animate({width:'78%'}, 2000);   
        $('.per_ai').animate({width:'74%'}, 2000);   
    }

    // section3 animate
    function seThdAni(){
        setTimeout(function(){
            $('.pr_left').animate({opacity:1}, 1000, function(){
                $('.pr_style').addClass('pr_style_ani');
                $('.pr_right img').animate({'margin-left':0}, 1200, function(){
                    $('.page_box').animate({opacity:1}, 800, function(){
                        $('.pr_page_bt').animate({opacity:1}, 800);
                    });   
                });   
            });   
        },500);
    }

    // section4 animate
    function seFouAni(){
        setTimeout(function(){
            $('#section4 h2').animate({opacity:1}, 1000, function(){
                $('#section4 .sa_text').animate({opacity:1}, 1000, function(){
                    $('.sa_content').animate({opacity:1}, 800);   
                });   
            });   
        },500);
    }

    var fivAniShow = false;
    // section5 animate
    function seFivAni(){
        if(fivAniShow == true) return;
        setTimeout(function(){
            $('.re_box:nth-child(1) .re_text').animate({opacity:1}, 1000);
            $('.center_line').animate({width:'25%'}, 1000, function(){
                $('.re_box:nth-child(2) .re_text').animate({opacity:1}, 1000);
                $('.center_line').animate({width:'75%'}, 1000, function(){
                    $('.re_box:nth-child(4) .re_text').animate({opacity:1}, 1000);
                    $('.center_line').animate({width:'100%'}, 1000, function(){
                        $('.re_box:nth-child(5) .re_text').animate({opacity:1}, 1000, function(){
                            $('.document').animate({opacity:1}, 1000, function(){
                                $('.re_box:nth-child(3) .re_text').animate({opacity:1}, 1000);
                                $('.re_ceText strong').animate({opacity:1}, 1000, function(){
                                    fivAniShow = true;
                                    $('.re_ceText p').animate({opacity:1}, 1000);
                                    $('.re_style').animate({right:'4%'}, 1200);
                                    $('.document').addClass('document_ani');
                                });
                            });
                        });
                    });
                });
            });
        },1000);
    }

    // footer animate
    function footAni(){
        setTimeout(function(){
            $('.fo_circle').animate({opacity:1}, 1000, function(){
                $('.fo_circle').addClass('circle_ani');
                $('.fo_content p:nth-child(1)').animate({opacity:1}, 1000, function(){
                    $('.fo_content strong').animate({opacity:1}, 1000, function(){
                        $('.fo_content .han').animate({opacity:1}, 1000);
                    });
                });
            });
        },500);
    }

	return {
        seFirstAni : seFirstAni,
        counterFn : counterFn,
        graphUp : graphUp,
        seThdAni : seThdAni,
        seFouAni : seFouAni,
        seFivAni : seFivAni,
        footAni : footAni
	}
})();

$(function() {
    // menu click event
    $('.side_menu li').on('click', function(){
        var $this = $(this);
        var index = $this.index();

        $('.side_menu li').removeClass('on');
        $('.icon').removeClass('fill');
        
        var tagId;
        switch(index){
            case 0:
                tagId = '#header';
                $('.icon').addClass('fill');
                break;
            case 1:
                tagId = '#section1';
                port.seFirstAni();
                break;
            case 2:
                tagId = '#section2';
                port.counterFn();
                port.graphUp();
                break;
            case 3:
                tagId = '#section3';
                port.seThdAni();
                break;
            case 4:
                tagId = '#section4';
                port.seFouAni();
                break;
            case 5:
                tagId = '#section5';
                port.seFivAni();
                break;
            case 6:
                tagId = '#footer';
                port.footAni();
                break;
        }

        if(index > 0) $('.side_menu li').eq(index).addClass('on');

        var offset = $(tagId).offset();
        $('html, body').animate({scrollTop : offset.top}, 400);
    });

    // animate & cursor
    $('.he_mail, .navi_box, .fo_top, .document, .pr_pre, .pr_next, .link_box, .fo_gmail, .open_bt, .close_bt').mouseenter(function() {
        $('#cursor .blob').css({'width':'45px','height':'45px'});
       
        var className = $(this).attr('class').split(' ');
        switch(className[0]){
            case 'pr_pre':
            case 'pr_next':
                $('#cursor .blob').css({'width':'200px','height':'200px'});
                break;
            case 'link_box':
                $('#cursor .blob').css({'width':'120px','height':'120px'});
                break;
            case 'fo_gmail':
                $('#cursor .blob').css({'border':'2px solid #ffd487'});
                $('#cursor .blob').css({'width':'80px','height':'80px'});
                break;
        }
       
        $('#cursor .blob').css({'background-color':'transparent'});
    }).mouseleave(function(){
        $('#cursor .blob').css({'width':'30px','height':'30px'});
        $('#cursor .blob').css({'background-color':'#ffb924', 'border':'2px solid #ffb734'});
    });

    var page = 1;
    $('.pr_pre, .pr_next').on('click', function(){
        var $this = $(this).attr('class');

        var pr_cnt = ($this == 'pr_next') ? page : page-1;
        var ne_cnt = ($this == 'pr_next') ? page+1 : page;

        var page_pr = '.page_box .page:nth-child(' + pr_cnt + ')';
        var page_ne = '.page_box .page:nth-child(' + ne_cnt + ')';

        var select_pr = '.page' + pr_cnt;
        var select_ne = '.page' + ne_cnt;

        var page1 = ($this == 'pr_next') ? page_pr : page_ne;
        var page2 = ($this == 'pr_next') ? page_ne : page_pr;

        var select1 = ($this == 'pr_next') ? select_pr : select_ne;
        var select2 = ($this == 'pr_next') ? select_ne : select_pr;

        if($this == 'pr_pre' && page <= 1) {
            alert('이전 프로젝트가 없습니다.');
            return;
        }
        if($this == 'pr_next' && page >= 4) {
            alert('다음 프로젝트가 없습니다.');
            return;
        }
       
        $(page1).removeClass('pa_on');
        $(page2).addClass('pa_on');

        $(select1).css('display','none');
        $(select1).animate({opacity:0}, 1000);

        $(select2).css('display','flex');
        $(select2).animate({opacity:1}, 1000);

        if($this == 'pr_next') page++;
        else page--;
    });

    var link;
    $('.link_box').on('click', function(){
        var dataNum = $(this).data('view');

        var src, title, text;
        switch(dataNum){
            case '01':
                src = 'cube';
                link = 'eYZrpqw'
                title = 'CUBE<br>ANIMATION';
                text = '빠른 시일 안에 답변 드리겠습니다. 지금까지<br>오현지의 포트폴리오를 방문해 주셔서 감사합니다.';
                break;
            case '02':
                src = 'wave';
                link = 'XWdqmjy'
                title = 'WAVE<br>ANIMATION';
                text = '빠른 시일 안에 답변 드리겠습니다. 지금까지<br>오현지의 포트폴리오를 방문해 주셔서 감사합니다.';
                break;
            case '03':
                src = 'line';
                link = 'zYqRgqB'
                title = 'LINE<br>ANIMATION';
                text = '빠른 시일 안에 답변 드리겠습니다. 지금까지<br>오현지의 포트폴리오를 방문해 주셔서 감사합니다.';
                break;
            case '04':
                src = 'loding';
                link = 'yLJbJzW'
                title = 'LODING<br>ANIMATION';
                text = '빠른 시일 안에 답변 드리겠습니다. 지금까지<br>오현지의 포트폴리오를 방문해 주셔서 감사합니다.';
                break;
        }

        $('.la_title').html(title);
        $('.la_text').html(text);

        var iframeSrc = './animation/'+ src +'.html';
        $('.iframe').attr('src',iframeSrc);

        $('.layer_pop').css('display','flex');
        $('.iframe').show();
    });

    $('.open_bt').on('click', function(e){
        e.stopPropagation();
       
        var url = 'https://codepen.io/oh-hyunji/pen/' + link;
        window.open(url);
    });

    $('.layer_pop, .close_bt').on('click', function(){
        $('.layer_pop').hide();
        $('.iframe').hide();
    });
});



window.onload = function () {
    $("html, body").animate({ scrollTop: 0 }, "slow"); 

    var elm = ".wheelBox";
    $(elm).each(function (index) {
        // 개별적으로 Wheel 이벤트 적용
        $(this).on("mousewheel DOMMouseScroll", function (e) {
            e.preventDefault();
           
            var delta = 0;
            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            } 
            else if (event.detail) delta = -event.detail / 3;
           
            var moveTop = $(window).scrollTop();
            var elmSelecter = $(elm).eq(index);
            var selectId;
           
            if (delta < 0) { // 마우스휠을 위에서 아래로
                if ($(elmSelecter).next() != undefined) {
                    try{
                        moveTop = $(elmSelecter).next().offset().top;
                        selectId = $(elmSelecter).next().attr('id');
                    }catch(e){}
                }
            } else { // 마우스휠을 아래에서 위로
                if ($(elmSelecter).prev() != undefined) {
                    try{
                        moveTop = $(elmSelecter).prev().offset().top;
                        selectId = $(elmSelecter).prev().attr('id');
                    }catch(e){}
                }
            }

            if(selectId) {
                $('.side_menu li').removeClass('on');
                $('.icon').removeClass('fill');
            }
            switch(selectId){
                case 'header':
                    $('.icon').addClass('fill');
                    break;
                case 'section1':
                    $('.side_menu li').eq(1).addClass('on');
                    port.seFirstAni();
                    break;
                case 'section2':
                    $('.side_menu li').eq(2).addClass('on');
                    port.counterFn();
                    port.graphUp();
                    break;
                case 'section3':
                    $('.side_menu li').eq(3).addClass('on');
                    port.seThdAni();
                    break;
                case 'section4':
                    $('.side_menu li').eq(4).addClass('on');
                    port.seFouAni();
                    break;
                case 'section5':
                    $('.side_menu li').eq(5).addClass('on');
                    port.seFivAni();
                    break;
                case 'footer':
                    $('.side_menu li').eq(6).addClass('on');
                    port.footAni();
                    break;
            }
             
            // 화면 이동 0.8초(800)
            $("html,body").stop().animate({scrollTop: moveTop + 'px'}, {duration: 800, complete: function(){}});
        });
    });


    /*--------------------
        Get Mouse
    --------------------*/
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, dir: '' };
    const getMouse = e => {
        //  e.touches[0].pageX ||, e.touches[0].pageY ||  
        mouse = {
            x: e.clientX || e.pageX || 0,
            y: e.clientY || e.pageX || 0,
            dir: getMouse.x > e.clientX ? 'left' : 'right' 
        };

    };
    ['mousemove', 'touchstart', 'touchmove'].forEach(e => {window.addEventListener(e, getMouse);});

    /*--------------------
        Mouse Follow
    --------------------*/
    class MouseFollow {
        constructor(options) {
            Object.assign(this, options);

            this.pos = {
                x: 0,
                y: 0 
            };
        }

        follow() {
            this.distX = mouse.x - this.pos.x;
            this.distY = mouse.y - this.pos.y;

            this.velX = Math.abs(this.distX / 8);
            this.velY = Math.abs(this.distY / 8);

            this.pos.x += this.distX / (10 + this.ind * gooey);
            this.pos.y += this.distY / (10 + this.ind * gooey);

            this.scaleX = 1; //map(this.velX, 0, 100, 1, 2);
            this.scaleY = 1; // map(this.velY, 0, 100, 1, 2);

            this.el.style.transform = 'translate(' + this.pos.x + 'px, ' + this.pos.y + 'px) scale(' + Math.max(this.scaleX, this.scaleY) + ')';
        }
    }

    /*--------------------
        Map
    --------------------*/
    function map(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    /*--------------------
        Init
    --------------------*/
    const gooey = 0.5;
    const blobs = Array.from(document.querySelectorAll('#cursor .blob'));
    const blobFollows = blobs.map((e, i) => new MouseFollow({ el: e, ind: i }));

    /*--------------------
        Render
    --------------------*/
    const render = () => {
        requestAnimationFrame(render);
        blobFollows.forEach(e => e.follow());
    };
    render();
}

