var oJobPostSection,
    oNewsData = null,
sTemplate = '<div class="accordion-section"><h6 class="accordion-title">@title</h6><div class="accordion-content">@content</div></div>'
    , sNoJobMessage = '<p class="DataSubContent Color595959">No job openings available at this location.<br />Please come back and check again soon.</p>'
    ,sJobServiceIssue = '<p class="DataSubContent Color595959">Issue in connecting to job-post service.<br />Try loading the section again.</p>';

function careersConstructor() {
    oJobPostSection = $("#tabs-2 .accordion");
    var feedUrl = "https://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - India";
    $.ajax({
        url: feedUrl,
        type: 'GET',
        dataType: "jsonp",
        success: function (msg) {
            if (msg) {
                loadIndiaCareers(msg);
            } else {
                oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
            }
        },
        error: function () {
            oJobPostSection.html(sJobServiceIssue).removeClass("Loading").removeClass("LoadingHeight");
        }
    });
}

function loadIndiaCareers(sNewsData) {
    var oTempData = [], parser;
    try {
        parser = new DOMParser();
        oNewsData = parser.parseFromString(sNewsData, "text/xml");

        if (oNewsData.getElementsByTagName('feed') && !oNewsData.getElementsByTagName('entry').length) {
            oTempData[0] = oNewsData.getElementsByTagName('entry');
            //oNewsData.feed.entry = oTempData;
        }
        renderTitle(oNewsData.getElementsByTagName('entry'));

    } catch (exception) {
        oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
    }
    accordion();
}
function renderTitle(oData) {
    var oCurrentPost;
    oJobPostSection.html("").removeClass("Loading").removeClass("LoadingHeight");
    for (iIterator = 0; iIterator < oData.length; iIterator++) {
        oCurrentPost = oData.item(iIterator);
        oJobPostSection.append(sTemplate.replace(/@title/g, oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue).replace(/@content/g, oCurrentPost.getElementsByTagName("content")[0].childNodes[0].nodeValue));
    }
    $("#tabs-2 .accordion *").removeAttr('style');
}

//play when video is visible
var videos = document.getElementsByTagName("iframe"), fraction = 0.8;

function checkScroll() {
  for (var i = 0; i < videos.length; i++) {
        var video = videos[i];

        var x = 0,
            y = 0,
            w = video.width,
            h = video.height,
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
// call Career Constructor
careersConstructor();

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

onYouTubeIframeAPIReady = function onYouTubeIframeAPIReady() {
    console.log("done");
    player = new YT.Player('video-player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}


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