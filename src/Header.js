function Header () {

    const isUserLogged = true;
    const itemsInCart = 2;

    return (
        <header>
            <h1>Mon Titre 1 sur mon Header</h1>
            <nav>
                <ul>
                    {isUserLogged ?  <li>Régis JOUAN</li> : <li>Veuillez vous connecter </li>}     

                    <li>Home</li>
                    <li>Products</li>

                    {itemsInCart > 0 ? <li>Cart : {itemsInCart} </li> : <li>Pas d'items au panier</li>}
                </ul>
            </nav>
        </header>
    );
}
export default Header;