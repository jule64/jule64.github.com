
angular.module("my_module",['ngSanitize'])

.controller("OrderFormController",['$scope','$sce',function($scope,$sce){

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


    $scope.introText = '<br>Alright this UI on the left doesnt seem much but the cool thing is it was generated entirely '
        +'using <a target="_blank" href="https://angularjs.org/">AngularJS</a>.  I used an existing example that you can find <a target="_blank" href="http://tutorialzine.com/2013/08/learn-angularjs-5-examples/">here</a>'
        +' and I added a few other stuff like the NgSanitise library to display the html content of this introduction text properly (even though the text is saved as a plain string in my script.js file.) '
        +'<br>AngularJS is quite an exciting technology and even though it took me some time to initially "get it" (I am also new to JavaScript which didnt help) I '
        +'am now ready to start playing with partial views, custom directives, services such as <a target="_blank" href="https://www.firebase.com/">Firebase</a>'
        +' and add other JavaScript technologies like Grunt to my workflow (Oh I forgot to mention I have also used Bower to manage the dependencies in this page)';
}]);

//my_module.controller("TestController",['$scope',function($scope){
//
//
//
//}]);

