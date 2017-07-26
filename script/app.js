(function(){
    'use strict';
    function AppController(document,scope){
        var app = this;
        app.expandNavOption = false;   
        app.showNavShadow = false; 
        app.onHoverOptionToBeShown = [];
        app.toggleMenuItemOption = false;
        app.currentHoveredMenuItem="";
        app.homeIsSelected = true;
        app.expertiseIsSelected = false;
        app.profileIsSelected = false;
        app.newsIsSelected = false;
        app.careerIsSelected = false;
        app.contactUsIsSelected = false;   
        app.currentYOffSet = 0;    
        app.previousyOffset = 0;
        $(window).bind('scroll', function(){ 
            if(window.pageYOffset>0){
                app.showNavShadow = true;
            } else{
                app.showNavShadow = false;
            } 
            if(app.previousyOffset - window.pageYOffset>=0){
                // $('html, body').stop().animate({
                //     scrollTop: window.pageYOffset
                //  }, 50);
                // if(window.pageYOffset <  $("#whatWeDoSection").offset().top){ //600
                //      $('html, body').stop().animate({
                //     scrollTop: $("#landingPageSection").offset().top - 70
                //  }, 50);
                // }else
                //  if(window.pageYOffset-70 <= $("#OurClient").offset().top && window.pageYOffset >  $("#whatWeDoSection").offset().top){ //1200
                //     $('html, body').stop().animate({
                //     scrollTop: $("#whatWeDoSection").offset().top
                //  }, 50);
                // }else if(window.pageYOffset <  $("#footerSection").offset().top){ //2000
                //     $('html, body').stop().animate({
                //     scrollTop: $("#OurClient").offset().top - 70
                //  }, 50);
                // }              
            }
           else if(window.pageYOffset+70 <  $("#whatWeDoSection").offset().top){
                   $('html, body').stop().animate({
                    scrollTop: $("#whatWeDoSection").offset().top-70
                 }, 50); 
            } else if(window.pageYOffset > $("#whatWeDoSection").offset().top-70 && window.pageYOffset <  $("#OurClient").offset().top-70){
                 $('html, body').stop().animate({
                    scrollTop: $("#OurClient").offset().top-70
                 }, 50);                                  
            } 
            else if(window.pageYOffset > $("#OurClient").offset().top-70  && window.pageYOffset < $("#footerSection").offset().top){
                 $('html, body').stop().animate({
                    scrollTop: $("#footerSection").offset().top-70
                 }, 50);  
            } 
            app.previousyOffset = window.pageYOffset;             
            scope.$apply();           
         });     
        app.navList=[
            {Name:"Home",isSelected:true, url: "http://maqsoftware.in/"},
            {Name:"Expertise",isSelected:false, url: "http://maqsoftware.in/Expertise.html"},
            {Name:"Profile",isSelected:false, url:"http://maqsoftware.in/Profile.html?q=1"},
            {Name:"News",isSelected:false, url: "http://maqsoftware.in/News.html"},
            {Name:"Careers",isSelected:false, url: "http://maqsoftware.in/Careers.html"},
            {Name:"Contact Us",isSelected:false, url:""}];
        app.menuOnHoverOption = [
            {
                Name:"Home",Options:[]
            },{
                Name:"Expertise",Options:[
                    {Name:"Data Management",Url:"Expertise.html"},
                    {Name:"Machine Learning",Url:"Expertise.html?q=1"},
                    {Name:"Microsoft Big Data Solutions",Url:"Expertise.html?q=2"},
                    {Name:"Power BI & Visualizations",Url:"Expertise.html?q=3"},
                    {Name:"Cloud Solutions",Url:"Expertise.html?q=4"}]
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
            {logo: "img/t-mobile.svg", name: "TMobile"},
            {logo: "img/Envision.svg", name: "envision"},
            {logo: "img/Antech.svg", name: "VCAAntech"},
            {logo: "img/starbucks.svg", name: "Starbucks"},
            {logo: "img/Amazon.svg", name: "Amazon"},
            {logo: "img/amazon-web-services.svg", name: "Amazon Web Services"},
            {logo: "img/Devon.svg", name: "devon"},
            {logo: "img/google.svg", name: "Google"}  
            // {logo: "img/Micro.png", name: "Microsoft"},
            // {logo: "img/T-mobile.png", name: "TMobile"},
            // {logo: "img/Envision.png", name: "envision"},
            // {logo: "img/VCA.png", name: "VCAAntech"},
            // {logo: "img/Starbucks.png", name: "Starbucks"},
            // {logo: "img/Amazon.png", name: "Amazon"},
            // {logo: "img/Web Services.png", name: "Amazon Web Services"},
            // {logo: "img/Devon.png", name: "devon"},
            // {logo: "img/Google.png", name: "Google"}         
        ];
        app.technologyList=[
            {
            Id:1,
            Name:"Artificial Intelligence",
            Tagline:"Predict outcomes using your data",
            Content:"Using Microsoft AI and Amazon AI, we translate your data to provide insights to you. Our clients use our expertise to identify new customers, cross the next logical product, upsell to increase profitability and analyze customer sentiment. With our custom intelligent bots, our clients have improved speed and accuracy of customer service. Using advance text and media analysis, we have helped our customers identify sentiment and key phrases.",
            alt:"Technology2",
            figCaption:["MACHINE","LEARNING"],
            img:"img/Artificial.png",
            isSelected:false
            },
             {
             Id:2,
             Name:"Self Service BI",
             Tagline:"Analyze data quickly using Power BI,",
             Content:"Using Microsoft Power BI and Amazon QuickSight, analysts can quickly create near real time dashboards, great visuals without waiting for custom reports. As a Power BI Preferred Supplier, we implemented the largest enterprise Power BI solutions used by over 50,000 users today. Using our custom Power BI solutions to automate deployment, validation and monitoring, we accelerate transformations in large enterprises. As the largest publisher of custom visuals for Power BI on Microsoft Store, we have the expertise to design and implement your unique reporting needs quickly.",
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
             Content:"Develop common data service from data located across enterprise and broader ecosystem using our advanced tools and processes. As a Preferred Supplier for Data Management category, we consolidate 400TB data every day from over 30 data sources in the Data Warehouses. Across our project portfolio, we process over 1,000TB of data everyday to help business derive insights.",
             alt:"Technology1",
             figCaption:["DATA","MANAGEMENT"],
             img:"img/Data Manage.png",
             isSelected:false
            },
            {
            Id:5,
            Name:"Cloud Solutions",
            Tagline:"Simplify access to information while cutting storage costs",
            Content:"Using Microsoft Azure and Amazon Web Services, our clients benefit from fast implementations and scalability. By delivering infrastructure as code, we avoid waiting for provisioning of servers and hardware upgrades. Over the last three years, we migrated hundreds of servers to cloud to improve application performance and reduce data latency. Our experience of migrating several enterprise systems to the cloud, we have the expertise to efficiently migrate your applications to the cloud Intelligently.",
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
        app.locations = [
            {
                id:1,
                locationName:"Redmond",
                locationState: "WA, USA",
                locationImage:"img/Redmond.png",
                locationAddress:"15446 Bel-Red Road\nSuite 201\nRedmond\nWA, 98052",
                locationPhone:"+1 425 526 5399"
            },
            {
                id:2,
                locationName:"Hyderabad",
                locationState: "Telangana, India",
                locationImage:"img/Hyderabad.png",
                locationAddress:"Level 7, Astro, aVance Business Hub\nBehind Dell Campus\nHITEC City 2, Madhapur\nHyderabad 500 081\nTelangana",
                locationPhone:"+91 40 4010 0570"
            },
            {
                id:3,
                locationName:"Mumbai",
                locationState: "Maharashtra, India",
                locationImage:"img/Mumbai.png",
                locationAddress:"201, Meadows Building\nSahar Plaza on Andheri Kurla Road\nAndheri East\nMumbai 400 059\nMaharashtra",
                locationPhone:"+91 22 3080 0201"
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
            app.homeIsSelected = false;
            app.expertiseIsSelected = false;
            app.profileIsSelected = false;
            app.newsIsSelected = false;
            app.careerIsSelected = false;
            app.contactUsIsSelected = false;
            if(nav.Name=="Home"){
                app.homeIsSelected = true;             
            }else if(nav.Name=="Expertise"){                    
                app.expertiseIsSelected = true;                   
            }
            else if(nav.Name=="Profile"){                
                app.profileIsSelected = true;                
            }
            else if(nav.Name=="News"){                
                app.newsIsSelected = true;                 
            }
            else if(nav.Name=="Career"){                
                app.careerIsSelected = true;                   
            }
            else if(nav.Name=="Contact Us"){                  
                app.contactUsIsSelected = true;
            }  
            app.navList.map(function(n,k){
                n.isSelected=false;
                return n;
            });
            nav.isSelected=true;
        }
    
        // $(".scroll-next").click(function() {
        //         var cls = $(this).closest(".section").next().offset().top;
        //         $("html, body").animate({scrollTop: cls}, "slow");
        //     });

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
    main_module.controller('AppController',['$document','$scope',AppController]);
    main_module.directive("scroll", function ($window,$location,$anchorScroll) {
    return function(scope, element, attrs) {      
        angular.element($window).bind("scroll", function() {           
            if(this.pageYOffset>0){
                scope.app.showNavShadow = true;
            } else{
                 scope.app.showNavShadow = false;
            }    
        //     if(element[0].id=="landingPageSection" && scope.app.currentYOffSet < this.pageYOffset){
        //          $location.hash('whatWeDoSection');     
        //          $anchorScroll();
        //     } 
        //     else if(element[0].id=="whatWeDoSection" && scope.app.currentYOffSet < this.pageYOffset){
        //          $location.hash('OurClients');     
        //          $anchorScroll();
        //     } 
        //     else if(element[0].id=="OurClients" && scope.app.currentYOffSet > this.pageYOffset){
        //          $location.hash('whatWeDoSection');     
        //          $anchorScroll();
        //     }
        //    else if(element[0].id=="whatWeDoSection" && scope.app.currentYOffSet > this.pageYOffset){
        //          $location.hash('landingPageSection');     
        //          $anchorScroll();
        //     }
        //     scope.app.currentYOffSet = this.pageYOffset;     
               
            scope.$apply();           
        });
    };
    });
})();
