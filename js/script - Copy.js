// var music = document.querySelectorAll('.music');


// for (var i = 0; i < music.length; i++) {

//     music[i].addEventListener('click', function() {
//         console.log(music[i])
//     })
// }

// var song1 = new Audio();
// song1.src = "./../music/music-1.mp3";

// function playsong() {
//     var songId = this.innerHTML;
//     console.log(songId);
// }


//var divLength = document.querySelectorAll('.music').length;
var music = document.querySelectorAll('.music');

for (var i = 0; i < music.length; i++) {
    //var demo = document.querySelectorAll('.music')[i]

    music[i].addEventListener('click', function() {
        playsong();
    })
}

var song1 = new Audio();
song1.src = "../music/music-1.mp3";

var song2 = new Audio();
song2.src = "./../music/music-2.mp3";
var song3 = new Audio();
song3.src = "./../music/music-3.mp3";

function playsong() {
    var songId = this.innerHTML;
    console.log(songId);

    if (songId == 'a') {
        song1.play();
    }

    // switch (songId) {
    //     case "a":
    //         song1.play();
    //         break;

    //         // default:
    //         //     console.log("wrong input");
    //         //     break;

    // }



}