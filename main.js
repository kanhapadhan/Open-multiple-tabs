import wordList from '/words.js'

const $ = document.querySelector.bind(document);

const rand = (min,max) => Math.round(Math.random()*(max-min))+min;


var timesRun = 0;
let open = () => {
  let timeDelay = $('input[name="time-delay"]:checked').value
  var interval = setInterval(function() {
    timesRun += 1;
    let tabs = $('input[name="tabs"]:checked').value
    if (timesRun > tabs) {
      clearInterval(interval);
      timesRun = 0
    }
    else {
      let stype = $('input[name="search-type"]:checked').value
      //console.log(stype);
      if (stype==='time-dt') {
        //console.log('time');
        window.open("https://www.bing.com/search?q=text " + (new Date().getTime()))
      } else {
        //console.log('words');
        window.open("https://www.bing.com/search?q=" + wordList[rand(0,wordList.length-1)])
      }
    }
  }, timeDelay);
}

$('#btn').addEventListener('click', open)

