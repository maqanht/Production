/*jslint plusplus: true */

"use strict";
var sID,
    iIterator,
    oRedmond = [
        {
            title: {
                "#text": "Engineering Development Manager"
            }
        }, {
            title: {
                "#text": "Programmer Analyst"
            }
        }, {
            title: {
                "#text": "Program Manager"
            }
        }, {
            title: {
                "#text": "Content Editor"
            }
        }, {
            title: {
                "#text": "Web Application Developer"
            }
        }, {
            title: {
                "#text": "Systems Engineer"
            }
        }, {
            title: {
                "#text": "Development Operations Engineer"
            }
        }
    ],
    oNewsData = null,
    oJobPostSection,
    sTemplate = '<div class="BorderBottom pTagLine"><p class="SemiBold Pointer FloatLeft height-50" onclick="showJobPage(\'@location\',@id,\'@title\');">@title</p><p class="FloatRight Pointer viLinks height-50" onclick="showJobPage(\'@location\',@id,\'@title\');">View Description</p></div>',
    sJobServiceIssue = '<p class="DataSubContent Color595959">Issue in connecting to job-post service.<br />Try loading the section again.</p>',
    sNoJobMessage = '<p class="DataSubContent Color595959">No job openings available at this location.<br />Please come back and check again soon.</p>';
function renderTitle(oData) {
    var oCurrentPost;
    oJobPostSection.html("").removeClass("Loading").removeClass("LoadingHeight");
    for (iIterator = 0; iIterator < oData.length; iIterator++) {
        oCurrentPost = oData.item(iIterator);
        oJobPostSection.append(sTemplate.replace(/@title/g, oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue).replace(/@location/g, sID).replace(/@id/g, iIterator));
    }
}

function renderTitleRedmond(oData) {
    var oCurrentPost;
    oJobPostSection.html("").removeClass("Loading").removeClass("LoadingHeight");
    for (iIterator = 0; iIterator < oData.length; iIterator++) {
        oCurrentPost = oData[iIterator];
        oJobPostSection.append(sTemplate.replace(/@title/g, oCurrentPost.title['#text']).replace(/@location/g, sID).replace(/@id/g, iIterator));
    }
}

function loadNews(sNewsData) {
    var oTempData = [], parser;
    try {
        parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");
        if (sID) {
            if (oNewsData.getElementsByTagName('feed') && !oNewsData.getElementsByTagName('entry').length) {
                oTempData[0] = oNewsData.getElementsByTagName('entry');
                //oNewsData.feed.entry = oTempData;
            }
            renderTitle(oNewsData.getElementsByTagName('entry'));
        }
    } catch (exception) {
        oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
    }
}
function loadPanel() {
    
    if (!sID || sID === "Redmond") {
        sID = "Redmond";
        setTimeout(function () {
            renderTitleRedmond(oRedmond);
        }, 800);
    } else {
        var feedUrl = "https://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - India";
        $.ajax({
            url: feedUrl,
            type: 'GET',
            dataType: "jsonp",
            success: function (msg) {
                if (msg) {
                    loadNews(msg);
                } else {
                    oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
                }
            },
            error: function () {
                oJobPostSection.html(sJobServiceIssue).removeClass("Loading").removeClass("LoadingHeight");
            }
        });
    }
    $("#CareerLinks > a").removeClass("tabActive");
    $("#CareerLinks > a[data-link=" + sID + "]").addClass("tabActive");
}
function careersConstructor() {
    
    var sCurrentDate = new Date().format();
    $("#RedMail").attr("href", "mailto:RedmondJobs@MAQSoftware.com?Subject=Application%20for%20job%20posted%20on%20MAQSoftware.com%20(" + sCurrentDate + ")").html("RedmondJobs@MAQSoftware.com");
    $("#IndMail").attr("href", "mailto:IndiaJobs@MAQSoftware.com?Subject=Application%20for%20job%20posted%20on%20MAQSoftware.com%20(" + sCurrentDate + ")").html("IndiaJobs@MAQSoftware.com");

    oJobPostSection = $("#CareerLinkHolder");
    sID = getParameterByName("q");
    loadPanel();
    $("#CareerLinks > a").click(function () {
        var sTabClicked = $(this).attr("data-link");
        oJobPostSection.html("").addClass("Loading").addClass("LoadingHeight");
        sID = sTabClicked;
        loadPanel();
    });

}
function showJobPage(sJobLocation, iJobID, sjobPost) {
    "use strict";
    sJobLocation = sJobLocation.toLowerCase();
    switch (sJobLocation) {
        case "redmond":
            window.location.href = "/#careersinus#?q=" + iJobID + "&pn=" + sjobPost;
            break;
        case "india":
            window.location.href = "/#careersinind#?q=" + iJobID + "&pn=" + sjobPost;
            break;
    }
}

function checkScroll() {
    //play when video is visible
    
    if (!isCareersPage()) {
        return;
    }
    var videoID = "player";
    var videos = $("#player"), fraction = 0.8;
    for (var i = 0; i < videos.length; i++) {
        var video = videos[i];

        var x = 0,
            y = 0,
            w = document.getElementById(videoID).clientWidth,
            h = document.getElementById(videoID).clientHeight,
            r, //right
            b, //bottom 
            visibleX, visibleY, visible,
            parent;


        parent = video;
        while (parent && parent !== document.body) {
            x += parent.offsetLeft;
            y += parent.offsetTop;
            parent = parent.offsetParent;
        }

        r = x + parseInt(w);
        b = y + parseInt(h);

        visibleX = Math.max(0, Math.min(w, window.pageXOffset + window.innerWidth - x, r - window.pageXOffset));
        visibleY = Math.max(0, Math.min(h, window.pageYOffset + window.innerHeight - y, b - window.pageYOffset));

        visible = visibleX * visibleY / (w * h);

        if (visible > fraction) {
            playVideo();
        } else {
            pauseVideo();
        }
    }
};

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
// attaching youtube frame to DOM
function onYouTubeIframeAPIReady() {
    if (!isCareersPage())
        return;
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });

};

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    window.addEventListener('scroll', checkScroll, false);
    window.addEventListener('resize', checkScroll, false);

    //check at least once so you don't have to wait for scrolling for the    video to start
    window.addEventListener('load', checkScroll, false);
};

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        //console.log("event played");
    } else {
        //console.log("event paused");
    }
};

function stopVideo() {
    player.stopVideo();
};

function playVideo() {
    player.playVideo();
};

function pauseVideo() {
    player.pauseVideo();
};