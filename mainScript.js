$( document ).ready(function() {
    main();
});

function initalization () {
    $(".hideMe").hide();
}

function btnInitialization () {
    /*Pain Team Buttons Initialization*/
    carouselBtnsInitHelper(".painTeamBtns", ".painTeamSections", "#btnNursePractitioner", "#sectionNursePractitioner");
    carouselBtnsInitHelper(".painTeamBtns", ".painTeamSections", "#btnPhysioTherapist", "#sectionPhysiotherapist");
    carouselBtnsInitHelper(".painTeamBtns", ".painTeamSections", "#btnPsychologist", "#sectionPsychologist");
    
    /*Strategies Buttons Initialization*/
    carouselBtnsInitHelper(".strategiesBtns", ".strategiesSections", "#btnExercise", "#sectionExercise");
    carouselBtnsInitHelper(".strategiesBtns", ".strategiesSections", "#btnRelaxation", "#sectionRelaxation");
    carouselBtnsInitHelper(".strategiesBtns", ".strategiesSections", "#btnHydration", "#sectionHydration");
    
    /*Mobile Nav Buttons Initialization*/
    mobileNavBtnsInitHelper("#mobileNavUpBtn", "#mobileNavDownBtn");
    mobileNavBtnsInitHelper("#mobileNavDownBtn", "#mobileNavUpBtn");
}

function carouselBtnsInitHelper (btnClassName, sectionClassName, btnName, sectionName) {
    console.log("carouselBtnsInitHelper has triggered");
    console.log($(btnName));
    $(btnName).click(function() {
       if ($(btnName).hasClass("unselectedIcons") == true) {
           $(btnClassName).removeClass("selectedIcon").addClass("unselectedIcons");
           $(btnName).removeClass('unselectedIcons').addClass('selectedIcon');
           $(sectionClassName).not(sectionName).hide();
           $(sectionName).show();
           console.log("its working!");
       } 
    });
}

function mobileNavBtnsInitHelper (btnIdName, btnToShow) {
    $(btnIdName).click(function() {
       if ($(btnIdName).hasClass("showMe") == true) {
           $(btnIdName).removeClass("showMe").addClass("hideMe");
           $(btnToShow).removeClass('hideMe').addClass('showMe');
           $(btnIdName).hide();
           $(btnToShow).show();
           console.log("its working (nav)!");
       } 
    });
    if (btnIdName == "#mobileNavDownBtn") {
        $("#mobileNavDownBtn").click(function() {
            $(".mainBtn").show();
        }); 
    }
    if (btnIdName == "#mobileNavUpBtn") {
        $("#mobileNavUpBtn").click(function() {
            $(".mainBtn").hide();
        }); 
    }
}

function navScrollInitialization () {
    navScrollInitHelper("#navBackToTop", "#rowWhoControl");
    navScrollInitHelper("#navPainClinics", "#rowPainClinics");
    navScrollInitHelper("#navFindClinics", "#rowFindClinics");
    navScrollInitHelper("#navSkillsToCope", "#rowSkills");
    navScrollInitHelper("#navOtherTools", "#rowOtherTools");
    navScrollInitHelper("#navContactUs", "#rowContacts");
}

function navScrollInitHelper (btnId, scrollToId) {
    $(btnId).click(function() {
        $('html, body').animate({
            scrollTop: $(scrollToId).offset().top
        }, 800);
    });
}


function main () {
    console.log("Hello World: Version 0.21");
    initalization();
    btnInitialization();
    navScrollInitialization();
    // resizeInitialization();
}


console.log("not sure if this keyboard can suffice");