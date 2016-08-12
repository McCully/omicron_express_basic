var express = require('express');
var router = express.Router();
var songs = [];

router.post('/' , function( req , res){
  var song = req.body;
  var dupe = false;
  var blank = false;
  var date = Date();
  console.log("length " , songs.length);
  console.log('songs1 ', songs);


  for(var i = 0; i < songs.length; i++){
    console.log('song: ' ,  song);
    console.log('songIndex : ' , songs[i]);
    if(song.title == songs[i].title && song.artist == songs[i].artist){
      dupe = true;
      console.log('dupe: ', dupe);
    }

  }
  if(song.title == "" || song.artist == ""){
    blank = true;
  }

  if(dupe || blank == true){
    console.log("info not entered");
  }else {
    song.date = date;
    songs.push(song);
    console.log('songs3: ' , songs);
  }
  res.sendStatus(200);
    // console.log('dupe2: ', dupe);
});
router.get('/', function(req , res){
  res.send(songs);

  // console.log('songs2: ' ,songs)
});
module.exports = router;













// var blank = function(song){
//   if(song.title == "" || song.artist == ""){
//     song = null;
//     return song;
//   } else {
//     return song;
//   }
// }
// module.exports = blank;






// module.exports = {
//   $(document).ready(function(){
//   $('#song-submit').on('click' , function(){
//     if($('#title').val() === "" || $('#artist').val() === ""){
//       return false;
//     }
//   });
// });
// }
// var blank = function(song){
//     if(song.title == "" || song.artist == ""){
//       alert('Please enter a valid artist and song title');
//       return false;
//     } else {
//       return song;
//     };
//   }
