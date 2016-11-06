// Defino las rutas en el fichero de configuración

'use strict';
angular.
  module('wabat').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/mesas', {
          template: '<mesas-listado></mesas-listado>'
        }).
        when('/inicio', {
          template: '<inicio></inicio>'
        }).
        when('/entidad1', {
          template: '<entidad1></entidad1>'
        }).
        when('/entidad2', {
          template: '<entidad2></entidad2>'
        }).
        when('/mesas', {
          template: '<mesas></mesas>'
        }).
        when('/mesas/$', {
          template: '<mesas-detalle-camarero></mesas-detalle-camarero>'
        }).
        when('/mesasListado', {
          template: '<mesas-listado></mesas-listado>'
        }).
        when('/ticketLineaEstado/$', {
          template: '<ticket-linea-estado></ticket-linea-estado>'
        }).
        when('/opinionesListado', {
          template: '<opiniones-listado></opiniones-listado>'
        }).
        when('/pago', {
          template: '<pago></pago>'
        }).
        when('/productosListado', {
          template: '<productos-listado></productos-listado>'
        }).
        when('/productoDetalle', {
          template: '<producto-detalle></producto-detalle>'
        }).
        when('/productoOpina', {
          template: '<producto-opina></producto-opina>'
        }).
      
      otherwise('/');
    }
  ])
