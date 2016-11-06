//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
// Define the `Menu de inicio` module
//---------------------------------------------------------//
//---------------------------------------------------------//
//---------------------------------------------------------//
angular.module('productoDetalle')
	.component('productoDetalle', {
	templateUrl: 'productos/producto-detalle.template.html',
    controller: function ProductoDetalleController($scope, $routeParams, $location) {
        var auxTxt = 'Detalle de productos'
        alert('Entro en ' + auxTxt);
        $scope.texto = auxTxt;

        this.verDetalle = function () {
            $location.path('/productoDetalle');
        }
        this.volver = function () {
            $location.path('/inicio');
        }

    }
    });
        
