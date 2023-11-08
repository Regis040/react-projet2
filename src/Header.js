function Header () {


    const isUserLogged = false;


    return (
        <header>
            <h1>Mon Titre 1 sur mon Header</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    {isUserLogged ?  <li>Régis JOUAN</li> : <li>Veuillez vous connecter </li>}
                
                    
                </ul>
            </nav>
        </header>
    );
}
export default Header;