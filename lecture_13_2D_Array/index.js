function highestRunScore(playersInfo) {
    // console.log(playersInfo);

    var beshplayer = playersInfo[0][0];
    var score = playersInfo[0][1];
    for (var i = 1; i < playersInfo.length; i++) {
        if (score < playersInfo[i][1]) {
            score = playersInfo[i][1];
            beshplayer = playersInfo[i][0];
        }

    }
   return beshplayer;
}
var playersInfo = [
    ["pial", 10],
    ["asif", 200],
    ["sakib", 3000],
    ["ghjk", 400],
    ["abbu", 80],
];
var result = highestRunScore(playersInfo);
console.log(result);
//..............................
var score = [
    ["Ayoun", 38],
    ["Jimin", 83],
    ["Breant", 24],
    ["V", 5],
    ["Neel", 98],
    ["Mosh", 34]
];

function highestRunScorer(score) {
 var hightestScore = score[0][1];
 var hightestScorer = score[0][0];

 for(var s=0; s<6; s++){
   if (hightestScore < score[s][1]) {
         hightestScore = score[s][1];
         hightestScorer = score[s][0];
      }
 }
return hightestScorer;
}
console.log(highestRunScorer(score));