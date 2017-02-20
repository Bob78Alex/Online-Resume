var bio = {
"name": "Oleksii Babenko",
"role": "Project Engineer",
"contacts": {
"mobile": "416-879-0478",
"email": "bob78alex@gmail.com",
"github": "bob78alex",
"twitter": "@1Babenko",
"location": "North York, Ontario, Canada"
},
"welcomeMessage": "Where there is a will - there is a way",
"skills": ["PLC programming", "troubleshooting", "industrial automation", "integrated safety systems"],
"bioPic": "images/alex.jpg"
}

var education = {
    "schools": [{
        "name": "Civil Defence Academy of Ukraine",
        "location": "Kharkiv, Ukraine",
        "degree": "Masters",
        "major": "Automated Systems Integrated",
        "dates": "1997 - 2002",
        "url": "nuczu.edu.ua"
    }, {
        "name": "Zhytomyr School of Technology",
        "Location": "Zhytomyr, Ukraine",
        "degree": "Bachelor",
        "major": "Electrical Engineering Technology",
        "dates": "1994 - 1997",
        "url": "ztk.org.ua"
    }],
    "onlineCourses": [{
        "title": "JavaScript Programming",
        "school": "Coursera",
        "dates": 2016,
        "url": "coursera.com"
    }, {
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": 2016,
        "url": "udacity.com"
    }]
}
var work = {
    "jobs": [
    {
    "employer": "Resco Energy Inc.",
    "title": "Service technician",
    "dates": "January 2013 - April 2015",
    "location": "Toronto, Canada",
    "description": "Test, analyze, and repair photovoltaic inverters and monitoring (DAS) systems."
    },
    {"employer": "Power On Control Systems.",
    "title": "Field service technician ",
    "dates": "May 2016 - October 201 ",
    "location": "Toronto, Canada",
    "description": "PLC programming, SCADA, DATCOM monitoring."
     },
     {"employer": "QPA Solar Inc.",
    "title": "Project engineer",
    "dates": "October 2016 - Up to date",
    "location": "Toronto, Canada",
    "description": "Design and monitoring of commercial PV sites."
     }
     ]
    }
var projects = {
    "projects": [{
        "title": "Suzo-Happ",
        "dates": "June - July 2016",
        "description": "Installing of control panel, " +
        "safety circuits integration, program upgrade.",
        "images": ["images/suzohapp.jpg"]
    }, {
        "title": "Tractel",
        "dates": "July - September 2016",
        "description": "Design, assembling, testing, " +
        "programming of automated roof car.",
        "images":["images/roofcar.jpg"]
    }, {
        "title": "UTC Integrated Safety Upgrade",
        "dates": "May - October 2016",
        "description": "Safety control panel installing, "+
        "rewiring, testing, programming.",
        "images": ["images/UTC.jpg"]
    }]
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter)
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github)
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location)
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic)
var formattedWelcMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage)

$("#header").append(formattedName);
$("#header").append(formattedRole);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedPic);
$("#header").append(formattedWelcMsg);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formatedSkill = HTMLskills.replace("%data%", bio.skills[0]);
    $("#header").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[1]);
    $("#header").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[2]);
    $("#header").append(formatedSkill);
    formatedSkill = HTMLskills.replace("%data%", bio.skills[3]);
    $("#header").append(formatedSkill)
    }
   function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedWorkLocation);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedDescription);
  }
};
displayWork();


$(document).click(function(Loc){
    var x=Loc.pageX;
    var y=Loc.pageY;

    logClicks(x,y);
});

function inName(name){
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] +" "+name[1];
}
$("#header").append(internationalizeButton);

projects.display = function(){
    for (project in projects.projects){
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);
        if(projects.projects[project].images.length > 0){
            for (image in projects.projects[project].images){
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}
projects.display()
$("#mapDiv").append(googleMap);


    /*This is empty on purpose! Your code to build the resume will go here.
 */