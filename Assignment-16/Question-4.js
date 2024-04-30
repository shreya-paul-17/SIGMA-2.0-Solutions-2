// Filtering and capitalizing books published on and after 2010 with author names

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

const filteredBooks = bookList.filter((books) => {
    return books.year >= 2010;
})

const result = filteredBooks.map((books) => {
    return {
        ...books,
        author: books.author.toUpperCase(),
    };
});

console.log(result);