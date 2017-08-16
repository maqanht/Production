function loadNewsMainPage() {
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            loadNewsMain(sResponse);
        }
    });
}
function loadNewsMain(sNewsData) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;
        renderNewsMain();
    } catch (ignore) {
    }
}
function renderNewsMain() {

    var iStart, iEnd, entry1, sDate, oDatePart, oDate, iTotalNews = 0;
    entry1 = oNewsData.getElementsByTagName('entry').item(0);
    if (entry1) {
        sDate = entry1.getElementsByTagName('published')[0].childNodes[0].nodeValue.toLowerCase().split("t");
        oDatePart = [];
        if (sDate[0]) {
            oDatePart = sDate[0].split("-");
        }
        oDate = null;
        if (oDatePart.length === 3) {
            oDate = new Date(oDatePart[0], (oDatePart[1] - 1), oDatePart[2]);
        } else {
            oDate = new Date(sDate[0]);
        }
        oDate = oDate.format();
        $("#dvContent2 .pSubContent:first").text(oDate);

        for (iCount = 0; iCount < iTotal; iCount++) {
            entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue.replace(oItalicBookName[iCount], "<i class = 'SemiBold'>" + oItalicBookName[iCount] + "</i>");
        }

        $("#dvContent2 .pContent .SemiBold").html(entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue);
        $("#dvContent2 .pContent .subData").html(entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue);
    }
    $('.subData *').removeAttr('style');
    $('.subData').dotdotdot();
}

function setHeader() {
    $("#header").addClass("header-prepare");
}