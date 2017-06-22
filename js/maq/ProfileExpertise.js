(function () {
    "use strict";
    var oPageNavLinks = {
        pagelink0: "About.txt",
        pagelink1: "Delivery-Approach.txt",
        pagelink2: "Recognition.txt",
        pagelink3: "Management.txt",
        pagelink4: "Client.txt"
    },
        oExpertise = {
            pagelink0: "Data-Management.txt",
            pagelink1: "Machine-Learning.txt",
            pagelink2: "MicrosoftBigData.txt",
            pagelink3: "Visualizations.txt",
            pagelink4: "WebDevelopment.txt"
        };
    if (-1 !== window.location.href.toLowerCase().indexOf("expertise.html")) {
        oPageNavLinks = oExpertise;
    }
    function loadPageChunk(sPageName) {
        $.ajax({
            url: "data/" + sPageName,
            success: function (sResponse) {
                $("#DataSection").html(sResponse);
            }
        });
    }
    $(document).ready(function () {
        var sID = getParameterByName("q"),
            sLink = oPageNavLinks["pagelink" + sID],
            oPageLink = $("#PageNavLink .aSiteLinks");            
        oPageLink.click(function () {
            var sStopNavLink = oPageNavLinks[$(this).attr("data-link")];
            if (sStopNavLink) {
                oPageLink.removeClass("Active");
                $(this).addClass("Active");
                loadPageChunk(sStopNavLink);
            }
        });
        if (!sLink) {
            sID = 0;
            loadPageChunk(oPageNavLinks.pagelink0, sID);
        } else {
            loadPageChunk(sLink);
        }
        $("#PageNavLink a[data-link=pagelink" + sID + "]").addClass("Active");
    });
}());