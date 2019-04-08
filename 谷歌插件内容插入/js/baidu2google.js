$(function () {
    var btn = "<input type='button'  id='btnGoo' value='谷歌搜索'>";
    $(".s_btn_wr").append(btn).on("click", "#btnGoo", function () {
        var searchBook=$("#kw").val();
        if(searchBook===null||searchBook==='')
            return false;
       // https://www.google.com/search?q=site%3Awww.cnblogs.com%2Fliujianshe1990-%2F%201&gws_rd=ssl    site:www.cnblogs.com/liujianshe1990-/ 1
        return window.open("http://www.google.com/search?q=" + encodeURIComponent(searchBook));
    });

})