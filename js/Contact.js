var oMapData = [
        {
            address: "15446 Bel-Red Road, Suite 201 Redmond, WA 98052",
            lat: 47.633087,
            long: -122.133202
        },
        {
            address: "201, Meadows Building, Sahar Plaza on Andheri Kurla Road, Andheri East, Mumbai 400 059, Maharashtra",
            lat: 19.1128987,
            long: 72.8685805
        },
        {
            address: "Level 7, Astro, aVance Business Hub, Behind Dell Campus, HITEC City 2, Madhapur, Hyderabad 500 081, Andhra Pradesh",
            lat: 17.446235,
            long: 78.368914
        }
],
    oMap,
    sCurrentCity,
    oOffset,
    sScrollElement = "body,html",
    bMapVisible = false,
    bTouchZoom = false,
    sSearchTerm,
    iLastWindowWidth = $(window).width(),
    iWidth = 600,
    iHeight = 400,
    rtime = new Date(1, 1, 2000, 12, 0, 0),
    timeout = false,
    delta = 200,
    oLatLng,
    oMarker,
    directionsDisplay;

function getMapSectionOffset() {
    var oMapDirDiv = $("#MapDirection");
    oOffset = oMapDirDiv.offset();
    oOffset.top = oOffset.top - 100;
    oOffset.height = oMapDirDiv.height();
}
function resizeMap() {
    var oMap = $("#myMap"), iMapWidth, iMapHeight;
    oMap.css("width", "100%");
    iMapWidth = oMap.width();
    iMapHeight = (iMapWidth * iHeight) / iWidth;
    oMap.height(iMapHeight);
}
function showMap(Latitude, Longitude, address) {
    $("#NHYD").show();
    oLatLng = { lat: Latitude, lng: Longitude };
    oMap = new google.maps.Map(document.getElementById('myMap'), {
        zoom: 13,
        center: oLatLng
    });
    oMarker = new google.maps.Marker({
        position: oLatLng,
        map: oMap,
        title: 'MAQ Software\n' + address,
        animation: google.maps.Animation.DROP
    });
    resizeMap();
    if (Latitude && address) {
        $("#MapAddress").html(address);
    }
}

function getRouteMap(inputAddress) {
    var directionsService = new google.maps.DirectionsService;
    if (!directionsDisplay) {
        directionsDisplay = new google.maps.DirectionsRenderer;
    }
    directionsDisplay.setMap(oMap);
    directionsService.route({
        origin: inputAddress,
        destination: oLatLng,
        travelMode: 'DRIVING'
    }, function (response, status) {
        $("#BingDirection").html('');
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            directionsDisplay.setPanel(document.getElementById('BingDirection'));
        } else {
            directionsDisplay.setMap(null);
            $("#ClearDirection").click();
            $("#BingDirection").html('Unable to find a route for the location you entered. Please try again.');
        }
        $("#BingDirection").removeClass("Loading");
    });
}
function getRouteTo(latitude, longitude, inputAddress) {
    var iAddressSectionTopPosition;
    if (inputAddress && inputAddress !== "") {
        getRouteMap(inputAddress);
    }
    iAddressSectionTopPosition = $("#MapDirection").offset().top;
    iAddressSectionTopPosition -= 100; // -100px for header
    $(sScrollElement).animate({ scrollTop: iAddressSectionTopPosition }, 500);
}
function renderMap(sCurrentLocation, flag, sInputAddress) {
    $("#MapDirection").show();
    var iIndex = -1;
    switch (sCurrentLocation) {
        case "Redmond":
            iIndex = 0;
            break;
        case "Mumbai":
            iIndex = 1;
            break;
        case "Hyderabad":
            iIndex = 2;
            break;
        default:
            sCurrentLocation = "Redmond";
            iIndex = 0;
            break;
    }
    if (iIndex > -1) {
        if (flag) {
            $("#FromAddress").attr("placeholder", sCurrentLocation);
            showMap(oMapData[iIndex].lat, oMapData[iIndex].long, oMapData[iIndex].address);
        } else {
            $("#BingDirection").addClass("Loading");
            getRouteTo(oMapData[iIndex].lat, oMapData[iIndex].long, sInputAddress);
        }
    }
    $('#inputAddress').attr("placeholder", sCurrentLocation);
}
function setMapPosition() {
    if ($(window).width() >= 0 && $(window).width() < 752) {
        $("#MapAddress").after($("#myMap"));
        $("#myMap").css("margin-top", "15px");
    } else {
        $("#MapContainer").append($("#myMap"));
        $("#myMap").css("margin-top", "0");
    }
    getMapSectionOffset();
    if (bTouchZoom) {
        $(sScrollElement).animate({ scrollTop: oOffset.top }, 500);
    }
    bTouchZoom = false;
}
function initializeMap() {
    $(".BackLink").attr("href", "mailto:sales@MAQSoftware.com?Subject=MAQ%20Software:%20Request%20for%20Information%20(" + new Date().format() + ")").html("sales@maqsoftware.com");
    $(".VwMap").click(function () {
        bTouchZoom = bMapVisible = true;
        sCurrentCity = $(this).attr("data-name");
        $("#ClearDirection").click();
    });
    $('#FromAddress').keypress(function (e) {
        if (e.keyCode === 13) {
            $("#GetDirection").click();
        }
    });
    $("#GetDirection").click(function () {
        sSearchTerm = $("#FromAddress").val();
        sSearchTerm = sSearchTerm.replace(/^\s+|\s+$/g, '');
        if (sSearchTerm) {
            $("#BingDirection").html("");
            $("#NHYDTtl,#NHYDMile").hide();
            renderMap(sCurrentCity, false, sSearchTerm);
        }
    });
    $("#ClearDirection").click(function () {
        $("#FromAddress").val("");
        $("#BingDirection").html("");
        $("#NHYDTtl,#NHYDMile").hide();
        renderMap(sCurrentCity, true);
        setMapPosition();
    });
    if ($("#ClearDirection")) {
        bMapVisible = true;
        $("#ClearDirection").click();
    }
}

function redrawMap() {
    if (bMapVisible) {
        setMapPosition();
    }
}
function ResizeComplete() {
    if (new Date() - rtime < delta) {
        setTimeout(ResizeComplete, delta);
    } else {
        timeout = false;
        redrawMap();
    }
}
$(window).resize(function () {
    if (iLastWindowWidth !== $(window).width()) {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(ResizeComplete, delta);
        }
    }
});