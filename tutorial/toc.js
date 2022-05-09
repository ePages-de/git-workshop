
function setActiveSection(sectionCount) {
  currentSection = sectionCount;
  
  var sectionLinks = document.querySelectorAll("#toc div.sectionLink");
  for (i = 0; i < sectionLinks.length; i++) {
    var sectionLink = sectionLinks[i];
    if (i <= sectionCount) {
      sectionLink.classList.add("visited");
    } else {
      sectionLink.classList.remove("visited");
    }
    if (i === sectionCount) {
      sectionLink.classList.add("current");
    } else {
      sectionLink.classList.remove("current");
    }
  }
  
  var sections = document.querySelectorAll("#content div.section");
  for (i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (i === sectionCount) {
      section.classList.add("current");
    } else {
      section.classList.remove("current");
    }
  }
  
  location.hash = "#section-" + sectionCount;
  
  var backButton = document.querySelector("button.goToPreviousSection");
  if (sectionCount == 0) {
    backButton.style.display = "none";
  } else {
    backButton.style.display = "block";
  }
  
  var continueButton = document.querySelector("button.goToNextSection");
  var finishButton = document.getElementById("finish");
  if (sectionCount == sectionLinks.length - 1) {
    finishButton.style.display = "block";
    continueButton.style.display = "none";
  } else {
    finishButton.style.display = "none";
    continueButton.style.display = "block";
  }
  
  var startButton = document.getElementById("start");
  if (sectionCount == 0) {
    startButton.style.display = "block";
    continueButton.style.display = "none";
  } else {
    startButton.style.display = "none";
  }
}

function goToPreviousSection() {
  if (currentSection > 0) {
    currentSection--;
    setActiveSection(currentSection);
  }
}

function goToNextSection() {
  var numberOfSections = document.querySelectorAll("#toc div.sectionLink").length;
  if (currentSection < numberOfSections) {
    currentSection++;
    setActiveSection(currentSection);
  }
}

// https://stackoverflow.com/a/14794066/2339010
function isInt(value) {
  if (isNaN(value)) {
    return false;
  }
  var x = parseFloat(value);
  return (x | 0) === x;
}

function init() {
  var fullUrl = window.location.href;
  var splitUrl = fullUrl.split("#section-");
  if (splitUrl.length === 2 && isInt(splitUrl[1])) {
    currentSection = parseFloat(splitUrl[1]);
    setActiveSection(currentSection);
  } else {
    if (currentSection === null) {
      setActiveSection(0);
    }
  }
}

var currentSection = null;
init();
