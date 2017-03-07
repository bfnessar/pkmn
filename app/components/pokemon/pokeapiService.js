(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('pokeapiFactory', pokeapiFactory);

    pokeapiFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function pokeapiFactory($http, $q) {
        var PokeApiService = {
            'teststring': 'test test service factory test',
            queryPokemon: queryPokemon,
            queryPokemonList: queryPokemonList,
        };
        return PokeApiService;

        function queryPokemon(string) {
          var deferred = $q.defer();
          var pokemon_url = 'http://pokeapi.co/api/v2/pokemon/' + string + '/';

          $http.get(pokemon_url)
            .then(function(response) {
              deferred.resolve(response.data);
            })
            .catch(function() {
              deferred.reject('error: could not query pokemon: ' + QueryPokemon.pokemon);
            })
          return deferred.promise;
        }

        function queryPokemonList(population, offset) {
          var deferred = $q.defer();
          $http.get(`http://pokeapi.co/api/v2/pokemon/?limit=${population}&offset=${offset}`)
            .then(function(response) {
              deferred.resolve(response.data);
            })
            .catch(function() {
              deferred.reject('error: could not query pokemon list');
            })
          return deferred.promise;
        }


    }
})();
