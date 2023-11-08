function Products () {

    const productsFromDb = [
        "Produit 1", "Produit 2", "Produit 3"
    ];

    return (
        <main class="mainstyle">
            {productsFromDb.map((product) => {
            return (
                <article>
                    <h2>{product}</h2>
                </article>
            );
            })}
        </main>       
    );
}
export default Products;