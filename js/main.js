
/////////////////   C O N S T A N T S   ////////////////////

const cardsArr = [
  {
    name: 'King of Hearts',
    suit: 'heart',
    value: 13,
    img: '../images/hearts/hearts-K.svg',
    id: null
  },
  {
    name: 'Queen of Hearts',
    suit: 'heart',
    value: 12,
    img: '../images/hearts/hearts-Q.svg',
    id: null
  },
  {
    name: 'Jack of Hearts',
    suit: 'heart',
    value: 11,
    img: '../images/hearts/hearts-J.svg',
    id: null
  },
  {
    name: 'Ten of Hearts',
    suit: 'heart',
    value: 10,
    img: '../images/hearts/hearts-r10.svg',
    id: null
  },
  {
    name: 'Nine of Hearts',
    suit: 'heart',
    value: 9,
    img: '../images/hearts/hearts-r09.svg',
    id: null
  },
  {
    name: 'Eight of Hearts',
    suit: 'heart',
    value: 8,
    img: '../images/hearts/hearts-r08.svg',
    id: null
  },
  {
    name: 'Seven of Hearts',
    suit: 'heart',
    value: 7,
    img: '../images/hearts/hearts-r07.svg',
    id: null
  },
  {
    name: 'Six of Hearts',
    suit: 'heart',
    value: 6,
    img: '../images/hearts/hearts-r06.svg',
    id: null
  },
  {
    name: 'Five of Hearts',
    suit: 'heart',
    value: 5,
    img: '../images/hearts/hearts-r05.svg',
    id: null
  },
  {
    name: 'Four of Hearts',
    suit: 'heart',
    value: 4,
    img: '../images/hearts/hearts-r04.svg',
    id: null
  },
  {
    name: 'Three of Hearts',
    suit: 'heart',
    value: 3,
    img: '../images/hearts/hearts-r03.svg',
    id: null
  },
  {
    name: 'Two of Hearts',
    suit: 'heart',
    value: 2,
    img: '../images/hearts/hearts-r02.svg',
    id: null
  },
  {
    name: 'Ace of Hearts',
    suit: 'heart',
    value: 1,
    img: '../images/hearts/hearts-A.svg',
    id: null
  },
  {
    name: 'King of Clubs',
    suit: 'club',
    value: 13,
    img: '../images/clubs/clubs-K.svg',
    id: null
  },
  {
    name: 'Queen of Clubs',
    suit: 'club',
    value: 12,
    img: '../images/clubs/clubs-Q.svg',
    id: null
  },
  {
    name: 'Jack of Clubs',
    suit: 'club',
    value: 11,
    img: '../images/clubs/clubs-J.svg',
    id: null
  },
  {
    name: 'Ten of Clubs',
    suit: 'club',
    value: 10,
    img: '../images/clubs/clubs-r10.svg',
    id: null
  },
  {
    name: 'Nine of Clubs',
    suit: 'club',
    value: 9,
    img: '../images/clubs/clubs-r09.svg',
    id: null
  },
  {
    name: 'Eight of Clubs',
    suit: 'club',
    value: 8,
    img: '../images/clubs/clubs-r08.svg',
    id: null
  },
  {
    name: 'Seven of Clubs',
    suit: 'club',
    value: 7,
    img: '../images/clubs/clubs-r07.svg',
    id: null
  },
  {
    name: 'Six of Clubs',
    suit: 'club',
    value: 6,
    img: '../images/clubs/clubs-r06.svg',
    id: null
  },
  {
    name: 'Five of Clubs',
    suit: 'club',
    value: 5,
    img: '../images/clubs/clubs-r05.svg',
    id: null
  },
  {
    name: 'Four of Clubs',
    suit: 'club',
    value: 4,
    img: '../images/clubs/clubs-r04.svg',
    id: null
  },
  {
    name: 'Three of Clubs',
    suit: 'club',
    value: 3,
    img: '../images/clubs/clubs-r03.svg',
    id: null
  },
  {
    name: 'Two of Clubs',
    suit: 'club',
    value: 2,
    img: '../images/clubs/clubs-r02.svg',
    id: null
  },
  {
    name: 'Ace of Clubs',
    suit: 'club',
    value: 1,
    img: '../images/clubs/clubs-A.svg',
    id: null
  },
  {
    name: 'King of Diamonds',
    suit: 'diamond',
    value: 13,
    img: '../images/diamonds/diamonds-K.svg',
    id: null
  },
  {
    name: 'Queen of Diamonds',
    suit: 'diamond',
    value: 12,
    img: '../images/diamonds/diamonds-Q.svg',
    id: null
  },
  {
    name: 'Jack of Diamonds',
    suit: 'diamond',
    value: 11,
    img: '../images/diamonds/diamonds-J.svg',
    id: null
  },
  {
    name: 'Ten of Diamonds',
    suit: 'diamond',
    value: 10,
    img: '../images/diamonds/diamonds-r10.svg',
    id: null
  },
  {
    name: 'Nine of Diamonds',
    suit: 'diamond',
    value: 9,
    img: '../images/diamonds/diamonds-r09.svg',
    id: null
  },
  {
    name: 'Eight of Diamonds',
    suit: 'diamond',
    value: 8,
    img: '../images/diamonds/diamonds-r08.svg',
    id: null
  },
  {
    name: 'Seven of Diamonds',
    suit: 'diamond',
    value: 7,
    img: '../images/diamonds/diamonds-r07.svg',
    id: null
  },
  {
    name: 'Six of Diamonds',
    suit: 'diamond',
    value: 6,
    img: '../images/diamonds/diamonds-r06.svg',
    id: null
  },
  {
    name: 'Five of Diamonds',
    suit: 'diamond',
    value: 5,
    img: '../images/diamonds/diamonds-r05.svg',
    id: null
  },
  {
    name: 'Four of Diamonds',
    suit: 'diamond',
    value: 4,
    img: '../images/diamonds/diamonds-r04.svg',
    id: null
  },
  {
    name: 'Three of Diamonds',
    suit: 'diamond',
    value: 3,
    img: '../images/diamonds/diamonds-r03.svg',
    id: null
  },
  {
    name: 'Two of Diamonds',
    suit: 'diamond',
    value: 2,
    img: '../images/diamonds/diamonds-r02.svg',
    id: null
  },
  {
    name: 'Ace of Diamonds',
    suit: 'diamond',
    value: 1,
    img: '../images/diamonds/diamonds-A.svg',
    id: null
  },
  {
    name: 'King of Spades',
    suit: 'spade',
    value: 13,
    img: '../images/spades/spades-K.svg',
    id: null

  },
  {
    name: 'Queen of Spades',
    suit: 'spade',
    value: 12,
    img: '../images/spades/spades-Q.svg',
    id: null
  },
  {
    name: 'Jack of Spades',
    suit: 'spade',
    value: 11,
    img: '../images/spades/spades-J.svg',
    id: null
  },
  {
    name: 'Ten of Spades',
    suit: 'spade',
    value: 10,
    img: '../images/spades/spades-r10.svg',
    id: null
  },
  {
    name: 'Nine of Spades',
    suit: 'spade',
    value: 9,
    img: '../images/spades/spades-r09.svg',
    id: null
  },
  {
    name: 'Eight of Spades',
    suit: 'spade',
    value: 8,
    img: '../images/spades/spades-r08.svg',
    id: null
  },
  {
    name: 'Seven of Spades',
    suit: 'spade',
    value: 7,
    img: '../images/spades/spades-r07.svg',
    id: null
  },
  {
    name: 'Six of Spades',
    suit: 'spade',
    value: 6,
    img: '../images/spades/spades-r06.svg',
    id: null
  },
  {
    name: 'Five of Spades',
    suit: 'spade',
    value: 5,
    img: '../images/spades/spades-r05.svg',
    id: null
  },
  {
    name: 'Four of Spades',
    suit: 'spade',
    value: 4,
    img: '../images/spades/spades-r04.svg',
    id: null
  },
  {
    name: 'Three of Spades',
    suit: 'spade',
    value: 3,
    img: '../images/spades/spades-r03.svg',
    id: null
  },
  {
    name: 'Two of Spades',
    suit: 'spade',
    value: 2,
    img: '../images/spades/spades-r02.svg',
    id: null
  },
  {
    name: 'Ace of Spades',
    suit: 'spade',
    value: 1,
    img: '../images/spades/spades-A.svg',
    id: null
  }
]

