// Jimmy Hickey
// 2019-01-14
// JavaScript for portfolio
// Mostly just clicking on list items

// Brackets freaks out with errors without the following line.
/*eslint-env browser*/


// Switch which content is shown on the left pane
// Turn off current element and turn on new one
function toggle_visbility(make_visible, currently_visible) {
	document.getElementById(currently_visible).style.display = "none";
	document.getElementById(make_visible).style.display = "initial";

	// Return id of content that is now visible
	return make_visible;
}


function toggle_italic(make_italic, currently_italic) {
	document.getElementById(currently_italic).style.fontStyle = "normal";
	document.getElementById(make_italic).style.fontStyle = "italic";

	// Return id of content that is now visible
	return make_italic;
}

var doc = window.document;
var currently_visible = "about";
var currently_italic = "option-about";

// about
var about = doc.getElementById("option-about")
about.onclick = function () {
	currently_visible = toggle_visbility("about", currently_visible);
	currently_italic = toggle_italic("option-about", currently_italic);
}

// resume
var resume = doc.getElementById("option-resume")
resume.onclick = function () {
	currently_visible = toggle_visbility("resume", currently_visible);
	currently_italic = toggle_italic("option-resume", currently_italic);

}

// projects
var projects = doc.getElementById("option-projects")
projects.onclick = function () {
	currently_visible = toggle_visbility("projects", currently_visible);
	currently_italic = toggle_italic("option-projects", currently_italic);
}

// contact
var contact = doc.getElementById("option-contact")
contact.onclick = function () {
	currently_visible = toggle_visbility("contact", currently_visible);
	currently_italic = toggle_italic("option-contact", currently_italic);
}