function Header () {

    const isUserLogged = true;
    const itemsInCart = 5;
    const userLogged = {
        lastName: "Regis",
        firstName :"JOUAN",
        job:"HerosBeing",        
    };

    return (
        <header>
            <h1>Mon Titre 1 sur mon Header</h1>
            <nav>
                <ul>
                    {isUserLogged ?  <li>{userLogged.lastName} - {userLogged.firstName} the {userLogged.job} </li> : <li>Veuillez vous connecter </li>}

                    <li>Home</li>
                    <li>Products</li>

                    {itemsInCart > 0 ? <li>Cart : {itemsInCart} </li> : <li>Pas d'items au panier</li>}
                </ul>
            </nav>
        </header>
    );
}
export default Header;