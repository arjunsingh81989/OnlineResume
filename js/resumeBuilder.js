
var projects = {
	"projects": [
		{
			"title": "Neighborhood Map",
			"description": "Using knockout Javascript framework and MVVM design pattern, developed an application with a search functionality to easily discover popular places. Researched and implemented third-party APIs — Yelp reviews, StreetView images — that provided additional information about locations.",
			"technologies":"Knockout Javascript Framework, Bootstrap, jQuery",
			"github": "https://github.com/arjunsingh81989/NeighborhoodMap",
			"live": "https://www.arjunsingh8.com/MyProjects/NeighborhoodMap/",
			"completionScore": 100
		},
		{
			"title": "Arcade Game",
			"description": "Using Javascript’s pseudoclassical patterns, adapted the classic arcade game “Frogger”",
			"technologies": "Javascript, HTML5 Canvas",
			"github": "https://github.com/arjunsingh81989/ArcadeGame",
			"live": "https://www.arjunsingh8.com/MyProjects/ArcadeGame/",
			"completionScore": 100
		},
		
			{
			"title": "Online Resume",
			"description": "Using Bootstrap’s HTML, CSS and Javascript framework, built a responsive website to showcase my portfolio of projects.",
			"technologies": "Bootstap, Javascript, HTML, CSS",
			"github": "https://github.com/arjunsingh81989/OnlineResume",
			"live": "https://www.arjunsingh8.com/MyProjects/OnlineResume/",
			"completionScore": 100
		},
		
		{
			"title": "Website Optimization",
			"description": "Successfully optimized websites with a number of optimization and performance related issues by achieving a PageSpeed score of 90+ and running animations at 60 frames per second.",
			"technologies": "Grunt Javascript Task Runner, Javascript, Google Chrome’s Timeline Dev Tool",
			"github": "https://github.com/arjunsingh81989/WebsiteOptimization",
			"completionScore": 100
		},
		{
			"title": "Feed Reader Testing",
			"description": "Using Jasmine Javascript testing framework and “test-driven development” approach, wrote suites of tests that tested the underlying business logic, event handling and DOM manipulation of a web application thats reads RSS feeds.",
			"technologies": "Jasmine JS testing framework, Javascript.",
			"github": "https://github.com/arjunsingh81989/FeedReaderTesting",
			"completionScore": 100
		},
		
		
	
		{
			"title": "RateMyLunch Android Application",
			"description": "Tested moBack's mobile Backend-as-a-Service platform for Android and developed a restaurant rating application for company's lunches",
			"technologies": "Android, moBack'S Android SDK",
			"live": "https://play.google.com/store/apps/details?id=myapp.ratemylunch&hl=en",
			"completionScore": 100
		}
	
	
	],
	
	display: function()
	{
		for (var project in projects.projects){

			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append('<div id="div' + project + '"></div>')
										.append(HTMLprojectTitle.replace("%data%", projects.projects[project]["title"]))
										
				
					.append(HTMLprojectTechnologies.replace("%data%", projects.projects[project]["technologies"]))
				
				
				.append(HTMLprojectDescription.replace("%data%", projects.projects[project]["description"]));
	
			if (projects.projects[project]["live"] != undefined )
				$(".project-entry:last").append(HTMLprojectLive.replace("#", projects.projects[project]["live"]));
			if (projects.projects[project]["github"] != undefined )
				$(".project-entry:last").append(HTMLprojectGithub.replace("#", projects.projects[project]["github"]));
		

			projects.circleAnimationForProject('div' + project, projects.projects[project]["completionScore"]);

	}
}

};


projects.circleAnimationForProject = function(element, completionScore) {

	var element = document.getElementById(element);
	element.style.width= "150px";
	element.style.height= "150px";
	element.style.position="relative";
	element.style.margin="0 auto";
	element.style.marginBottom= "4%";
	
  var bar = new ProgressBar.Circle(element, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#6AA121', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
	  
    if (completionScore === 0) {
      circle.setText('');
    } else {
      circle.setText(completionScore+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0
};
 

var work = {
	"jobs":[
		{
			"employer": "moBack",
			"title": "Software Engineering Intern",
			"location": "Sunnyvale, CA",
			"dates": "April 2015 - June 2015",
			"description": "<li><p>Tested moBack’s newly developed Android Software Development Kit.</p></li> <li><p>Developed an Android application RateMyLunch that allows employees to rate restaurants for company’s lunches. Employees are able to create groups, add restaurants, post comments for their restaurants and send admission requests to administrators of other groups. Also, members of a group are informed about their group related activities through push notifications. This application is integrated with Yelp and was developed using moBack’s Android SDK.</p></li>"
		}

	],
	
	display: function()
	{
		for (var job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[job]["title"]))
								.append(HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]))
								.append(HTMLworkLocation.replace("%data%", work.jobs[job]["location"]))
								.append(HTMLworkDates.replace("%data%", work.jobs[job]["dates"]))
								.append(HTMLworkDescription.replace("%data%", work.jobs[job]["description"]));
	}
	}
	
};



var bio = {
	"first name": "Arjun",
	"last name": "Singh",
	"role": "Web Developer",
	
	"contacts": 
		{
			"location": "San Jose, CA"
		}

};

bio.display = function(){
	var formattedFName = HTMLheaderFName.replace("%data%", bio["first name"]);
	var formattedLName = HTMLheaderLName.replace("%data%", bio["last name"]);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role.toUpperCase());

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedLName);
	$("#header").prepend(formattedFName);	
	
}

var education = {
	"schools": [
		{
			"name": "Santa Clara Univeristy",
			"location": "Santa Clara, California",
			"degree": "Masters",
			"majors": ["Pursuing Masters of Science in Computer Science"],
			"dates": "Sepetember 2016 - June 2018",
			"url": "http://scu.edu"
		},
		
		{
			"name": "Iowa State University",
			"location": "Ames, Iowa",
			"degree": "Bachelor",
			"majors": ["Bachelor in Computer Science"],
			"dates": "January 2010 - December 2014",
			"url": "http://www.iastate.edu/"
		}
		
	]
};
education.display = function(){
	for (var school in education.schools){	
		$("#education").append(HTMLschoolStart);
	$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school]["name"]).replace("#", education.schools[school]["url"])).append(HTMLschoolLocation.replace("%data%", education.schools[school]["location"])).append(HTMLschoolDates.replace("%data%", education.schools[school]["dates"]))
	for(var major in education.schools[school].majors){
			$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school]["majors"][major]));
		}
	}

}
$("#mapDiv").append(googleMap);


bio.display();
work.display();
projects.display();
education.display();






