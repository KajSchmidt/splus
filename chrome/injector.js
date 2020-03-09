(function() {

    
    var site_url = document.location.href;



	if (site_url.includes("student_ability")) { 
        $("body").append("<script language='Javascript' type='text/javascript' src='" + chrome.runtime.getURL("modules/course-list-fix/course-list-fix.js") + "'></script>");
    }

    if (true) { 
        $("body").append("<link rel='stylesheet' type='text/css' href='" + chrome.runtime.getURL("modules/re-dress/re-dress.css") + "'>");
        $("body").append("<script language='Javascript' type='text/javascript' src='" + chrome.runtime.getURL("modules/re-dress/re-dress.js") + "'></script>");
    }
    
})();