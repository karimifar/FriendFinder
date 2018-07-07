var users = [
    {
        Name: "Ahmed",
        Image: "https://randomuser.me/api/portraits/men/1.jpg",
        Scores: ["5","1","4","4","5","1","2","5","4","1"],
    },
    {
        Name: "Alison",
        Image: "https://randomuser.me/api/portraits/women/1.jpg",
        Scores: ["3","5","4","4","5","1","2","5","4","1"],
    },
    {
        Name: "Jake",
        Image: "https://randomuser.me/api/portraits/men/2.jpg",
        Scores: ["3","1","3","2","5","1","2","3","3","1"],
    },
    {
        Name: "Jullian",
        Image: "https://randomuser.me/api/portraits/men/3.jpg",
        Scores: ["1","1","2","2","3","1","2","2","3","1"],
    },
    {
        Name: "Javi",
        Image: "https://randomuser.me/api/portraits/men/4.jpg",
        Scores: ["1","1","2","2","3","1","2","2","3","1"],
    },
    {
        Name: "Emily",
        Image: "https://randomuser.me/api/portraits/women/2.jpg",
        Scores: ["3","4","2","5","3","1","5","2","3","4"],
    },
    {
        Name: "Jean",
        Image: "https://randomuser.me/api/portraits/women/3.jpg",
        Scores: ["4","5","4","5","4","3","5","2","3","4"],
    },
    {
        Name: "Hanna",
        Image: "https://randomuser.me/api/portraits/women/4.jpg",
        Scores: ["5","5","4","5","4","3","5","4","3","4"],
    },
    {
        Name: "Kimberly",
        Image: "https://randomuser.me/api/portraits/women/5.jpg",
        Scores: ["1","2","4","5","4","3","5","4","3","4"],
    },
    {
        Name: "Jonas",
        Image: "https://randomuser.me/api/portraits/men/7.jpg",
        Scores: ["5","5","2","3","4","3","5","4","3","4"],
    },
];

function countItems(array){
    console.log(array)
    var scoreSum= parseInt(array[0]);
    for(var i=1; i<array.length; i++){
        scoreSum += parseInt(array[i])
    }
    return scoreSum;
}

module.exports = users;
