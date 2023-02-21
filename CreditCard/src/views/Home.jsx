import "./../styles/homePage.css";
import CardStack from "./../components/CardStack";

function Home(props) {

    return (
        <div className="homePage">
            <CardStack cardData={ props.cardData } setCardData={ props.setCardData }/>
            <a  className="toAddCard" href="/addcard">
                Lägg till Nytt kort
            </a>
        </div>
    )
}

export default Home;