// Accepts a list of objects representing books and arrange it in alphabetical order by using callback function and should use map function to create the new book list containing only the titles

const booksList = (callback) => {
    const bookList = [
        {
            name : "The Road",
            author : "Cormac McCarthy",
            year : 2006
        },
        {
            name : "A Thousand Splendid Suns",
            author : "Khaled Hosseini",
            year : 2007
        },
        {
            name : "Outliers: The Story of Success",
            author : "Malcolm Gladwell",
            year : 2008
        },
        {
            name : "Room",
            author : "Emma Donoghue",
            year : 2010
        },
        {
            name : "The Night Circus",
            author : "Erin Morgenstern",
            year : 2011
        },
        {
            name : "Gone Girl",
            author : "Gillian Flynn",
            year : 2012
        }
    ];
    const newList = bookList.map((books) => {
        return books.name
    })
    
    callback(newList)
}

const newBooksList = (newList) => {
    console.log(newList.sort())
}

booksList(newBooksList)


