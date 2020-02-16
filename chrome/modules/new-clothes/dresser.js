(function() {
	setInterval(function() {
	   if ($('#teacher-header-root header div button').length) {
		  $("#teacher-header-root header div button").appendTo("#sidebar-root nav");
	   }
	}, 100);


	//Select content template
	var site_url = document.location.href;
	if (site_url.includes("startpage")) { template_startpage(); }


	//$("#content_wrapper").prepend("<div id='deck-of-tools' class='d-flex flex-row'></div>");
	//$("#deck-of-tools").append("<div class='card card-tool' id='card-tool1'><div class='card-body'>Startsida</div></div>");
	//$("#deck-of-tools").append("<div class='card card-tool' id='card-tool1'><div class='card-body'>Närvaro</div></div>");

})();

//Startpage, start
function template_startpage() {
	$("#content_wrapper").prepend("<div id='deck-of-days' class='d-flex flex-row justify-content-between container-fluid'></div>");
	$("#deck-of-days").append("<div class='card col card-day' id='card-day1'><div class='card-header'>M&aring;ndag</div><div id='card-day1-list' class='list-group list-group-flush'></div></div>");
	$("#deck-of-days").append("<div class='card col card-day' id='card-day2'><div class='card-header'>Tisdag</div><div id='card-day2-list' class='list-group list-group-flush'></div></div>");
	$("#deck-of-days").append("<div class='card col card-day' id='card-day3'><div class='card-header'>Onsdag</div><div id='card-day3-list' class='list-group list-group-flush'></div></div>");
	$("#deck-of-days").append("<div class='card col card-day' id='card-day4'><div class='card-header'>Torsdag</div><div id='card-day4-list' class='list-group list-group-flush'></div></div>");
	$("#deck-of-days").append("<div class='card col card-day' id='card-day5'><div class='card-header'>Fredag</div><div id='card-day5-list' class='list-group list-group-flush'></div></div>");


	$("#tab0 > table > tbody > tr > td  table > tbody > tr > td.dayViewTopRight > a").each(function() {
		template_startpage_card_day_item("#card-day1-list", $(this).attr('href'), $(this).attr('title'))
	});

	$("#tab1 > table > tbody > tr > td  table > tbody > tr > td.dayViewTopRight > a").each(function() {
		template_startpage_card_day_item("#card-day2-list", $(this).attr('href'), $(this).attr('title'))
	});

	$("#tab2 > table > tbody > tr > td  table > tbody > tr > td.dayViewTopRight > a").each(function() {
		template_startpage_card_day_item("#card-day3-list", $(this).attr('href'), $(this).attr('title'))
	});

	$("#tab3 > table > tbody > tr > td  table > tbody > tr > td.dayViewTopRight > a").each(function() {
		template_startpage_card_day_item("#card-day4-list", $(this).attr('href'), $(this).attr('title'))
	});

	$("#tab4 > table > tbody > tr > td  table > tbody > tr > td.dayViewTopRight > a").each(function() {
		template_startpage_card_day_item("#card-day5-list", $(this).attr('href'), $(this).attr('title'))
	});
}

function template_startpage_card_day_item(list_id, attendance_href, event_string) {

	attendance_href = attendance_href.replace("schedule", "lesson_status");

	event_string = event_string.split("]");

	let event_substring1 = event_string[0].split(" ");
	
	let event_time = event_substring1[1];
	event_time = event_time.split("-");

	let event_name = event_substring1.slice(2);
	event_name = event_name.join(" ");

	let event_substring2 = event_string[1].split("<br />");
	let event_location = event_substring2[1].replace("Sal/resurs: ", "");
	let event_group  = event_substring2[2];

	console.log(event_group)

	if (event_group.search("Grupp") > -1) {
		event_group = event_group.replace("Grupp: ", "");
		event_group = event_group.split(" ");
		event_group = event_group[1];
	}
	else {
		event_group = "xx"
	}
	
	let event_group_code = event_group.slice(0,2)

	$(list_id).append("<a href='" + attendance_href + "' class='list-group-item card-day-list-item'>\
		<ul class='card-day-list-body d-flex flex-row'> \
		<li class='card-day-list-time'>" + event_time[0] + "<br/>" + event_time[1] + "</li> \
		<li class='card-day-list-name flex-fill'>" + event_name + "<br/>" + event_location + "</li> \
		<li class='card-day-list-group card-day-list-group-" + event_group_code.toLowerCase() + "'>" + event_group + "</li> \
		</ul></a>");
}

//Startpage, end