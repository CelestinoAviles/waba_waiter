//---------------------------------------------------------//
// Define the 'phonecatApp module
//---------------------------------------------------------//

var app = angular.module('wabaw', ['ngRoute']); 

function mainController($scope, $http) {  
    alert('111');
};


/*
angular.module('menuRutas', ['ngAnimate','ngRoute', 'menuInicio'])
		.config(['$locationProvider' ,'$routeProvider',
			function config($locationProvider, $routeProvider) {
			  $locationProvider.hashPrefix('!');

			  $routeProvider.
				when('/inicio', {
				  template: '<menu-inicio></menu-inicio>'
				}).
				when('/mesasListado', {
				  template: '<mesas-listado></mesas-listado>'
				}).
				when('/opiniones', {
				  template: '<phone-list-edit></phone-list-edit>'
				}).
				when('/mesas/:mesaId', {
				  template: '<phone-nuevo></phone-nuevo>'
				}).
				when('/phonesMenu', {
				  template: '<phone-menu></phone-menu>'
				}).
				otherwise('/inicio');
			}
		  ]);

*/
/*

		//-------------------------------------------------------//
		// Define el modulo de inicio
		//-------------------------------------------------------//
		angular.module('menuInicio', ['ngRoute'])
		.component('mesasListado', {
			templateUrl: 'mesas000.template.html',
			controller:  function MesasListadoController(Opc, $routeParams, $location) {
				var self = this;
                alert('Mesas');

//                this.verPantalla001 = function () {
//                    $location.path('/mesaslistado')
//                }

            }
			
        });
*/