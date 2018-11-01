var movies = [
    {
        title: "Avengers",
        rating: 4,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 3.5,
        hasWatched: true
    },
    {
        title: "Harry Potter",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Interstellar",
        rating: 4.6,
        hasWatched: true
    }
];

movies.forEach(movie => {
    if (movie.hasWatched) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    } else {
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
});