
$(function() {
	"use strict";

//new PerfectScrollbar(".height-1");



$(".btn-filter-mobile").on("click", function() {
	$(".filter-column").removeClass("d-none d-xl-block"),
	$(".filter-column").addClass("filter-sidebar-mobile")
	//$(".page-content").addClass("filter-overlay")
})


$(".filter-close").on("click", function() {
	$(".filter-column").addClass("d-none d-xl-block"),
	$(".filter-column").removeClass("filter-sidebar-mobile")
})



});