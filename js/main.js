/////////////////// C O N S T A N T S ////////////////////
const cardsArr = [
    {
        name: 'King of Hearts',
        suit: 'heart',
        value: 13,
        img:'../images/hearts/hearts-K.svg'
    },
    {
        name: 'Queen of Hearts',
        suit: 'heart',
        value: 12,
        img: '../images/hearts/hearts-Q.svg'
    },
    {
        name: 'Jack of Hearts',
        suit: 'heart',
        value: 11,
        img: '../images/hearts/hearts-J.svg'
    },
    {
        name: 'Ten of Hearts',
        suit: 'heart',
        value: 10,
        img: '../images/hearts/hearts-r10.svg'
    },
    {
        name: 'Nine of Hearts',
        suit: 'heart',
        value: 9,
        img: '../images/hearts/hearts-r09.svg'
    },
    {
        name: 'Eight of Hearts',
        suit: 'heart',
        value: 8,
        img: '../images/hearts/hearts-r08.svg'
    },
    {
        name: 'Seven of Hearts',
        suit: 'heart',
        value: 7,
        img: '../images/hearts/hearts-r07.svg'
    },
    {
        name: 'Six of Hearts',
        suit: 'heart',
        value: 6,
        img: '../images/hearts/hearts-r06.svg'
    },
    {
        name: 'Five of Hearts',
        suit: 'heart',
        value: 5,
        img: '../images/hearts/hearts-r05.svg'
    },
    {
        name: 'Four of Hearts',
        suit: 'heart',
        value: 4,
        img: '../images/hearts/hearts-r04.svg'
    },
    {
        name: 'Three of Hearts',
        suit: 'heart',
        value: 3,
        img: '../images/hearts/hearts-r03.svg'
    },
    {
        name: 'Two of Hearts',
        suit: 'heart',
        value: 2,
        img: '../images/hearts/hearts-r02.svg'
    },
    {
        name: 'Ace of Hearts',
        suit: 'heart',
        value: 1,
        img: '../images/hearts/hearts-A.svg'
    },
    {
        name: 'King of Clubs',
        suit: 'club',
        value: 13,
        img:'../images/clubs/clubs-K.svg'
        
    },
    {
        name: 'Queen of Clubs',
        suit: 'club',
        value: 12,
        img: '../images/clubs/clubs-Q.svg'
    },
    {
        name: 'Jack of Clubs',
        suit: 'club',
        value: 11,
        img: '../images/clubs/clubs-J.svg'
    },
    {
        name: 'Ten of Clubs',
        suit: 'club',
        value: 10,
        img: '../images/clubs/clubs-r10.svg'
    },
    {
        name: 'Nine of Clubs',
        suit: 'club',
        value: 9,
        img: '../images/clubs/clubs-r09.svg'
    },
    {
        name: 'Eight of Clubs',
        suit: 'club',
        value: 8,
        img: '../images/clubs/clubs-r08.svg'
    },
    {
        name: 'Seven of Clubs',
        suit: 'club',
        value: 7,
        img: '../images/clubs/clubs-r07.svg'
    },
    {
        name: 'Six of Clubs',
        suit: 'club',
        value: 6,
        img: '../images/clubs/clubs-r06.svg'
    },
    {
        name: 'Five of Clubs',
        suit: 'club',
        value: 5,
        img: '../images/clubs/clubs-r05.svg'
    },
    {
        name: 'Four of Clubs',
        suit: 'club',
        value: 4,
        img: '../images/clubs/clubs-r04.svg'
    },
    {
        name: 'Three of Clubs',
        suit: 'club',
        value: 3,
        img: '../images/clubs/clubs-r03.svg'
    },
    {
        name: 'Two of Clubs',
        suit: 'club',
        value: 2,
        img: '../images/clubs/clubs-r02.svg'
    },
    {
        name: 'Ace of Clubs',
        suit: 'club',
        value: 1,
        img: '../images/clubs/clubs-A.svg'
    },
    {
        name: 'King of Diamonds',
        suit: 'diamond',
        value: 13,
        img:'../images/diamonds/diamonds-K.svg'
        
    },
    {
        name: 'Queen of Diamonds',
        suit: 'diamond',
        value: 12,
        img: '../images/diamonds/diamonds-Q.svg'
    },
    {
        name: 'Jack of Diamonds',
        suit: 'diamond',
        value: 11,
        img: '../images/diamonds/diamonds-J.svg'
    },
    {
        name: 'Ten of Diamonds',
        suit: 'diamond',
        value: 10,
        img: '../images/diamonds/diamonds-r10.svg'
    },
    {
        name: 'Nine of Diamonds',
        suit: 'diamond',
        value: 9,
        img: '../images/diamonds/diamonds-r09.svg'
    },
    {
        name: 'Eight of Diamonds',
        suit: 'diamond',
        value: 8,
        img: '../images/diamonds/diamonds-r08.svg'
    },
    {
        name: 'Seven of Diamonds',
        suit: 'diamond',
        value: 7,
        img: '../images/diamonds/diamonds-r07.svg'
    },
    {
        name: 'Six of Diamonds',
        suit: 'diamond',
        value: 6,
        img: '../images/diamonds/diamonds-r06.svg'
    },
    {
        name: 'Five of Diamonds',
        suit: 'diamond',
        value: 5,
        img: '../images/diamonds/diamonds-r05.svg'
    },
    {
        name: 'Four of Diamonds',
        suit: 'diamond',
        value: 4,
        img: '../images/diamonds/diamonds-r04.svg'
    },
    {
        name: 'Three of Diamonds',
        suit: 'diamond',
        value: 3,
        img: '../images/diamonds/diamonds-r03.svg'
    },
    {
        name: 'Two of Diamonds',
        suit: 'diamond',
        value: 2,
        img: '../images/diamonds/diamonds-r02.svg'
    },
    {
        name: 'Ace of Diamonds',
        suit: 'diamond',
        value: 1,
        img: '../images/diamonds/diamonds-A.svg'
    },
    {
        name: 'King of Spades',
        suit: 'spade',
        value: 13,
        img:'../images/spades/spades-K.svg'
        
    },
    {
        name: 'Queen of Spades',
        suit: 'spade',
        value: 12,
        img: '../images/spades/spades-Q.svg'
    },
    {
        name: 'Jack of Spades',
        suit: 'spade',
        value: 11,
        img: '../images/spades/spades-J.svg'
    },
    {
        name: 'Ten of Spades',
        suit: 'spade',
        value: 10,
        img: '../images/spades/spades-r10.svg'
    },
    {
        name: 'Nine of Spades',
        suit: 'spade',
        value: 9,
        img: '../images/spades/spades-r09.svg'
    },
    {
        name: 'Eight of Spades',
        suit: 'spade',
        value: 8,
        img: '../images/spades/spades-r08.svg'
    },
    {
        name: 'Seven of Spades',
        suit: 'spade',
        value: 7,
        img: '../images/spades/spades-r07.svg'
    },
    {
        name: 'Six of Spades',
        suit: 'spade',
        value: 6,
        img: '../images/spades/spades-r06.svg'
    },
    {
        name: 'Five of Spades',
        suit: 'spade',
        value: 5,
        img: '../images/spades/spades-r05.svg'
    },
    {
        name: 'Four of Spades',
        suit: 'spade',
        value: 4,
        img: '../images/spades/spades-r04.svg'
    },
    {
        name: 'Three of Spades',
        suit: 'spade',
        value: 3,
        img: '../images/spades/spades-r03.svg'
    },
    {
        name: 'Two of Spades',
        suit: 'spade',
        value: 2,
        img: '../images/spades/spades-r02.svg'
    },
    {
        name: 'Ace of Spades',
        suit: 'spade',
        value: 1,
        img: '../images/spades/spades-A.svg'
    }
]

