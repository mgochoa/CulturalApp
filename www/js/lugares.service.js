angular.module('app.service', [])
.service('lugaresService', ['$http',function($http){
	var base = 'https://cultural-api.herokuapp.com/';

    this.getAll=function (lugar) {
            return $http.get(base + 'api/' + lugar);
        };
}]);