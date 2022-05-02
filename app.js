//console.log('hello, vue');

const app = Vue.createApp({
  // data, functions
  //template: '<h2>I am the template</h2>',
  // data() {
  //   return {
  //     showBooks: true,
  //     title: 'The Final Empire',
  //     author: 'Brandon Sanderson',
  //     age: 45,
  //     x:0, 
  //     y:0
  //   } 
  data() {
    return {
      url: 'http://thenetninja.co.uk',
      showBooks: true,
      books: [
        {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/1.jpg', isFav: true},
        {title: 'name of the wind1', author: 'patrick rothfuss1', img: 'assets/2.jpg', isFav: false},
        {title: 'name of the wind', author: 'patrick rothfuss', img: 'assets/3.jpg', isFav: true},
      ]
    }
  },

  methods : { 
    tooggleShowBooks() 
    {
      this.showBooks = !this.showBooks
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    }
  },
    /*
    changeTitle(abc) {
      //console.log('change title')
      //this.title = 'Words of Randiance'
      this.title = title
    }
    */
    // handleEvent(e, data)
    // {
    //   console.log(e, e.type)
    //   if(data) {
    //     conole.log(data)
    //   }
    // },
    // handleMousemove(e)
    // {
    //   this.x = e.offsetX;
    //   this.y = e.offsetY;
    // }
  computed : {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }

})
app.mount('#app')
