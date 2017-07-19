(function (){
    "use strict";

    function CareerController($scope){
        var career = this;
        career.showLoader = false;
        var sID = "Redmond";
        var selectedIndex = 0,
        oNewsData = null,
        oJobPostSection,
        sTemplate = '<div class="BorderBottom"><p class="SemiBold pTagLine Pointer" onclick="showJobPage(\'@location\',@id,\'@title\');">@title</p><p class="FloatRight MarginUp BackLink" onclick="showJobPage(\'@location\',@id,\'@title\');">View Description</p></div>';
         career.navList=[
            {Name:"Home",isSelected:false, url: "http://maqsoftware.in/"},
            {Name:"Expertise",isSelected:false, url: "http://maqsoftware.in/Expertise.html"},
            {Name:"Profile",isSelected:false, url:"http://maqsoftware.in/Profile.html?q=1"},
            {Name:"News",isSelected:false, url: "http://maqsoftware.in/News.html"},
            {Name:"Careers",isSelected:true, url: "http://maqsoftware.in/Careers.html"},
            {Name:"Contact Us",isSelected:false, url:"http://maqsoftware.in/Contactus.html"}];
        career.locations = [
            {Name: "Redmond", img: "img/seattle.png", isSelected: true, jobs: [
                {Title: "Engineering Development Manager", isSelected: true, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Programmer Analyst", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Program Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Content Editor", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Web Application Developer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Development Engineer in Test", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Test Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Systems Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Development Operations Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]},
            {Name: "Hyderabad", img: "img/Hyderabad.png", isSelected: false, jobs: [
               
            ]},
            {Name: "Mumbai", img: "img/Mumbai.png", isSelected: false, jobs: [
               
            ]}
        ];
        career.availableJobs = career.locations[0].jobs;
        career.selectedJob = career.availableJobs[0];
        career.selectLocation = function (index){
            var sTabClicked = career.locations[index].Name;
            selectedIndex = index;
            career.locations.map((n) => { n.isSelected = false;});
            career.locations[selectedIndex].isSelected= true;
            career.showLoader = true;
            //oJobPostSection.html("").addClass("Loading").addClass("LoadingHeight");
            sID = sTabClicked;
            loadPanel();
        };
        career.selectJob = function (index){
            career.availableJobs.map((n) => { n.isSelected = false;});
            career.selectedJob = career.availableJobs[index];
            career.availableJobs[index].isSelected = true;
        }
        career.scrollTop= function (){
            $('html,body').scrollTop(0);
        }
        function loadPanel() {
            if (!sID || sID === "Redmond") {
                sID = "Redmond";
                    //Directly assigning the Redmond jobs
                    career.availableJobs = career.locations[selectedIndex].jobs;
                    career.selectedJob = career.availableJobs[0];
                    career.showLoader = false;
            } else {
                var feedUrl = "http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Hyderabad";
                if ("mumbai" === sID.toLowerCase()) {
                    feedUrl = "http://www.blogger.com/feeds/2523158019509365490/posts/default/-/Openings - Mumbai";
                }
                $.ajax({
                    url: feedUrl,
                    type: 'GET',
                    dataType: "jsonp",
                    success: function (msg) {
                        if (msg) {
                            loadNews(msg);
                        } else {
                           // oJobPostSection.html(sNoJobMessage).removeClass("Loading").removeClass("LoadingHeight");
                           career.showLoader = false;
                        }
                    },
                    error: function () {
                        career.showLoader = false;
                        //oJobPostSection.html(sJobServiceIssue).removeClass("Loading").removeClass("LoadingHeight");
                    }
                });
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
                    }
                    renderTitle(oNewsData.getElementsByTagName('entry'));
                }
            } catch (exception) {
                career.showLoader = false;
            }
        }
        function renderTitle(oData) {
            var oCurrentPost;
            career.locations[selectedIndex].jobs = [];
            for (var iIterator = 0; iIterator < oData.length; iIterator++) {
                oCurrentPost = oData.item(iIterator);
                var title = oCurrentPost.getElementsByTagName("title")[0].childNodes[0].nodeValue;
                career.locations[selectedIndex].jobs.push({ Title: title, isSelected: false});
            }
            career.availableJobs = career.locations[selectedIndex].jobs;
            career.selectedJob = career.availableJobs[0];
            career.showLoader = false;
            $scope.$apply();
        }
    }

    angular.module('myApp',[])
    .controller('CareerController',['$scope',CareerController]);
}());