// TODO? May want to add an ID property to each card to be filled in the init loop

//constants of soundbites, card flipping, celebratory winnning sound

//////////////  G L O B A L  V A R I A B L E S  ////////////////
const game = document.getElementById('game-row2');
var cards = document.getElementsByClassName('card');

const column = document.getElementsByClassName('col');
const deck = document.getElementById('deck');
let deckImg = document.getElementById('deckImg');

let lastCards = document.querySelectorAll('.card:last-child');






//////////////// S T A T E  V A R I A B L E S ////////////////
const deckArr = [];
let dealtArr = [];
const dealSpace = document.getElementById('deal-space');

const heartsF = document.getElementById('heartsF');
const clubsF = document.getElementById('clubsF');
const diamondsF = document.getElementById('diamondsF');
const spadesF = document.getElementById('spadesF');









/////////////////////  I N I T I A T E  ///////////////////////
init();

function init() {
  //shuffle cards
  cardsArr.sort(() => 0.5 - Math.random());

  //to display 28 images on the front end & 24 in deck
  var i = 0;
  cardsArr.forEach(function (cardObj) {
    //for 28 cards on table...
    if (i < 28) {
      var cardID = "";
      i += 1;
      cardID = 'card' + i;
      //grab a div for cardObj data to be connected
      let card = document.getElementById(`${cardID}`);

      // assign cardObj id with generated cardID
      cardObj.id = cardID;
      // console.log(cardID);

      //place back image on every card
      card.style.backgroundImage = "url('/images/backs/red.svg')";

      //images 28 - 54 go to #deck / deckArr
    } else if (i >= 28) {
      i += 1;
      deckArr.push(cardObj);
    } else if (i === 52) {
      return;
    }
  });

 
//use ID to access object and grab img 
  lastCards.forEach(function(lastCard){
    // grab cardID from element
    let lastCardID = lastCard.id;
    //find associative card object of last cards by shared cardID
    var foundCardObj = cardsArr.find(x => x.id === lastCardID);

    //save img property from foundCardObj
    let cardImg = `url(${foundCardObj.img})`;
    
    //place images in card divs!
    lastCard.style.backgroundImage = cardImg;
  })

  render();
}










