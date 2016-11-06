'use strict';

// Define el módulo principal de la aplicación y los módulos de los que tiene dependencias.
angular.module('wabat', [
    'ngRoute', 
    'inicio',
    'entidad1',
    'entidad2',
    'mesas',
    'mesasListado',
    'mesasDetalleCamarero',
    'ticketLineaEstado',
    'opinionesListado',
    'pago',
    'productosListado',
    'productoOpina',
    'productoDetalle'
]);
