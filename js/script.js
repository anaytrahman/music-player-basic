var music = document.querySelectorAll('.music');

for (var i = 0; i < music.length; i++) {
    music[i].addEventListener('click', function(e) {
        playsong(e);
    })
}

var song1 = new Audio();
song1.src = "../music/music-1.mp3";

var song2 = new Audio();
song2.src = "./../music/music-2.mp3";
var song3 = new Audio();
song3.src = "./../music/music-3.mp3";

function playsong(e) {
    //var songId = this.className;
   
   /*var songId = e.target.className;
   console.log(songId);
   
   if(songId == 'a'){
	   alert('a fired');
	   
   }else if(songId == 'b'){
	   alert('b fired')
   } else{
	   
	   alert('wrong input')
   }
	*/
	/*
	//var getClass = songId.classList;
   console.log(songId)
   if(songId == 'a'){
	    alert('working');
   }
   
   */
   //contains
   var songId = e.target;
  
   //songId.classList.contains
   if (songId.classList.contains('a')){
       alert('a fired');
        song1.play();
		
		
    } else if (songId.classList.contains('b')) {
		alert('b fired')
       // song2.play();
    } 
	 else if (songId.classList.contains('c')) {
		alert('c fired')
       // song2.play();
    } 
	
	 else if (songId.classList.contains('d')) {
		alert('d fired')
       // song2.play();
    } 
	
	 else if (songId.classList.contains('e')) {
		alert('e fired')
       // song2.play();
    } 
	
	 else if (songId.classList.contains('f')) {
		alert('f fired')
       // song2.play();
    } 
	
	else {
        alert('wrong entry');
    }
}