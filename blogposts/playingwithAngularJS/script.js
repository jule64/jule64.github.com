
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


    $scope.introText = '<br>Alright not much to see here except this rather simplistic UI.  The cool thing is this page is 100% generated '
        +'using <a target="_blank" href="https://angularjs.org/">AngularJS</a>.  I used an existing example that you can find <a target="_blank" href="http://tutorialzine.com/2013/08/learn-angularjs-5-examples/">here</a>'
        +' and I added a few other stuff like the NgSanitise library to display the html content of this introduction text properly (even though the text is saved as a plain string in my script.js file.) '
        +'<br>I am really excited by AngularJS.  My first steps with Angular were not easy (I am also new to JavaScript which didnt help) but I '
        +'am now ready to move to playing with partial views, adding services such as <a target="_blank" href="https://www.firebase.com/">Firebase</a>'
        +' and other JavaScript technologies like Grunt (a build tool)';

}]);

//my_module.controller("TestController",['$scope',function($scope){
//
//
//
//}]);

