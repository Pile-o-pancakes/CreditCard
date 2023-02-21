import ChipIcon from "./ChipIcon";

import VendorLogo from "./VendorLogo";
import CardNumber from "./CardNumber";
import CardOwner from "./CardOwner";
import ExpireDate from "./ExpireDate";

import "./../styles/card.css";

function Card(props) {

    const selectedCard = props.cardData;

    return (
        <div className="card">
            <div className="cardTop">
                <ChipIcon color={ selectedCard.vendorID }/>
                <VendorLogo vendor={ selectedCard.vendorID }/>
            </div>
            <div className="cardMiddle">
                <CardNumber cardNumber={ selectedCard.cardNumber }/>
            </div>
            <div className="cardBottom">
                <p>CARDHOLDER NAME</p>
                <CardOwner cardOwner={ selectedCard.cardOwner }/>
                <p>VALID THRU</p>
                <ExpireDate expireDate={ selectedCard.expireDate }/>
            </div>
        </div>
    )
}

export default Card;