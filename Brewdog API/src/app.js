import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

    new Vue ({
      el: "#app",
      data: {
          beers: [],
          beerDescription: '',
          favouriteBeers:[],
      },
      mounted: function(){
          this.getBeers();
      },
      methods: {
        getBeers: function(){
            fetch("https://api.punkapi.com/v2/beers")
            .then(response => response.json())
            .then(data => this.beers = data)
        },

        selectBeer:function(){
            this.selectedBeers = this.beers[this.selectedBeer];
   
    },
    addToFav: function(){
        this.favouriteBeers.push(this.selectedBeer);
    }
            
}})
})
