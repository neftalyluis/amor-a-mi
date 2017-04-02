'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionCtrl
 * @description
 * # LeccionCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionCtrl', ["auth", "$scope", "$location", "$routeParams", "leccionRepository", "fileCursoRepository", "avanceCursoRepository", "currentAuth", function(auth, $scope, $location, $routeParams, leccionRepository, fileCursoRepository, avanceCursoRepository, currentAuth) {

    $scope.cursoId = $routeParams.cursoId;
    $scope.leccionId = $routeParams.leccionId;
    $scope.leccion = leccionRepository($scope.cursoId, $scope.leccionId);
    $scope.bucket = [];
    $scope.archivo;
    $scope.showDescarga = true;
    $scope.checked = avanceCursoRepository(currentAuth.uid, $scope.cursoId, $scope.leccionId)
    $scope.headerImage = 'url("../images/header.jpg")'

    $scope.checked.$loaded().then(function() {
      fileCursoRepository($scope.cursoId, $scope.leccionId, $scope.leccion.header).$getDownloadURL().then(function(url) {
        $scope.headerImage = 'url("' + url + '")';
      }, function(error) {
        console.log(error)
      })
    })


    $scope.logout = function() {
      auth.$signOut();
      console.log('logged out');
      $location.path('/login');
      $scope.authData = null;
    };

    $scope.verCurso = function(leccionIndex) {
      $location.path('/cursos/' + $scope.cursoId)
    }

    $scope.checkBucket = function() {
      $scope.leccion.archivos.forEach(function(entry) {
        $scope.archivo = fileCursoRepository($scope.cursoId, $scope.leccionId, entry);
        $scope.archivo.$getDownloadURL().then(function(url) {
          $scope.bucket.push({
            archivo: entry,
            direccion: url
          })
        });;
      })
      $scope.showDescarga = false;
    }

    $scope.checkCurso = function() {
      $scope.toCheck = true;
      $scope.toCheck.$save();
    }

  }]);
