		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		// Define the `Menu de inicio` module
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		//---------------------------------------------------------//
		angular.module('opinionesListado')
		.component('opinionesListado', {
			templateUrl: 'opiniones/opiniones-listado.template.html',
			controller: function OpinionesListadoController($scope, $routeParams, $location) {
                var auxTxt = 'Listado de Opiniones'
                alert('Entro en ' + auxTxt);
                $scope.texto = auxTxt;

                this.volver = function () {
                    $location.path('/mesasListado');
                }

            }
                
			});
        
