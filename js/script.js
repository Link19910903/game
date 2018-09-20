// tab栏部分
// 鼠标放在tab栏高亮显示,其他tab栏取消高亮
var hd = document.getElementById('hd');
var ul = hd.children[0];
var num = null;
for (var i = 0; i < ul.children.length;i++){
    var li = ul.children[i];

    var a = li.children[0];
    var arr = li.children[0].children[2];
    a.setAttribute('index', i);
    //鼠标经过显示盒子里的图片
    a.onmouseover = function () {
        for (var i = 0; i < ul.children.length; i++) {
            var li = ul.children[i]
            var a = li.children[0];
            var arr = li.children[0].children[2];
            var index = parseInt(this.getAttribute('index'));
            num = index;
            a.className = '';
            arr.className = '';
            this.borderLeft = '4px solid #CF0F32'
        }
        // console.log()
        this.className = 'current'
        this.children[2].className = 'i-triangle show'
        
        var bd = document.getElementById('bd');
        for (var i = 0; i < bd.children.length; i++) {
            var div = bd.children[i];
            div.children[0].className = 'hid';
            console.log(div.children[0])
        }
            bd.children[num].children[0].className = 'show'  
            // console.log(bd.children[num].children[0])      
    }
    
}
// 中间部分鼠标放在图片上红线变长
var medioBox = document.getElementById('medio-box')
for (var i = 0, len = medioBox.children.length; i < len; i++) {
    var li = medioBox.children[i];
    li.setAttribute('index', i)
    var index = parseInt(li.getAttribute('index'));
    var img = li.children[0].children[0];
    li.onmouseenter = function () {
        for(var i = 0, len = medioBox.children.length; i < len; i++) {
            var li = medioBox.children[i];
            li.children[1].style.width = '22px'
        }
        this.children[1].style.width = '41px'
    }
    li.onmouseleave = function () {
        for(var i = 0, len = medioBox.children.length; i < len; i++) {
            var li = medioBox.children[i];
            li.children[1].style.width = '22px'
        }
    }
}
//热门游戏部分
//鼠标经过图片
     var ull = document.getElementById('ul');
     for (var i = 0; i < ull.children.length; i++) {
        var lii = ull.children[i];
        var tupian = lii.children[0];
        var cover = tupian.children[0];
        tupian.onmouseenter = function () {
        this.children[0].className = 'cover move'
     }
     tupian.onmouseleave = function () {
        this.children[0].className = 'cover'
        }
     }
