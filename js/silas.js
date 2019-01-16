// Jimmy Hickey
// 2018-08-31
// JavaScript for Silas review page
// Mostly deals with clicking elements on SVG image and changing content accordingly

// Brackets freaks out with errors without the following line.
/*eslint-env browser*/



// All objects in SVG that can be clicked
var found_objects_map = {
	"monitor": 0,
	"officeHours": 0,
	"mudacSign": 0,
	"icots": 0,
	"seattle": 0
};

// Number of objects that can be clicked in SVG
var NUM_SVGOBJECTS = 5;

// When an object is found, update it's value to 1 and upate the counter on the page
// When all of the objects are found, show the Verdict button
function counter_update() {
	var sum = 0;
	for (var key in found_objects_map) {
		sum += found_objects_map[key];
	}
	document.getElementById("first-digit").innerHTML = sum;
	
	if (sum == NUM_SVGOBJECTS){
		document.getElementById("verdict_button").style.visibility = "visible";
	}
	
}

// What content is currently visible in the left pane
// Will be changed as buttons are clicked, making different content visible
var currently_visible = "instructions";


// Switch which content is shown on the left pane
// Turn off current element and turn on new one
function toggle_visbility(make_visible, currently_visible) {
	document.getElementById(currently_visible).style.display = "none";
	document.getElementById(make_visible).style.display = "initial";
	
	// Update counter
	if (make_visible in found_objects_map){
		found_objects_map[make_visible]=1;
	}
	counter_update();
	
	// Set left pane scroll bar to top
	document.getElementById("myleftcol").scrollTop = 0;
	
	// Return id of content that is now visible
	return make_visible;
}


// Load SVG and set up on click actions
// click elements of picture to toggle text
// waits until the page loads to load functions to ensure all components of SVG has loaded
window.onload=function() {
	
	// Get content out of SVG
	var silas_svg_doc = window.document.getElementById("silas_svg").contentDocument;
	
	
	// When an element is clicked, removed the current content and display the new content
	// Update what content is currently visible
	var monitor = silas_svg_doc.getElementById('monitor');
	monitor.onclick = function () {
		currently_visible = toggle_visbility("monitor", currently_visible);
	};
	
	var officeHours = silas_svg_doc.getElementById('Office_Hours');
	officeHours.onclick = function () {
		currently_visible = toggle_visbility("officeHours", currently_visible);
	};
	
	var mudacSign = silas_svg_doc.getElementById('MUDAC_sign');
	mudacSign.onclick = function () {
		currently_visible = toggle_visbility("mudacSign", currently_visible);
	};
	
	var icots = silas_svg_doc.getElementById('icots');
	icots.onclick = function () {
		currently_visible = toggle_visbility("icots", currently_visible);
	};
	
	var seattle = silas_svg_doc.getElementById('Seattle_skyline');
	seattle.onclick = function () {
		currently_visible = toggle_visbility("seattle", currently_visible);
	};
		
	var silas = silas_svg_doc.getElementById('Silas');
	silas.onclick = function () {
		currently_visible = toggle_visbility("instructions", currently_visible);
	};
	
	var verdict = document.getElementById('verdict_button');
		verdict.onclick = function () {
		currently_visible = toggle_visbility("verdict", currently_visible);
	};
};

