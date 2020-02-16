



/* code to course */

var code_to_course = [
    {"code":"DAODAC0","name":"Dator- och n&auml;tverksteknik"},
    {"code":"DAODAT01a","name":"Datorteknik 1a"},
    {"code":"DAODIG0","name":"Digital kommunikationsteknik"},
];

/* Translator */

$("#full2.full > table > tbody > tr > td.longlistheader").each(function(){
    let course_code = $(this).text();
    let course_object = code_to_course.filter(function (course) { return course.code == course_code});
    if (course_object[0]) {
        $(this).empty();
        $(this).html(course_object[0].name);
    }
});

$("#contAll_content > table > tbody > tr > td > a > b").each(function(){
    let course_code = $(this).text();
    let course_object = code_to_course.filter(function (course) { return course.code == course_code});
    if (course_object[0]) {
        $(this).empty();
        $(this).html(course_object[0].name);
    }
});