//constants of soundbites, card flipping, celebratory winnning sound

//////////////  G L O B A L  V A R I A B L E S  ////////////////
const game = document.getElementById('game-row2');
var cards = document.getElementsByClassName('card');

const column = document.getElementsByClassName('col');
const deck = document.getElementById('deck');




//////////////// S T A T E  V A R I A B L E S ////////////////
const deckArr = [];
const dealSpace = document.getElementById('deal-space');

const heartsF = document.getElementById('heartsF');
const clubsF = document.getElementById('clubsF');
const diamondsF = document.getElementById('diamondsF');;
const spadesF = document.getElementById('spadesF');;







/////////////////////  I N I T I A T E  ///////////////////////
init();

function init() {
//shuffle cards
cardsArr.sort(() => 0.5 - Math.random());

//to display 28 images on the front end & 24 in deck
var i = 0;
cardsArr.forEach(function(cardObj) {
    //iterate through card divs from HTML
    if(i < 28) {
        var cardID = "";
        i += 1;
        cardID = 'card'+i;
        //grab a div for image to be placed in
        let card = document.getElementById(`${cardID}`);
        //place images in card divs!
        let cardImg = `url(${cardObj.img})`;
        card.style.backgroundImage = cardImg;


    //images 28 - 54 go to #deck
    } else if(i >= 28) {
        i += 1;
        deckArr.push(cardObj);
    } else if(i === 52){
        return;
    }
});
}





///////////////  E V E N T  L I S T E N E R S  ///////////////


////// apply  S E L E C T  class to cards that are clicked
game.addEventListener('click', function(event) {
    //event target is 'clicked'
    let clicked = event.target
    //make it so columns cannot be clicked
    if(clicked.className === "col") {
        return;
    };
    // toggle selected class too
    clicked.classList.toggle("selected");
});



//if user selects card in column
//if applicable
//select from bottom


// if user  H O V E R S  over columns, 
// outline all cards from bottom to where mouse is
// col.addEventListener('mouseover', function(event){
//     let hovered = event.target;

//     if() {

//     }
// })


// if user clicks on deck, flip top three cards over




deck.addEventListener('click', function() {
    //grab divs for card imgs to be placed in
    // let cardD1 = document.getElementById('cardD1');
    // let cardD2 = document.getElementById('cardD2');
    // let cardD3 = document.getElementById('cardD3');


    //pop card from deck array to be placed into 3 card divs
    i = 0;
    while(i < 3) {
        i++;
        cardID = "";
        cardID = 'cardD'+i;
        //grab a card from deck
        let newCard = deckArr.pop();
        console.log(newCard);
        //grab image from that card
        let newCardImg = `url(${newCard.img})`;
        console.log(newCardImg);
        //apply image to cardD space

        let card = document.getElementById(`${cardID}`);

        console.log(cardID);
        card.style.backgroundImage = newCardImg;
        


        console.log(i);
        console.log(deckArr); 
    }
    
});

        
        // //grab a div for image to be placed in
        // let card = document.getElementById(`${cardID}`);
        // //place images in card divs!
        // let cardImg = `url(${cardObj.img})`;
        // card.style.backgroundImage = cardImg;




// when heartsF is dragged to, only ace of hearts can go there
// clubs
// diamonds
// spades

// when deck is cliked, turn top of array over to "dealSpace" pile








/////////////////////   R E N D E R   /////////////////////