
const skillBtn = document.getElementById("skillBtn");
const educationBtn = document.getElementById("educationBtn");
const internshipBtn = document.getElementById("internshipBtn")

const skillSection = document.getElementById("skillSection");
const educationSection = document.getElementById("educationSection");
const internshipSection = document.getElementById("internshipSection")



educationBtn.addEventListener("click", function(e) {
    e.preventDefault();

    skillSection.style.display = "none";
    educationSection.style.display = "block";
    internshipSection.style.display = "none";
    educationSection.scrollIntoView({
        behavior: "smooth"
    });
});

skillBtn.addEventListener("click", function(e) {
    e.preventDefault();

    educationSection.style.display = "none";
    internshipSection.style.display = "none";
    skillSection.style.display = "block";

    skillSection.scrollIntoView({
        behavior: "smooth"
    });
});
internshipBtn.addEventListener("click", function(e){
    e.preventDefault();

    educationSection.style.display = "none";
    internshipSection.style.display = "block";
    skillSection.style.display = "none";

    
    internshipSection.scrollIntoView({
        behavior: "smooth"
    })
})

window.addEventListener("load", () => {
    
    // hide 
    skillSection.style.display = "none";
    educationSection.style.display = "none";
    internshipSection.style.display = "none";

    const hash = window.location.hash;

    if(hash === "#educationSection"){
        educationSection.style.display = "block";
    }
    else if(hash === "#internshipSection"){
        internshipSection.style.display = "block";
    }
    else{
        skillSection.style.display = "block";
    }
});
