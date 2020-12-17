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

  console.log(shuffle('beaverDam'));