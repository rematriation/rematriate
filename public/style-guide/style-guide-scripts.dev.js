"use strict";

var html_root = document.getElementsByTagName('html')[0];
var light_input = document.getElementById('light__theme');
var dark_input = document.getElementById('dark__theme');
var h1_title = document.getElementById('h1_title'); //the alert is collapsible yay

$(".alert").on("click", function () {
  $(this).hide("slow");
});
$("html").css("background", "#ffe9d7");
$("body").css("background", "#ffe9d7");
$("main").css("background", "#ffe9d7");
$("main").css("color", "#c51350");
$("#h1_title").css("color", "#c51350"); //apprearance

$("input.variation").on("click", function () {
  if ($(this).val() == 2) {
    $("html").css("background", "#c51350");
    $("body").css("background", "#c51350");
    $("main").css("background", "#c51350");
    $("#h1_title").css("color", "#ffe9d7");
    $("main").css("color", "#ffe9d7");
    $("footer").attr('class', 'dark');
    h1_title.classList.remove("title_light_mode");
    h1_title.classList.add("title_dark_mode");
  } else if ($(this).val() == 1) {
    console.log($(this).val());
    $("html").css("background", "#ffe9d7");
    $("body").css("background", "#ffe9d7");
    $("main").css("background", "#ffe9d7");
    $("main").css("color", "#c51350");
    $("#h1_title").css("color", "#c51350");
    $("html").attr('id', 'light_theme');
    $("footer").attr('class', '');
  }
});