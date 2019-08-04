console.log('sanity');

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

//grab gameboard
const game = document.getElementById('game-row2');

//grab card class
const cards = document.getElementsByClassName('card');


//test displaying one card on front-end
const cardOne = document.getElementById('card1');
const test = cardsArr[0].img;
cardOne.style.backgroundImage = `url(${cardsArr[0].img})`


//to display images on the front end
//for each item in the cardsArr
var i = 0;

cardsArr.forEach(function(item) {
    //iterate through cards from HTML
    do{
        cardID = "";
        i++;
        cardID = 'card'+i;
    }
    while(i <= 0);
    console.log(cardID);

    //grab a div to be placed in
    const card = document.getElementById(cardID);
    
    //place images in card divs!
    card.style.backgroundImage = `url(${item.img})`
    console.log(card);
});
    



//constants of soundbites, card flipping, celebratory winnning sound


//State variables --> what you have to keep track of 
//top card of destination pile 
//bottom card of moving pile