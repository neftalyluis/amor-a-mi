'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionCtrl
 * @description
 * # LeccionCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionCtrl', ["auth", "$scope", "$location", "$routeParams", "leccionRepository", "fileCursoRepository", function(auth, $scope, $location, $routeParams, leccionRepository, fileCursoRepository) {

    $scope.cursoId = $routeParams.cursoId;
    $scope.leccionId = $routeParams.leccionId;
    $scope.leccion = leccionRepository($scope.cursoId, $scope.leccionId);
    $scope.bucket = [];
    $scope.archivo;
    $scope.showDescarga = true;


    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.verCurso = function(leccionIndex) {
      //$location.path('/posts/' + postId);
      $location.path('/cursos/' + $scope.cursoId)
    }

    $scope.checkBucket = function() {
      $scope.leccion.archivos.forEach(function(entry) {
        $scope.archivo = fileCursoRepository($scope.cursoId, $scope.leccionId, entry);
        $scope.archivo.$getDownloadURL().then(function(url) {
          $scope.bucket.push({archivo: entry, direccion: url})
        });;
      })
      $scope.showDescarga = false;
    }

  }]);
