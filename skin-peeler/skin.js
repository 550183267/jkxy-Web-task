// 存储cookie
function setCookie(name, value) {
    var expdate = new Date();
    expdate.setTime(expdate.getTime() + (24 * 60 * 60 * 1000 * 30));
    document.cookie = name + "=" + escape(value) + ((expdate == null) ? "" : ";expires=" + expdate.toGMTString());
}

// 获取cookie
function getCookie(name) {
    if (document.cookie.length > 0) {
        offset = document.cookie.indexOf(name + "=");
        if (offset != -1) {
            offset = offset + name.length + 1;
            end = document.cookie.indexOf(";", offset);
            if (end == -1)
                end = document.cookie.length;
            return unescape(document.cookie.substring(offset, end));
        }
    }
    return "";
}

var thisskin = getCookie("skin");
if (thisskin != "")
    skin.href = thisskin;
else
    skin.href = "skin.css";

// 换肤
function peeler(url) {
    if (url != "") {
        skin.href = url;
        setCookie("skin", url);
        getCookie("skin");
    }
}