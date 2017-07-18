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
                {Title: "Program Analyst", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "UX Designer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Program Analyst", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "UX Designer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]},
            {Name: "Hyderabad", img: "img/Hyderabad.png", isSelected: false, jobs: [
                {Title: "Program Analyst", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "UX Designer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Engineer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]},
            {Name: "Mumbai", img: "img/Mumbai.png", isSelected: false, jobs: [
                {Title: "Program Analyst", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Engineering Development Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "UX Designer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Localization Program Manager", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"},
                {Title: "Software Engineer", Description: "We are committed to launch high quality softwares fast through build, test and deployment automation"}
            ]}
        ];
        career.availableJobs = career.locations[0].jobs;
        career.selectLocation = function (index){
            career.locations.map((n) => { n.isSelected = false;});
            career.locations[index].isSelected= true;
            career.availableJobs = career.locations[index].jobs;
        };
    }

    angular.module('myApp',[])
    .controller('CareerController',[CareerController]);
}());