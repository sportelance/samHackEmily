// var words = document.body.textContent.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];});
// console.log(words);
const imageURLArray = [];
const linkLArray = [];

document.addEventListener("click", function() {
    console.log('paste')
    document.execCommand('paste', 'https://www.youtube.com/watch?v=DLzxrzFCyOs');
  });

document.addEventListener("copy", function() {
    console.log('copy');
    setClipboard('fungus');
});

let links = document.querySelectorAll('a');
links.forEach(link => {
    if(rando()){
        link.setAttribute('href', 'https://www.youtube.com/watch?v=DLzxrzFCyOs');
    }
})

let images = document.querySelectorAll('img');
images.forEach(image => {
    // random chance check
    if(rando()){
        let num = randomNum(imageURLArray.length);
        image.setAttribute('src', imageURLArray[num]);
    }
    // replace link with array of imgLinks
})

let heading = document.querySelector('h1').innerHTML;
document.querySelector('h1').innerHTML = shuffle(heading);

function setClipboard(text) {
    let data = new ClipboardItem({ "text/plain": text });
  
    navigator.clipboard.write(data).then(function() {
      console.log("great success");
    }, function() {
      console.log("it didn't work");
    });
  }

function rando(){
    // if(Math.floor(Math.random() * 10 > 5)) {
    //     return true;
    // } 
    // return false;
    return true;
}

function randomNum(length){
    return Math.round(Math.random() * length);
}

function shuffle(string) {
    const array = string.split('');
    var currentIndex = array.length, temporaryValue, randomIndex;
    console.log(currentIndex);
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    } 
    let output = array.join('');
    return output;
}
