/*
uiw    设计稿宽度
*10    设定的font-size   值
*/
function setRem() {
    var uiw = 350,
        winw = document.documentElement.clientWidth || document.body.clientWidth;
    document.documentElement.style.fontSize = (winw / uiw) * 10 + 'px';

}
setRem();
window.onresize = setRem;