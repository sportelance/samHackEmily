// var words = document.body.textContent.split(/\s+/).sort().filter( function(v,i,o){return v!==o[i-1];});
/**
 * 
 * DEMO IDEA: Fill out the link and image lists as we browse the web for new images,
 * ask people for suggestions in the chat, add those images in this file (and fiddle with the chance settings),
 * and refresh the extension so the process of finding new images becomes more difficult. More of them become
 * the images we've chosen, links sometimes redirect to the videos we add to the video list sporadically, or are sometimes 
 * pasted in randomly when we click
 * 
 * to get around showing code, the person who isn't screensharing can manipulate the code, as if we had a UI
 * or we could add settings
 * SETTINGS (stretch): add subarrays so the user can not only choose how often actions are performed (links are replaced and shit), but also what their outcomes are (what kind of content they're replaced with)
 * 
 */
// console.log(words);
const imageURLArray = [
      // 'https://res.cloudinary.com/practicaldev/image/fetch/s--5ikRuKtv--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/c8q64tgpqsalyen1tpv2.jpg',
      // 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*',
  'https://cachedimages.podchaser.com/256x256/aHR0cHM6Ly9jcmVhdG9yLWltYWdlcy5wb2RjaGFzZXIuY29tL2Q3OWIyNWNmMjVmMmYyMWMxYjk5ODE3NWIwNzY3ZTUyLmpwZWc%3D/aHR0cHM6Ly93d3cucG9kY2hhc2VyLmNvbS9pbWFnZXMvbWlzc2luZy1pbWFnZS5wbmc%3D',
  // 'https://d3g9pb5nvr3u7.cloudfront.net/authors/58fe75f7d577cb16ef7c80ba/1124185669/256.jpg',
  // 'https://i.pinimg.com/originals/3e/9e/92/3e9e92b27195242cf59bacac8cd01292.png',
  // 'https://vignette.wikia.nocookie.net/pendragonsden/images/3/3f/Snurch-_The_Church_Of_Snails.jpg/revision/latest?cb=20190327110350',
  // 'https://styles.redditmedia.com/t5_2uvty/styles/communityIcon_6rgtao4krun41.png?width=256&s=76c5c319052bcb7d58d2382497d11d3838cfcf9a',
];

const linkArray = ['https://www.youtube.com/watch?v=DLzxrzFCyOs', 'https://i.insider.com/4ced47964bd7c83d5b080000?width=600&format=jpeg&auto=webp', 'http://www.fallingfalling.com/',
'https://www.youtube.com/watch?v=STbhaqsBJB0',
'https://www.youtube.com/watch?v=FJ3oHpup-pk',
'https://www.youtube.com/watch?v=t8rFC-859CI',
'https://www.indiewire.com/wp-content/uploads/2017/08/it.jpg',
'https://www.youtube.com/watch?v=J---aiyznGQ',
'https://images-na.ssl-images-amazon.com/images/I/41Jk8ALlVIL._AC_.jpg', 'https://www.inquirer.com/resizer/uSzbfh_sn3ELhKqb4narEAXR2E8=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/GPDOM3P7AZHI3J7RJNSLKEUVYM.jpg',
'https://www.youtube.com/watch?v=mfhBM_Yay6w'];
const textArray = ['Hellen Keller', 'Fungus', 'The Paris Accords', 'Dean Martin']
const tagArray = ['h1', 'h2', 'h3', 'p']

document.addEventListener("click", function() {
  console.log('paste')
  if(rando()){
    let num = randomNum(linkArray.length - 1);
    document.execCommand('paste', linkArray[num]);
  }
});

document.addEventListener("copy", function() {
    console.log('copy');
    if(rando()){
      let num = randomNum(textArray.length - 1);
      setClipboard(textArray[num]);
    }
});

let links = document.querySelectorAll('a');
links.forEach(link => {
    if(rando()){
        let num = randomNum(linkArray.length - 1);
        link.setAttribute('href', linkArray[num]);
    }
})

let images = document.querySelectorAll('img');
images.forEach(image => {
    // random chance check
    for(let imageURL of imageURLArray){// makes it so we have a rando chance of replacing an image with each image in our list
      if(rando()){ //yeilds an 80% chance of rando returning true
        // let num = randomNum(imageURLArray.length - 1);
        image.setAttribute('src', imageURL);
      }
    };
  });


let num = randomNum(tagArray.length - 1);
let tag = tagArray[num];
tag = tag.toString();
let heading = document.querySelector(tag).innerHTML;
document.querySelector(tagArray[num]).innerHTML = shuffle(heading);

function setClipboard(text) {
  // let ClipboardItem = new ClipboardItem({ "text/plain": text });
  if(rando()){
    // navigator.clipboard.write(ClipboardItem).then(function() {  //what do .write and .then return?
    navigator.clipboard.writeText(text).then(function(){
      console.log("great");
    }, function() {
      console.log("it didn't work");
    });
  }
}

function rando(){
    if(Math.floor(Math.random() * 100) >= 0) {  //gives a 20% chance of function returning true
        return true;
    } 
    return false;
}

function randomNum(length){
    return Math.round(Math.random() * length);
}

function shuffle(string) {
    const array = string.split('');                       
    var currentIndex = array.length, temporaryValue, randomIndex;
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

