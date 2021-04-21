var files = [
    "hasbirabbi.mp3",
    "moulaya.mp3"    
];   

var i =0;
var music_player = document.querySelector("#music_list audio");

function hasbirabbi(){
    i = 0;
    music_player.src = files[i];
    music_player.onended = () => moulaya();
}

function moulaya(){
    i =1;
    music_player.src = files[i];
}