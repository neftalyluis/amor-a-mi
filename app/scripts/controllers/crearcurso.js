'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:CrearcursoCtrl
 * @description
 * # CrearcursoCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('CrearCursoCtrl', ['auth', '$scope', '$location', 'cursosRepository','FirebaseStorageUploader', function(auth, $scope, $location, cursosRepository, FirebaseStorageUploader) {

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
      id: 0,
      nombre: '',
      cuerpo: '',
      header: '',
      archivos : []
    }

    $scope.convertToURL = function (toChange){
      return toChange.replace(/ /g, '-').toLowerCase()
    }

    $scope.uploaderFotos = new FirebaseStorageUploader({
      url : 'memazo'
    });

    $scope.addLeccion = function (){

    }

    $scope.cleanLeccion = function () {
      $scope.leccion.id = null
      $scope.leccion.nombre = ''
      $scope.leccion.cuerpo = ''
      $scope.leccion.header = ''
      $scope.leccion.archivos = ''
    }

    $scope.uploadHeader = function () {

    }


  }]);
