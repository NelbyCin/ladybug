(function($, document, window){
    $(document).ready(function(){
        // Cloning main navigation for mobile menu
        $(".mobile-navigation").append($(".main-navigation .menu").clone());

        // Mobile menu toggle 
        $(".menu-toggle").click(function(){
            $(".mobile-navigation").slideToggle();
        });

        // 设置你想要的年份常量
        const FIXED_YEAR = 2015;

        // 填充带 year 类的 span
        $("[class^=year]").each((i, el) => {
            var baseYear = FIXED_YEAR;
            var offset = parseInt(el.className.replace(/year/i, ""), 10) || 0;
            el.innerHTML = baseYear + offset;
        });

        // Google Analytics tracking code...
        (function(i,s,o,g,r,a,m){...})(...);

        ga('create', 'UA-47278397-5', 'auto');
        ga('send', 'pageview');
    });
})(jQuery, document, window);
