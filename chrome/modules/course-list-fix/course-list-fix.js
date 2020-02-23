



/* code to course */

var code_to_course = [
  ["DAODAC0","Dator- och n&auml;tverksteknik"],
  ["DAODAT01a","Datorteknik 1a"],
  ["DAODIG0","Digital kommunikationsteknik"],
  ["ELEELR0","Elektronik och mikrodatorteknik"],
  ["ELRELK0","Elektromekanik"],
  ["ENGENG05","Engelska 5"],
  ["IDRIDR01","Idrott och H&auml;lsa 1"],
  ["MATMAT01a","Matematik 1a"],
  ["SVESVE01","Svenska 1"],
  ["DAODAT0","Datorsamordning och support"],
  ["ENEENE01","Energiteknik"],
  ["ENGENG06","Engelska 6"],
  ["ENTENR0","Entrepen&ouml;rskap"],
  ["GYAREE","Gymnasiearbete"],
  ["HISHIS01a1","Historia 1a1"],
  ["INSKOM01","Kommunikationsn&auml;t"],
  ["MEKMEK01","Mekatronik 1"],
  ["NAINAE0","N&auml;tverkss&auml;kerhet"],
  ["NAINAK0","N&auml;tverksteknologier"],
  ["NAINAR0","N&auml;tverksteknik"],
  ["NAINAV0","N&auml;tverksadministration"],
  ["NAKNAK01a1","Naturkunskap 1a1"],
  ["PRRPRR01","Programmering 1"],
  ["RELREL01","Religion 1"],
  ["SAMSAM01a1","Samh&auml;llskunkap 1a1"],
];

var course_to_year = {
  "EE19":[["DAODAC0","DAODAT01a","DAODIG0","ELEELR0","ELRELK0","ENGENG05","IDRIDR01","ENEENE01"],
          ["ENGENG06","ENTENR0","HISHIS01a1","INSKOM01","NAINAK0","NAINAE0","NAINAR0","PRRPRR01"],
          ["GYAREE","NAKNAK01a1","RELREL01","SAMSAM01a1"]],
  "EE18":[[],
          [],
          []],
  "EE17":[["ENGENG05",	"IDRIDR01",	"MATMAT01a",	"SVESVE01",	"DAODAT01a",	"ELRELK0",	"DAODAC0",	"ELEELR0",	"DAODIG0"],
          ["ENEENE01",	"MEKMEK01",	"INSKOM01",	"NAINAR0",	"ENGENG06",	"ENTENR0",	"NAINAK0"],
          ["SAMSAM01a1",	"GYAREE",	"HISHIS01a1",	"NAKNAK01a1",	"RELREL01",	"DAODAT0",	"NAINAE0",	"NAINAV0",	"TIATIL00S"]],
  "TE19":[[],
          [],
          []],
  "TE18":[[],
          [],
          []],
  "TE17":[[],
          [],
          []],
  "ES19":[[],
          [],
          []],
  "ES18":[[],
          [],
          []],
  "ES17":[[],
          [],
          []],
  "HA19":[[],
          [],
          []],
  "HA18":[[],
          [],
          []],
  "HA17":[[],
          [],
          []]
};


/* Translator */


//Teachers View

let class_name = $("#student_chosen > a > span").text().substring(0, 4);

$("#full2.full > table > tbody > tr.longlistheader td").each(function(){
    $(this).replaceWith("<th>"+ $(this).text() +"</th>");
});
$("#full2.full > table > tbody > tr.longlistheader").prepend("<th></th>");

$("#full2.full > table").attr('id', 'course_table');

$("#full2.full > table > tbody > tr > td.longlistheader").each(function(){
    let course_code = $(this).text();
    let course_object = code_to_course.filter(function (course) { return course[0]== course_code});
    if (course_object[0][0]) {
        $(this).empty();
        $(this).html(course_object[0][1]);
        $(this).parent().prepend("<td class='value'>" + get_year(class_name, course_object[0][0]) + "</td>");
    }
});

//Student View
$("#contAll_content > table > tbody > tr > td > a > b").each(function(){
    let course_code = $(this).text();
    let course_object = code_to_course.filter(function (course) { return course[0] == course_code});
    if (course_object[0][0]) {
        $(this).empty();
        $(this).html(course_object[0][1]);
    }
});



sort_table();


function get_year(class_name, course_code) {
  let found_year = 0;
    if(course_to_year[class_name][0].indexOf(course_code) != -1) { found_year = 1 };
    if(course_to_year[class_name][1].indexOf(course_code) != -1) { found_year = 2 };
    if(course_to_year[class_name][2].indexOf(course_code) != -1) { found_year = 3 };
  return found_year;
};


function sort_table() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("course_table");
    switching = true;
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[0];
        y = rows[i + 1].getElementsByTagName("TD")[0];
        // Check if the two rows should switch place:
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // If so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }
  