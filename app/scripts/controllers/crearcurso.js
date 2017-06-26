'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CrearcursoCtrl
 * @description
 * # CrearcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CrearCursoCtrl', ['auth', '$scope', '$location', 'cursosRepository', 'FirebaseStorageUploader', function(auth, $scope, $location, cursosRepository, FirebaseStorageUploader) {

    $scope.repository = cursosRepository;

    $scope.curso = {
      nombre: '',
      bienvenida: '',
      descripcion: '',
      fotoCursos: '',
      fotoLecciones: '',
      teoria: '',
      botonTeoria: '',
      lecciones: []
    };

    $scope.leccionNueva = {
      nombre: '',
      cuerpo: '',
      header: '',
      archivos: []
    }

    $scope.convertToURL = function(toChange) {
      return toChange.replace(/ /g, '-').toLowerCase()
    }

    $scope.addLeccion = function(form) {
      $scope.curso.lecciones.push({
          nombre: form.nombre,
          cuerpo: form.cuerpo,
      });
      $scope.form = null
    }

    $scope.removerLeccion = function(idx) {
      $scope.curso.lecciones.splice(idx, 1)
    }


  }]);
