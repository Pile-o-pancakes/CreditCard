
function NavButton(props) {

    return (
        <a href={ props.href }>
            <button>Tillbaka till { props.prevPage }</button>
        </a>
    )
}

export default NavButton;