///////////////  E V E N T  L I S T E N E R S  ///////////////
/////////////////   &   F U N C T I O N S  ///////////////////


//------------ ------\\  S E L E C T  //---------------------

game.addEventListener('click', function (event) {
  // apply select class to cards that are clicked
  //event target is 'clicked'
  let clicked = event.target
  //make it so columns cannot be clicked
  if (clicked.className === "col" || clicked.className === "unselectable") {
    return;
  };
  // toggle selected class too
  clicked.classList.toggle("selected");
});

//if user selects card in column
//if applicable
//select from bottom


//-------------------\\  H O V E R  //---------------------

// if user  H O V E R S  over columns, 
// outline all cards from bottom to where mouse is
// col.addEventListener('mouseover', function(event){
//     let hovered = event.target;

//     if() {

//     }
// })


//------------------\\  C L I C K  //---------------------


deck.addEventListener('click', function () {
  // if user clicks on deck, flip top three cards over
  //pop card from deck array to be placed into 3 card divs
  i = 0;
  var cardDs = document.querySelectorAll('.cardD');
  while (i < 3) {
    i++;
    cardID = "";
    cardID = 'cardD' + i;
    //grab a card from deck
    let newCard = deckArr.pop();
    // console.log(newCard);

    //save newly dealt cards into dealt arr
    dealtArr.push(newCard);
    // console.log(dealtArr);

    //grab image from that card
    let newCardImg = `url(${newCard.img})`;
    //apply image to cardD space
    let card = document.getElementById(`${cardID}`);
    card.style.backgroundImage = newCardImg;
    // console.log(deckArr);
  };



  //when deck runs out of cards, turn dealer pile over into deck again
  if (deckArr.length === 0) {
    //change src of deckImg to reload img
    deckImg.src = '../images/reload-deck.png';
    //flip dealtArr over
    dealtArr.reverse();
    // add all cards to deckArr
    deckArr.push(...dealtArr);
    dealtArr = [];
  } else {
    deckImg.src = '../images/backs/red.svg';
  }
});


//////////////////   F U N C T I O N S  ///////////////////

//--------------------\\  D R A G  //---------------------

// function dragHandler(event) {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
// };

// function dropHandler(event) {
//     event.preventDefault();
//     var data = event.dataTransfer.getData('');
//     event.target.appendChild(document.ElementById(data));
// }





// when heartsF is dragged to, only ace of hearts can go there
// clubs
// diamonds
// spades

// when deck is cliked, turn top of array over to "dealSpace" pile


















/////////////////////   R E N D E R   /////////////////////

//add draggable attr and onstartdrag global event handler to lastCards of each column
function render() {

}