import { useState } from 'react';
import Card from "./Card";


function CardStack(props) {

    const [selectedCard, setSelectedCard] = useState("");
    const [allCards, setAllCards] = useState(props.cardData.cards);

    function clickHandler(props) {
        setAllCards(allCards.splice(props.index, 0, selectedCard.shift()));
        setSelectedCard(allCards.splice(props.key, 1));
    }

    return (
        <div>
            { selectedCard != "" && <Card className="card" cardData={ selectedCard }/> }
            { allCards.map(() =>
            <Card className="cardStack" key={ index } cardData={ props.cardData } onClick={ (event) => clickHandler(event.target.props) }/>) }
        </div>
    )
}

export default CardStack;