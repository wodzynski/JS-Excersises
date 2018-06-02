var movieDB = [
    { title: "Tully", watched: true, rating: 3.5 },
    { title: "Han Solo", watched: true, rating: 3 },
    { title: "Beo-ning", watched: false, rating: 4 },
    { title: "The Untouchables", watched: false, rating: 4 }
]
movieDB.forEach(function(i) {

    // Moje długie pętle:

    // if (i.watched === true) {
    //     console.log(
    //         "You have watched \"" + i.title + "\" - " + i.rating + " stars"
    //     )
    // } else {
    //     console.log(
    //         "You have not seen \"" + i.title + "\" - " + i.rating + " stars"
    //     )
    // }

    //Rozwiązanie nr. 1;

    // var result = "You have ";
    // if (i.watched) {
    //     result += "watched ";
    // } else {
    //     result += "not watched ";
    // }
    // result += "\"" + i.title + "\" - ";
    // result += i.rating + " stars";
    // console.log(result)

    //Rozwiązanie nr. 2 z funkcją poza pętlą:

    console.log(buildString(i));
})

function buildString(i) {
    var result = "You have ";
    if (i.watched) {
        result += "watched ";
    } else {
        result += "not watched ";
    }
    result += "\"" + i.title + "\" - ";
    result += i.rating + " stars";
    return result;
}