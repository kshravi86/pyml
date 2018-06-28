'use strict';

function jsonp_callback(data) {
    // returning from async callbacks is (generally) meaningless
    console.log(data.found);
}


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives','ajoslin.mobile-navigate','ngMobile', 'ngLoadScript'])
    .config(function ($compileProvider){
        $compileProvider.urlSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
    })
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'partials/homeView.html', controller: 'HomeCtrl'});
        $routeProvider.when('/view1', {templateUrl: 'partials/kmeans.html'});
        $routeProvider.when('/view2', {templateUrl: 'partials/linear_regression.html'});
        $routeProvider.when('/view3', {templateUrl: 'partials/helloworld.html'});
        $routeProvider.when('/view4', {templateUrl: 'partials/basic_operations.html'});
        $routeProvider.when('/view5', {templateUrl: 'partials/logistic_regression.html'});
        $routeProvider.when('/view6', {templateUrl: 'partials/BasicTensorFlow.html'});
        $routeProvider.when('/view7', {templateUrl: 'partials/ML for Beginners.html'});
        $routeProvider.when('/view8', {templateUrl: 'partials/random_forest.html'});
		$routeProvider.when('/view9',{templateUrl:'partials/0-welcome.html'});
       $routeProvider.when('/view10',{templateUrl:'partials/linear_svm.html'});
	   $routeProvider.when("/view11",{templateUrl:'partials/multiclass_svm.html'});
	   $routeProvider.when("/view12",{templateUrl:'partials/variables.html'});
	   $routeProvider.when("/view13",{templateUrl:'partials/neural_network.html'});
	   $routeProvider.when("/view14",{templateUrl:'partials/gradient_boosting_classifier.html'});
	   $routeProvider.when("/view15",{templateUrl:'partials/bayesian_regression.html'});
	   $routeProvider.when("/view16",{templateUrl:'partials/multilayer_perceptron.html'});
	   $routeProvider.when("/view17",{templateUrl:'partials/neuroevolution.html'});
	   $routeProvider.when("/view18",{templateUrl:'partials/convolutional_neural_network.html'});
	   $routeProvider.when("/view19",{templateUrl:'partials/dbscan.html'});
	  $routeProvider.when("/view20",{templateUrl:'partials/gaussian_mixture_model.html'});
	  $routeProvider.when("/view21",{templateUrl:'partials/k_means.html'});
	  $routeProvider.when("/view22",{templateUrl:'partials/perceptron.html'});
	  $routeProvider.when("/view23",{templateUrl:'partials/decision_tree_classifier.html'});
		$routeProvider.when("/view24",{templateUrl:'partials/principal_component_analysis.html'});
	 $routeProvider.when("/view25",{templateUrl:'partials/support_vector_machine.html'});
		$routeProvider.when("/view26",{templateUrl:'partials/random_forest3.html'});
		$routeProvider.when("/view27",{templateUrl:'partials/k_nearest_neighbors.html'});
		$routeProvider.when("/view28",{templateUrl:'partials/adaboost.html'});
		$routeProvider.when("/view29",{templateUrl:'partials/recurrent_neural_network.html'});
		$routeProvider.when("/view30",{templateUrl:'partials/particle_swarm_optimization.html'});
		$routeProvider.when("/view33",{templateUrl:'partials/logistic_regression1.html'});
		$routeProvider.when("/view34",{templateUrl:'partials/demo.html'});
		$routeProvider.when("/view35",{templateUrl:'partials/naive_bayes.html'});
		$routeProvider.when("/view36",{templateUrl:'partials/partitioning_around_medoids.html'});
	    $routeProvider.when("/view37",{templateUrl:'partials/restricted_boltzmann_machine.html'});
		$routeProvider.when("/view38",{templateUrl:'partials/multi_class_lda.html'});
		$routeProvider.when("/view39",{templateUrl:'partials/xgboost.html'});
		$routeProvider.when("/view40",{templateUrl:'partials/linear_regression1.html'});
		$routeProvider.when("/view41",{templateUrl:'partials/linear_discriminant_analysis.html'});
		$routeProvider.otherwise({redirectTo: '/'});
  }]);
  
  
  
myApp.directive('ngPrism', [function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            element.ready(function() {
                Prism.highlightElement(element[0]);
            });
        }
    }
}]);

