Date.prototype.format = function () {
    "use strict";
    var arrMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        sValue = arrMonths[this.getMonth()] + ' ' + this.getDate() + ', ' + this.getFullYear();
    return sValue;
};

function getParameterByName(name) {
    "use strict";
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.href);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function isCareersPage() {
    if ($('#careers').length) {
        return true;
    }
    return false;
}