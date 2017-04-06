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

    $scope.leccion.$loaded().then(function() {
      $scope.checkBucket();
    }, function(error) {
      console.log("Couldn't load files from Lesson")
    })

    $scope.checkBucket = function() {
      $scope.leccion.archivos.forEach(function(entry) {
        $scope.archivo = fileCursoRepository($scope.cursoId, $scope.leccionId, entry);
        $scope.archivo.$getDownloadURL().then(function(url) {
          $scope.bucket.push({
            archivo: entry,
            direccion: url
          })
        });
      })
      $scope.showDescarga = false;
    }

    $scope.checkCurso = function() {
      console.log($scope.checked)
      $scope.checked = {valor : true};
      $scope.checked.$save().then(function() {
        alert('Profile saved!');
      }).catch(function(error) {
        alert('Error!');
      });
      console.log($scope.checked)

    }

  }]);
