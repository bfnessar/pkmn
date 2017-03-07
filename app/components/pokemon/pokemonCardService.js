(function() {
    'use strict';

    angular
        .module('myApp')
        .service('pokemonCardService', pokemonCardService);

    pokemonCardService.$inject = ['$http', 'pokeapiFactory'];

    function pokemonCardService($http, pokeapiFactory) {
      var PokemonCardService = {
        'teststring': 'basiccardserviceteststring',
        'pokemon_obj_raw': {},
        'pokemon_obj': {},
        'pokemon_list': [],

        queryPokemonName: function(name) {
          var myself = this;
          return pokeapiFactory.queryPokemon(name).then(function(data) {
            myself.pokemon_obj_raw = data;
            myself.consolidatePokemonData();
          })
        },

        // Assumes that pokemon_obj_raw is loaded with query data
        consolidatePokemonData: function() {
          var myself = this;
          var raw = angular.copy(myself.pokemon_obj_raw);
          var clean = {};
          if (raw) {
            clean['dexnum'] = raw.id;
            clean['name'] = raw.name;
            clean['abilities'] = [];
            for (var i=0; i<raw.abilities.length; i++){
              clean['abilities'].push( angular.copy(raw.abilities[i].ability) );
            };
            clean['types'] = [];
            for (var i=0; i<raw.types.length; i++) {
              clean['types'].push( angular.copy( raw.types[i].type ) );
            };
            clean['stats'] = {};
            for (var i=0; i<raw.stats.length; i++) {
              clean['stats'][raw.stats[i].stat.name] = raw.stats[i].base_stat;
            }
            clean['moves'] = [];
            for (var i=0; i<raw.moves.length; i++) {
              clean['moves'].push( angular.copy( raw.moves[i].move ) )
            };
          }
          else {
            console.log('error: no pokemon given to query');
            return;
          };
          myself.pokemon_obj = angular.copy(clean);
          console.log(myself.pokemon_obj);
        },

        queryPokemonList: function(population, offset) {
          var myself = this;
          return pokeapiFactory.queryPokemonList(population, offset).then(function(data) {
            myself.pokemon_list = angular.copy( data.results )
            // console.log( JSON.stringify(myself.pokemon_list) );
            console.log('var pokemon_list is populated');
          })
        },

        getSpriteSrc: function(data) {
          if (data.id) {
            return ("assets/pokemon-sprites/" + data.id + ".png")
          }
          else {
            return "assets/pokemon-sprites/substitute-doll.png"
          }
        },


      }

      return PokemonCardService;

    }
})();
