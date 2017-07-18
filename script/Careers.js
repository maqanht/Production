(function (){
    "use strict";

    function CareerController(){
        var career = this;        
         career.navList=[
            {Name:"Home",isSelected:false, url: "http://maqsoftware.in/"},
            {Name:"Expertise",isSelected:false, url: "http://maqsoftware.in/Expertise.html"},
            {Name:"Profile",isSelected:false, url:"http://maqsoftware.in/Profile.html?q=1"},
            {Name:"News",isSelected:false, url: "http://maqsoftware.in/News.html"},
            {Name:"Careers",isSelected:true, url: "http://maqsoftware.in/Careers.html"},
            {Name:"Contact Us",isSelected:false, url:"http://maqsoftware.in/Contactus.html"}];
        career.locations = [
            {Name: "Seattle", img: "img/seattle.png", isSelected: true, jobs: [
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
                {Title: "Program Analyst", isSelected: true, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Senior Software Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]},
            {Name: "Mumbai", img: "img/Mumbai.png", isSelected: false, jobs: [
                {Title: "Program Analyst", isSelected: true, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "UX Designer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Engineer", isSelected: false, Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]}
        ];
        career.availableJobs = career.locations[0].jobs;
        career.selectedJob = career.availableJobs[0];
        career.selectLocation = function (index){
            career.locations.map((n) => { n.isSelected = false;});
            career.locations[index].isSelected= true;
            career.availableJobs = career.locations[index].jobs;
            career.selectedJob = career.availableJobs[0];

            var sTabClicked = $(this).attr("data-link");
            oJobPostSection.html("").addClass("Loading").addClass("LoadingHeight");
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

        $("#CareerLinks > a").click(function () {
            var sTabClicked = $(this).attr("data-link");
            oJobPostSection.html("").addClass("Loading").addClass("LoadingHeight");
            sID = sTabClicked;
            loadPanel();
        });
    }

    angular.module('myApp',[])
    .controller('CareerController',[CareerController]);
}());