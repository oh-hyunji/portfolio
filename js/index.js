var port = port || (function () {
    // typing effect
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
        $('.ab_style').animate({opacity:1}, 1500, function(){
            $('.ab_style').addClass('ab_style_ani');
            $('.ab_content').animate({opacity:1}, 500);   
            $('#section1 h2').animate({opacity:1}, 500);
        });
    }

    var cnt = 30;
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
                if(cnt <= 84) $(".sk_content .sk_box:nth-child(2) .sk_right strong").text(cntPer);
                if(cnt <= 86) $(".sk_content .sk_box:nth-child(3) .sk_right strong").text(cntPer);
                if(cnt <= 84) $(".sk_content .sk_box:nth-child(4) .sk_right strong").text(cntPer);
                if(cnt <= 78) $(".sk_content .sk_box:nth-child(5) .sk_right strong").text(cntPer);
                if(cnt <= 74) $(".sk_content .sk_box:nth-child(6) .sk_right strong").text(cntPer);
            }
        }
    }

    // section2 graphUp
    function graphUp(){
        $('.per_html').animate({width:'90%'}, 2000);   
        $('.per_css').animate({width:'84%'}, 2000);   
        $('.per_js').animate({width:'86%'}, 2000);   
        $('.per_php').animate({width:'84%'}, 2000);   
        $('.per_psd').animate({width:'78%'}, 2000);   
        $('.per_ai').animate({width:'74%'}, 2000);   
    }

    // section3 animate
    function seThdAni(){
        setTimeout(function(){
            $('.pr_left').animate({opacity:1}, 500, function(){
                $('.pr_style').addClass('pr_style_ani');
                $('.pr_right img').animate({'margin-left':0}, 1200, function(){
                    $('.pr_img_text').animate({opacity:1}, 800);
                    $('.page_box').animate({opacity:1}, 800, function(){
                        $('.pr_page_bt').animate({opacity:1}, 800);
                    });   
                });   
            });   
        },300);
    }

    // section4 animate
    function seFouAni(){
        setTimeout(function(){
            $('#section4 h2').animate({opacity:1}, 800, function(){
                $('#section4 .sa_text').animate({opacity:1}, 800, function(){
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
            $('.re_box:nth-child(1) .re_text').animate({opacity:1}, 800);
            $('.center_line').animate({width:'33%'}, 800, function(){
                $('.re_box:nth-child(2) .re_text').animate({opacity:1}, 800);
                $('.center_line').animate({width:'70%'}, 800, function(){
                    $('.re_box:nth-child(4) .re_text').animate({opacity:1}, 800);
                    $('.center_line').animate({width:'100%'}, 800, function(){
                        $('.re_box:nth-child(5) .re_text').animate({opacity:1}, 800, function(){
                            $('.document').animate({opacity:1}, 1000, function(){
                                $('.re_box:nth-child(3) .re_text').animate({opacity:1}, 800);
                                $('.re_ceText strong').animate({opacity:1}, 800, function(){
                                    fivAniShow = true;
                                    $('.re_ceText p').animate({opacity:1}, 800);
                                    $('.re_style').animate({right:'4%'}, 1200);
                                    $('.document').addClass('document_ani');
                                });
                            });
                        });
                    });
                });
            });
        }, 1000);
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

    // web project git
    function openLink(type, link){
        var domain = (type == 'code') ? 'https://github.com/oh-hyunji/portfolio-' : 'http://ohhyunji.dothome.co.kr/portfolio/';
        var url = domain + link;

        if(link == 'ashley' && type !== 'code') {
            var ashleyLink = (type == 'main') ? 'index.html' : 'menu.html';
            url = 'http://joeunart.dothome.co.kr/ashley/' + ashleyLink;
        }

        window.open(url);
    }

	return {
        seFirstAni : seFirstAni,
        counterFn : counterFn,
        graphUp : graphUp,
        seThdAni : seThdAni,
        seFouAni : seFouAni,
        seFivAni : seFivAni,
        footAni : footAni,
        openLink : openLink
	}
})();

$(function() {
    // menu click event
    $('.side_menu li').on('click', function(){
        var index = $(this).index();
        var hashPage = '#' + (index+1) + 'Page';
        window.location.hash = hashPage;
    });

    // animate & cursor
    $('.he_mail, .navi_box, .about_bt, .fo_top, .document, .pr_pre, .pr_next, .pr_page_bt, .link_box, .fo_gmail, .open_bt, .close_bt, .end_logo').mouseenter(function() {
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

    $('.about_bt').on('click', function(){
        var op1=0, op2=1, ab_text='자기소개', src='./img/prImg1.png', align_items='inherit';
        if($('.ab_list_box').css('opacity') == '1') op1=1, op2=0, ab_text='이력사항', src='./img/prImg.png', align_items='center';

        $('.ab_self').animate({opacity:op1}, 100);
        $('.ab_list_box').animate({opacity:op2}, 100);
        $('.about_text').text('간단한 ' + ab_text + ' 보기');
        $('.ab_img_box img').attr('src', src);
        $('.ab_content').css({'align-items':align_items});
    });

    // web project slide control
    var page = 1;
    var contNum = $('.pr_content').length;
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
        if($this == 'pr_next' && page >= contNum) {
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

    // script & animation section layer popup control
    var link, type;
    $('.link_box').on('click', function(){
        var dataNum = $(this).data('view');

        var src, title, text;
        type = 'animation';
        switch(dataNum){
            case '01':
                src = 'cube';
                link = 'eYZrpqw';
                title = 'CUBE<br>ANIMATION';
                text = '정육면체 모양의 큐브가 회전하며<br>늘어나는 애니메이션 입니다.';
                break;
            case '02':
                src = 'wave';
                link = 'XWdqmjy';
                title = 'WAVE<br>ANIMATION';
                text = '정렬된 여러 점들이 물결 모양으로<br>웨이브하는 애니메이션 입니다.';
                break;
            case '03':
                src = 'line';
                link = 'zYqRgqB';
                title = 'LINE<br>ANIMATION';
                text = '선들이 가운데를 중점으로 줄었다<br>늘었다 하며 회전하는 애니메이션 입니다.';
                break;
            case '04':
                src = 'loding';
                link = 'yLJbJzW';
                title = 'LODING<br>ANIMATION';
                text = '로딩하는 느낌을 주기 위해 원 바깥에<br>선과 작은 원을 회전시킨 애니메이션 입니다.';
                break;
            case '05':
                type = 'script';
                src = 'memo';
                link = 'script-memo';
                title = 'JQUERY<br>SIMPLE MEMO';
                text = '메모를 작성하면 하단에 메모 내용과 날짜,<br>삭제 버튼이 표시되고 삭제도 가능합니다.';
                break;
            case '06':
                type = 'script';
                src = 'vue';
                link = 'script-vue';
                title = 'VUE.JS<br>ENROLLMENT';
                text = '회원정보 등록 후 등록 정보를 보여주며<br>정보수정 버튼을 통해 재등록이 가능합니다.';
                break;
        }

        var linkName = (type == 'script') ? 'GITHUB' : 'CODEPEN'

        $('.la_title').html(title);
        $('.la_text').html(text);
        $('.open_bt').html(linkName);

        var iframeSrc = './'+ type +'/'+ src +'.html';
        $('.iframe').attr('src',iframeSrc);

        $('.layer_pop').css('display','flex');
        $('.iframe').show();
    });

    $('.open_bt').on('click', function(e){
        e.stopPropagation();
    
        var host = (type == 'script') ? 'https://github.com/oh-hyunji/' : 'https://codepen.io/oh-hyunji/pen/';
        var url = host + link;
        window.open(url);
    });

    $('.layer_pop, .close_bt').on('click', function(){
        $('.layer_pop').hide();
        $('.iframe').hide();
    });

    $('.browser_close').click(function(){
        $('.browser_layer').css('display','none');
    });

    // browser check
    var agent = navigator.userAgent.toLowerCase();
    if((navigator.appName == 'Netscape' && navigator.userAgent.search('Trident') != -1) || (agent.indexOf("msie") != -1)){
        $('html, body').css('cursor','default');
        $('a, button').css('cursor','pointer');
        $('#cursor').css('display','none');
        //$('.browser_layer').css('display','flex');
    } else {
        var successCallback = function() {
            console.log('success');
        },
        failCallback = function() {
            console.log( 'Failed to load Velocity.js.' );
        };
        // IE 제외 브라우저에 cursor.js 로드
        $.getScript('http://ohhyunji.dothome.co.kr/portfolio/ohhyunji/js/cursor.js').done(successCallback).fail(failCallback);
    }

    // fullpage.js
    $('#wrap').fullpage({
        anchors: ['1Page', '2Page', '3Page', '4Page', '5Page', '6Page', '7Page'],
        autoScrolling:true,
        scrollingSpeed: 800,
        css3:false,
        afterLoad: function(origin, destination, diretion){
            if(origin !== '1page') {
                $('.side_menu li').removeClass('on');
                $('.icon').removeClass('fill');
            }
            switch(origin){
                case '1Page':
                    $('.icon').addClass('fill');
                    break;
                case '2Page':
                    $('.side_menu li').eq(1).addClass('on');
                    port.seFirstAni();
                    break;
                case '3Page':
                    $('.side_menu li').eq(2).addClass('on');
                    port.counterFn();
                    port.graphUp();
                    break;
                case '4Page':
                    $('.side_menu li').eq(3).addClass('on');
                    port.seThdAni();
                    break;
                case '5Page':
                    $('.side_menu li').eq(4).addClass('on');
                    port.seFouAni();
                    break;
                case '6Page':
                    $('.side_menu li').eq(5).addClass('on');
                    port.seFivAni();
                    break;
                case '7Page':
                    $('.side_menu li').eq(6).addClass('on');
                    port.footAni();
                    break;
            }
        }
    });
});

window.onload = function(){
    window.location.hash = '#1Page';
}

