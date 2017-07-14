(function(){
    'use strict';
    function AppController(){
        var app = this;        
         app.navList=[
            {Name:"Home",isSelected:true, url: "http://maqsoftware.in/"},
            {Name:"Expertise",isSelected:false, url: "http://maqsoftware.in/Expertise.html"},
            {Name:"Profile",isSelected:false, url:"http://maqsoftware.in/Profile.html?q=1"},
            {Name:"News",isSelected:false, url: "http://maqsoftware.in/News.html"},
            {Name:"Contact Us",isSelected:false, url:"http://maqsoftware.in/Contactus.html"}];
        app.clients=[
            {logo: "../img/MS-Logo.png", name: "Microsoft"},
            {logo: "../img/Amazon-Logo.png", name: "Amazon"},
            {logo: "../img/Google-logo.png", name: "Google"},
            {logo: "../img/Tmobile-Logo.png", name: "TMobile"},
            {logo: "../img/MS-Logo.png", name: "Microsoft"}
        ];
        app.technologyList=[
            {
             Id:1,
             Name:"DATA MANAGEMENT",
             Tagline:"FROM SOURCE TO ANALYTICS",
             Content:"Consolidate huge data spread across ecosystem through Automated Data Pipelines using our proprietary tools and processes. Translate the data into key business insights",
             alt:"Technology1",
             figCaption:["DATA","MANAGEMENT"],
             img:"img/Data-Management.png",
             isSelected:false
            },
             {
            Id:2,
            Name:"BIG DATA SOLUTIONS",
            Tagline:"COSMOS EXPERTISE",
            Content:"We expertise in using Big Data platform to handle your data management needs. Multiple architecture patterns defined for data ingress and egress for COSMOS. Handled huge amounts of data with our COSMOS development framework and tools",
            alt:"Technology3",
            figCaption:["","BIG DATA SOLUTIONS"],
            img:"img/Microsoft-BigData.png",
            isSelected:false
             },
            {
            Id:3,
            Name:"WEB DEVELOPMENT & CLOUD COMPUTING",
            Tagline:"AZURE EXPERTISE",
            Content:"Magic happens in the cloud. We expertise in compute, host, and data services in Microsoft Azure and Amazon Web Services. Migrate your systems to Cloud with our standard process flow. We have migrated one of the largest corporate in business intelligence reporting systems to cloud",
            alt:"Technology5",
            figCaption:["WEB DEVELOPMENT","CLOUD SERVICES"],
            img:"img/Web-Development-&-Cloud-Services.png",
            isSelected:false},           
            {
            Id:4,
            Name:"MACHINE LEARNING",
            Tagline:"CUTTING EDGE AI ANALYSIS",
            Content:"Translate your data into insights. We expertise both in traditional Business Intelligence and Machine Learning. Get a peek into tomorrow by transforming data into predictions. We have expertise across the spectrum with Predictive Analytics, Text and Media Analytics. Enable businesses with intelligent Applications and  Smart Bots",
            alt:"Technology2",
            figCaption:["MACHINE","LEARNING"],
            img:"img/Machine-Learning.png",
            isSelected:false
            },
            {
             Id:5,
             Name:"POWER BI & VISUALIZATIONS",
             Tagline:"COMPREHENSIVE REPORTS",
             Content:"Visualize insights with real time dashboards, high performing reports, stunning visuals and more. We are the Microsoft Preferred Supplier for Power BI with the largest corporate deployment of Power BI. Largest external publisher of custom visuals Microsoft Store. Bring analytics to life with Integration of R visualizations. We are pioneers in the industry with proprietary Power BI Automation Framework for deployment, validations, and monitoring systems",
             alt:"Technology4",
             figCaption:["POWER BI","VISUALIZATIONS"],
             img:"img/PowerBI-Visualizations.png",
             isSelected:true
            }
        ];
        app.sectionOption=[
            {Name:"SOURCE",Class:"flex-center",line:true,isSelected:false},
            {Name:"ENHANCE",Class:"flex-center",line:true,isSelected:false},
            {Name:"DISCOVER",Class:"flex-center",line:true,isSelected:false},
            {Name:"ENABLE",Class:"flex-start",line:false,isSelected:true}];

        app.technologyName=app.technologyList[4].Name;
        app.technologyTagLine=app.technologyList[4].Tagline;
        app.technologyCotent=app.technologyList[4].Content;
        app.technologyId=app.technologyList[4].Id;
        app.changeTechnology = function(technology){
            app.technologyName = technology.Name;
            app.technologyTagLine = technology.Tagline;
            app.technologyCotent = technology.Content;
            app.technologyId = technology.Id;
            app.technologyList.map(function(tech,key){
                app.sectionOption.map(function(option,key){
                    option.isSelected=false;
                    if(app.technologyId==1 && option.Name=="SOURCE"){
                        option.isSelected=true;
                    }
                    if((app.technologyId==2 || app.technologyId==3) && option.Name=="ENHANCE"){
                        option.isSelected=true;
                    }
                    if(app.technologyId==4 && option.Name=="DISCOVER"){
                        option.isSelected=true;
                    }
                    if(app.technologyId==5 && option.Name=="ENABLE"){
                        option.isSelected=true;
                    }
                    return option;
                });
                tech.isSelected=false;
                return tech;
            });
            technology.isSelected = true;           
        }
        app.changeNav =function(nav){
            app.navList.map(function(n,k){
                n.isSelected=false;
                return n;
            });
            nav.isSelected=true;
        }


        // Scrolls to the selected menu item on the page
            $('a[href*=#]:not([href=#],[data-toggle],[data-target],[data-slide])').click(function () {
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });

            $('a[href*=#]').on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 500, 'linear');
            });
       

    }
    var main_module = angular.module('myApp',[]);
    main_module.controller('AppController',[AppController]);
})();
