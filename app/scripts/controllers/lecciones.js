'use strict';

/**
 * @ngdoc function
 * @name amorAMiApp.controller:LeccionesCtrl
 * @description
 * # LeccionesCtrl
 * Controller of the amorAMiApp
 */
angular.module('amorAMiApp')
  .controller('LeccionesCtrl', ['auth', '$scope', '$location', '$routeParams', 'cursoRepository', 'avanceCursoRepository', 'currentAuth', function(auth, $scope, $location, $routeParams, cursoRepository, avanceCursoRepository, currentAuth) {

    $scope.cursoId = $routeParams.cursoId
    $scope.curso = cursoRepository($scope.cursoId)
    $scope.progreso = false;
    $scope.checked = avanceCursoRepository(currentAuth.uid)

    $scope.checked.$loaded().then(function() {
        $scope.curso.$loaded().then(function() {
          if(Object.keys($scope.checked[$scope.curso.$id]).length===Object.keys($scope.curso.lecciones).length){
            $('#felicitacionModal').modal()
          }
        }, function(error) {
          console.log('Couldnt load curso')
        })
    }, function(error) {
      console.log('Couldnt load progress')
    })

    $scope.verLeccion = function(leccionIndex) {
      $location.path('/cursos/' + $scope.cursoId + '/lecciones/' + leccionIndex)
    }

    $scope.verCursos = function() {
      $location.path('/cursos/')
    }

    $scope.verTeoria = function() {
      $location.path('/cursos/' + $scope.cursoId + '/teoria')
    }

  }]);
