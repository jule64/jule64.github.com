function OrderFormController($scope){

	// Define the model properties. The view will loop
	// through the services array and generate a li
	// element for every one of its items.

	$scope.services = [
		{
			name: 'Web Development',
			price: 300,
			active:true
		},{
			name: 'Design',
			price: 400,
			active:false
		},{
			name: 'Integration',
			price: 250,
			active:false
		},{
			name: 'Training',
			price: 220,
			active:false
		}
	];

	$scope.toggleActive = function(s){
		s.active = !s.active;
	};

	// Helper method for calculating the total price

	$scope.total = function(){

		var total = 0;

		// Use the angular forEach helper method to
		// loop through the services array:

		angular.forEach($scope.services, function(s){
			if (s.active){
				total+= s.price;
			}
		});

		return total;
	};
}


function TestController($scope){
	
	$scope.introText = 'This is an example page built using AngularJS.  This example comes from <a target="_blank" href="http://tutorialzine.com/2013/08/learn-angularjs-5-examples/">this blog</a> (see example 3: Order Form)<br>If you look in the source of my page, towards the top you will find a tag called script that contains the link to the angular.min.js script. This is all you need to run an AngularJS-enabled page.<br>I am quite excited by this technology as it allows to build really clean, expressive and well organised web pages.  It also allows to create partials easily (it is a technique that lets you refresh portions of a page rather than refreshing the entire page).  Pretty cool.<br>I will continue to explore this technology with the aim of converting all of my blog to Angular and will also attempt to integrate other Angular friendly services such as <a target="_blank" href="https://www.firebase.com/">Firebase</a>';
	
}

