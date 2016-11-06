'use strict';

// Registra el componente con su plantilla y su controlador
angular.
  module('mesasListado').
  component('mesasListado', {
    templateUrl: 'views/mesas-listado/mesas-listado.template.html',
    controller: function MesasListadoController(Mesa) {
      var self = this;
      self.orderProp = 'age';

      /*$http.get('api/phones').then(function(response) {
        self.phones = response.data;
      });
	  */
	  self.mesas = Mesa.getAll({}, function(mesas) {
          //self.setImage(phone.images[0].img);
        }); 
    }
  });
