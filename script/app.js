(function(){
    'use strict';
    function AppController(){
        var app = this;
        app.expandNavOption = false;   
        app.showNavShadow = false; 
        app.onHoverOptionToBeShown = [];
        app.toggleMenuItemOption = false;
        app.currentHoveredMenuItem="";
        app.navList=[
            {Name:"Home",isSelected:true, url: "http://maqsoftware.in/"},
            {Name:"Expertise",isSelected:false, url: "http://maqsoftware.in/Expertise.html"},
            {Name:"Profile",isSelected:false, url:"http://maqsoftware.in/Profile.html?q=1"},
            {Name:"News",isSelected:false, url: "http://maqsoftware.in/News.html"},
            {Name:"Careers",isSelected:false, url: "http://maqsoftware.in/Careers.html"},
            {Name:"Contact Us",isSelected:false, url:"http://maqsoftware.in/Contactus.html"}];
        app.menuOnHoverOption = [
            {
                Name:"Home",Options:[]
            },{
                Name:"Expertise",Options:[
                    {Name:"Data Management",Url:"Expertise.html"},
                    {Name:"Machine Learning",Url:"Expertise.html?q=1"},
                    {Name:"Microsoft Big Data Solutions",Url:"Expertise.html?q=2"},
                    {Name:"Power BI & Visualizations",Url:"Expertise.html?q=3"},
                    {Name:"Web Development & Cloud Services",Url:"Expertise.html?q=4"}]
            },{
                Name:"Profile",Options:[
                    {Name:"About",Url:"Profile.html"},
                    {Name:"Delivery Approach",Url:"Profile.html?q=1"},
                    {Name:"Recognitions",Url:"Profile.html?q=2"},
                    {Name:"Management",Url:"Profile.html?q=3"},
                    {Name:"Clients",Url:"Profile.html?q=4"}]
            },{
                Name:"News",Options:[
                    {Name:"Latest News",Url:"News.html"},
                    {Name:"Press Coverage",Url:"News.html"}]
            },{
                Name:"Careers",Options:[
                    {Name:"Redmond",Url:"Careers.html"},
                    {Name:"Hyderabad",Url:"Careers.html?q=Hyderabad"},
                    {Name:"Mumbai",Url:"Careers.html?q=Mumbai"}]
            },{
                Name:"Contact Us",Options:[
                    {Name:"Phone",Url:"Contactus.html"},
                    {Name:"Maps",Url:"Contactus.html"}]
            }
        ];
        app.showMouseOverOption =function(nav){
            app.menuOnHoverOption.map(function(option,key){
                if(option.Name==nav.Name){
                    app.onHoverOptionToBeShown = option.Options;
                }
            });    
            app.currentHoveredMenuItem = nav.Name; 
            app.toggleMenuItemOption = true;       
        }
        app.disableOnHoverMenu = function(){
            app.toggleMenuItemOption=false;
        }
        app.clients=[
            {logo: "img/microsoft.svg", name: "Microsoft"},
            // {logo: "img/techsoup.png", name: "techsoup"},
            {logo: "img/t-mobile.svg", name: "TMobile"},
            {logo: "img/Envision.svg", name: "envision"},
            {logo: "img/Antech.svg", name: "VCAAntech"},
            {logo: "img/starbucks.svg", name: "Starbucks"},
            {logo: "img/Amazon.svg", name: "Amazon"},
            {logo: "img/amazon-web-services.svg", name: "Amazon Web Services"},
            {logo: "img/Devon.svg", name: "devon"},
            {logo: "img/google.svg", name: "Google"}           
        ];
        app.technologyList=[
            {
            Id:1,
            Name:"Artificial Intelligence",
            Tagline:"Your data will help you predict outcomes",
            Content:"Translate your data into insights. We expertise both in traditional Business Intelligence and Machine Learning. Get a peek into tomorrow by transforming data into predictions. We have expertise across the spectrum with Predictive Analytics, Text and Media Analytics. Enable businesses with intelligent Applications and  Smart Bots",
            alt:"Technology2",
            figCaption:["MACHINE","LEARNING"],
            img:"img/Artificial.png",
            isSelected:false
            },
             {
             Id:2,
             Name:"Power BI & Visualizations",
             Tagline:"Visualize and interact with data instantly",
             Content:"Visualize insights with real time dashboards, high performing reports, stunning visuals and more. We are the Microsoft Preferred Supplier for Power BI with the largest corporate deployment of Power BI. Largest external publisher of custom visuals Microsoft Store. Bring analytics to life with Integration of R visualizations. We are pioneers in the industry with proprietary Power BI Automation Framework for deployment, validations, and monitoring systems",
             alt:"Technology4",
             figCaption:["POWER BI","VISUALIZATIONS"],
             img:"img/Power BI.png",
             isSelected:true
            },
            {
            Id:3,
            Name:"Big Data",
            Tagline:"Personalize your customer experience",
            Content:"We expertise in using Big Data platform to handle your data management needs. Multiple architecture patterns defined for data ingress and egress for COSMOS. Handled huge amounts of data with our COSMOS development framework and tools",
            alt:"Technology3",
            figCaption:["","BIG DATA"],
            img:"img/Big.png",
            isSelected:false
             },            {
             Id:4,
             Name:"Data Management",
             Tagline:"Consolidate data and minimize inconsistencies",
             Content:"Consolidate huge data spread across ecosystem through Automated Data Pipelines using our proprietary tools and processes. Translate the data into key business insights",
             alt:"Technology1",
             figCaption:["DATA","MANAGEMENT"],
             img:"img/Data Manage.png",
             isSelected:false
            },
            {
            Id:5,
            Name:"Cloud Solutions",
            Tagline:"Simplify access to information while cutting storage costs",
            Content:"Magic happens in the cloud. We expertise in compute, host, and data services in Microsoft Azure and Amazon Web Services. Migrate your systems to Cloud with our standard process flow. We have migrated one of the largest corporate in business intelligence reporting systems to cloud",
            alt:"Technology5",
            figCaption:["WEB DEVELOPMENT","CLOUD SERVICES"],
            img:"img/Cloud.png",
            isSelected:false
            }
        ];
        app.sectionOption=[
            {Name:"SOURCE",Class:"flex-center",line:true,isSelected:false},
            {Name:"ENHANCE",Class:"flex-center",line:true,isSelected:false},
            {Name:"DISCOVER",Class:"flex-center",line:true,isSelected:false},
            {Name:"ENABLE",Class:"flex-start",line:false,isSelected:true}];

        app.newsList = [
            {
            id:1,
            publishedDate:"August 22, 2016",
            publishedBy:"MAQ Software",
            newsHeadline:"MAQ Software Honored for the 8th time as one of America’s Fastest-Growing Private Companies by Inc. Magazine",
            newsContent:"MAQ Software has accomplished the rare achievement of ranking on the Inc. 5000 list for the 8th time. Less than 2% of Inc. 5000 companies demonstrate sustained growth by appearing 8 or more times. The highly prestigious list has tracked the nation's fastest-growing private companies"
            },
            {
            id:2,
            publishedDate:"August 22, 2016",
            publishedBy:"MAQ Software",
            newsHeadline:"MAQ Software Honored for the 8th time as one of America’s Fastest-Growing Private Companies by Inc. Magazine",
            newsContent:"MAQ Software has accomplished the rare achievement of ranking on the Inc. 5000 list for the 8th time. Less than 2% of Inc. 5000 companies demonstrate sustained growth by appearing 8 or more times. The highly prestigious list has tracked the nation's fastest-growing private companies"
            },
            {
            id:3,
            publishedDate:"August 22, 2016",
            publishedBy:"MAQ Software",
            newsHeadline:"MAQ Software Honored for the 8th time as one of America’s Fastest-Growing Private Companies by Inc. Magazine",
            newsContent:"MAQ Software has accomplished the rare achievement of ranking on the Inc. 5000 list for the 8th time. Less than 2% of Inc. 5000 companies demonstrate sustained growth by appearing 8 or more times. The highly prestigious list has tracked the nation's fastest-growing private companies"
            },
            {
            id:4,
            publishedDate:"August 22, 2016",
            publishedBy:"MAQ Software",
            newsHeadline:"MAQ Software Honored for the 8th time as one of America’s Fastest-Growing Private Companies by Inc. Magazine",
            newsContent:"MAQ Software has accomplished the rare achievement of ranking on the Inc. 5000 list for the 8th time. Less than 2% of Inc. 5000 companies demonstrate sustained growth by appearing 8 or more times. The highly prestigious list has tracked the nation's fastest-growing private companies"
            }
        ];
         app.slideList = [
            {
                id:0,
                isSelected:true,
                companyImage:"img/MS-Logo.png",
                clientImage: "img/clientImage.png",
                clientName: "John Smith",
                clientPosition: "Director",
                content:"'You are all super talented with admirable work ethics - we greatly appreciate all the work you've done up-to-date.'"
            },
            {
                id:1,
                isSelected:false,
                companyImage:"img/google.svg",
                clientImage: "img/clientImage.png",
                clientName: "John Smith",
                clientPosition: "Director",
                content:"'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'"
            },
            {
                id:2,
                isSelected:false,
                companyImage:"img/Amazon.png",
                clientImage: "img/clientImage.png",
                clientName: "John Smith",
                clientPosition: "Director",
                content:"'You are all super talented with admirable work ethics - we greatly appreciate all the work you've done up-to-date.'"
            },
            {
                id:3,
                isSelected:false,
                companyImage:"img/Antech.png",
                clientImage: "img/clientImage.png",
                clientName: "John Smith",
                clientPosition: "Director",
                content:"'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt'"
            },
            {
                id:4,
                isSelected:false,
                companyImage:"img/starbucks.svg",
                clientImage: "img/clientImage.png",
                clientName: "John Smith",
                clientPosition: "Director",
                content:"'You are all super talented with admirable work ethics - we greatly appreciate all the work you've done up-to-date.'"
            }
        ];
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

            $(window).on('load resize', function() { //Fires when window is loaded or resized
                if ($(window).width() <= 991) {
                    $('#OurClients').append($('#myCarousel')).append($('#clientHeader')).append($('#clientLogos'));
                } else {
                    $('#OurClients').append($('#clientHeader')).append($('#myCarousel')).append($('#clientLogos'));
                }
            });      
    }
    var main_module = angular.module('myApp',[]);
    main_module.controller('AppController',[AppController]);
    main_module.directive("scroll", function ($window) {
    return function(scope, element, attrs) {      
        angular.element($window).bind("scroll", function() {
            if(this.pageYOffset>0){
                scope.app.showNavShadow = true;
            } else{
                 scope.app.showNavShadow = false;
            }              
            scope.$apply();           
        });
    };
    });
})();
