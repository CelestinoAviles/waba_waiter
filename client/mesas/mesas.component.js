		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		// Define the `Menu de inicio` module
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		angular.module('mesas')
		.component('mesas', {
			templateUrl: 'mesas/mesas.template.html',
			controller: function MesasController($scope, $routeParams, $location) {
                var auxTxt = 'Mesas'
                alert('Entro en ' + auxTxt);
                $scope.texto = auxTxt;

            }
                
			});
        
