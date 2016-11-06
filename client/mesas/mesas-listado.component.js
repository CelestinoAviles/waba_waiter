		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		// Define the `Menu de inicio` module
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		angular.module('mesasListado')
		.component('mesasListado', {
			templateUrl: 'mesas/mesas-listado.template.html',
			controller: function MesasListadoController($scope, $routeParams, $location) {
                var auxTxt = 'Listado de '
                alert('Entro en ' + auxTxt);
                $scope.texto = auxTxt;

                this.volver = function () {
                    $location.path('/mesas');
                }

            }
                
			});
        
