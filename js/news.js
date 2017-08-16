/*jslint plusplus: true */

"use strict";
var oNewsPager = {
    template: '<div><div class="post-meta"><span>@date</span></div><div class="post-header"><h2>@title</h2></div><div class="post-entry">@content</div></div>',
    pageIndex: 0,
    pagesize: 1
},
    iTotalNews = 0,
    iIterator = 0,
    iMaxPageIndex,
    oNewsData = null,
    oNewsContainer,
    sScrollElement = "body,html",
    sLoadingClass = "Loading",
        oItalicBookName = [
                        "What I Did Not Learn in B-School: Insights for New Managers"
                        , "What I Did Not Learn at IIT: Transition from Campus to Workplace"
                        , "What I Did Not Learn at IIT - Transitioning from Campus to Workplace"
        ], iCount, iTotal = oItalicBookName.length;
function renderNews() {
    var iStart, iEnd, entry1, sDate, oDatePart, oDate;
    oNewsContainer.removeClass(sLoadingClass);
    if (iTotalNews) {
        iStart = oNewsPager.pageIndex * oNewsPager.pagesize;
        iEnd = iStart + oNewsPager.pagesize;
        if (iEnd > iTotalNews) {
            iEnd = iTotalNews;
        }
        for (iIterator = iStart; iIterator < iEnd; iIterator++) {
            entry1 = oNewsData.getElementsByTagName('entry').item(iIterator);
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

                for (iCount = 0; iCount < iTotal; iCount++) {
                    entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue = entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue.replace(oItalicBookName[iCount], "<i class='SemiBold'>" + oItalicBookName[iCount] + "</i>");
                }
                oNewsContainer.html(oNewsPager.template.replace("@title", entry1.getElementsByTagName('title')[0].childNodes[0].nodeValue).replace("@date", oDate).replace("@content", entry1.getElementsByTagName('content')[0].childNodes[0].nodeValue));
            }
        }
        oNewsContainer.find("a").attr("target", "_blank");
        oNewsContainer.find("img").addClass("post - media");
        
        $('#LoadPageNews *').removeAttr('style');
    }
}
function loadNews(sNewsData, id) {
    try {
        var parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        iTotalNews = oNewsData.getElementsByTagName('entry').length;
        if (iTotalNews || oNewsData.getElementsByTagName('content')) {
            iMaxPageIndex = Math.round(iTotalNews / oNewsPager.pagesize);
            $("#Pagination").show();
            renderNews();
        }
    } catch (ignore) {
    }
}
function newsConstructor() {
    oNewsContainer = $("#LoadPageNews");
    var id = getParameterByName("id");
    //if (typeof id !== "undefined") {

    //}
    $.ajax({
        url: 'https://www.blogger.com/feeds/2523158019509365490/posts/default/-/News',
        type: 'GET',
        dataType: 'jsonp',
        success: function (sResponse) {
            //debugger;
            loadNews(sResponse, id);
        },
        complete: function () {
            oNewsContainer.removeClass(sLoadingClass);
        }
    });

    $("#Pagination p").click(function () {
        var oCurrentElement = $(this),
            iClicked = oCurrentElement.attr("data-clicked");
        if (!oCurrentElement.hasClass("DisabledColor")) {
            if (iClicked === "0") {
                oNewsPager.pageIndex--;
                $("#Next").removeClass("DisabledColor");
                if (oNewsPager.pageIndex <= 0) {
                    oNewsPager.pageIndex = 0;
                    $("#Previous").addClass("DisabledColor");
                }
            } else {
                oNewsPager.pageIndex++;
                $("#Previous").removeClass("DisabledColor");
                if (oNewsPager.pageIndex >= iMaxPageIndex) {
                    oNewsPager.pageIndex = iMaxPageIndex;
                    $("#Next").addClass("DisabledColor");
                }
            }
            oNewsContainer.html("").addClass(sLoadingClass);
            $(sScrollElement).animate({ scrollTop: "0px" }, 500, function () {
                renderNews();
            });
        }
    });
};
