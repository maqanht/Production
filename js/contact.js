var sGoogleMapScript = "https://www.google.com/maps/embed/v1/place?key=AIzaSyAmjD81Lsw8gUkA-9q6mJG7EotQgaSke74"
, oMapAddress = ["MAQ Software Redmond WA", "MAQ Software Andheri", "MAQ Software Hyderabad India"]
, sCurrentCity
, sLocation;

function contactConstructor() {
    $(".VwMap").click(function () {
        sCurrentCity = $(this).attr("data-name");
        switch (sCurrentCity) {
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
                sCurrentCity = "Redmond";
                iIndex = 0;
                break;
        }
        sLocation = sGoogleMapScript + "&q=" + oMapAddress[iIndex];
        $('#map').attr('src', sLocation);
        var iAddressSectionTopPosition, sScrollElement = "body,html";
        iAddressSectionTopPosition = $(".map").offset().top;
        iAddressSectionTopPosition -= 65; // -65px for header/padding
        $(sScrollElement).animate({ scrollTop: iAddressSectionTopPosition }, 500);
    });
}