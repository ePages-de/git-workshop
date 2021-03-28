
function setActiveSection(sectionCount) {

  currentSection = sectionCount;
  
  var sectionLinks = document.querySelectorAll("#toc div.sectionLink");
  for (i = 0; i < sectionLinks.length; i++) {
    var sectionLink = sectionLinks[i];
    if (i + 1 <= sectionCount) {
      sectionLink.classList.add("visited");
    } else {
      sectionLink.classList.remove("visited");
    }
    if (i + 1 === sectionCount) {
      sectionLink.classList.add("current");
    } else {
      sectionLink.classList.remove("current");
    }
  }
  
  var sections = document.querySelectorAll("#content div.section");
  for (i = 0; i < sections.length; i++) {
    var section = sections[i];
    if (i + 1 === sectionCount) {
      section.classList.add("current");
    } else {
      section.classList.remove("current");
    }
  }
  
  location.hash = "#section-" + sectionCount;
  
  var backButton = document.querySelector("button.goToPreviousSection");
  if (sectionCount == 1) {
    backButton.setAttribute("disabled", "");
  } else {
    backButton.removeAttribute("disabled");
  }
  
  var continueButton = document.querySelector("button.goToNextSection");
  if (sectionCount == sectionLinks.length) {
    continueButton.setAttribute("disabled", "");
  } else {
    continueButton.removeAttribute("disabled");
  }
}

function goToPreviousSection() {
  if (currentSection > 1) {
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

var currentSection = 1;

setActiveSection(currentSection);
