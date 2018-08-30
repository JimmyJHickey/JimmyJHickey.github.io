/*eslint-env browser*/

var found_objects_map = {
	"monitor": 0,
	"officeHours": 0,
	"mudacSign": 0,
	"icots": 0,
	"seattle": 0
};

function counter_update() {
	var sum = 0;
	for (var key in found_objects_map) {
		sum += found_objects_map[key];
	}
	document.getElementById("first-digit").innerHTML = sum;
	
	if (sum == 5){
		document.getElementById("verdict_button").style.visibility = "visible";
	}
	
}

var currently_visible = "instructions";

function toggle_visbility(make_visible, currently_visible) {
	document.getElementById(currently_visible).style.display = "none";
	document.getElementById(make_visible).style.display = "initial";
	if (make_visible in found_objects_map){
		found_objects_map[make_visible]=1;
	}
	counter_update();
	document.getElementById("myleftcol").scrollTop = 0;
	return make_visible;
}


// Load SVG and set up on click listeners
// click elements of picture to toggle text
window.onload=function() {
	var silas_svg_doc = window.document.getElementById("silas_svg").contentDocument;
	
	var currently_visible = "instructions"
	
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

