class Library {
    books = []
    favoriteBook = ''
    constructor(name){
        this.name = name
    }

    addBook (title, author){
        this.books.push({title: title,author: author})
    }

    setFavoriteBook (title){
        this.favoriteBook = title
    }

    getBookList (){
        for(let item of this.books){
            let {title, author} = item
            console.log(`${title}, muallif: ${author}`)
        }
    }

    getFavoriteBook (){
        console.log(this.favoriteBook)
    }
}

let library = new Library()
library.addBook("Shum bola","G'afur G'ulom")
library.addBook("Yumshoq kuch","Jozef Nay")
library.setFavoriteBook("Shudring")

library.getBookList()
library.getFavoriteBook()