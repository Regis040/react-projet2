function Products () {

  
    const productsFromDb = [
        {
        title: "Chaussures vertes",
        price: 300,
        isPubliched: true
    },
    {
        title: "Chaussettes rouges",
        price: 100,
        isPubliched: true
    },
    {
        title: "Lacets bleus",
        price: 20,
        isPubliched: true
    },
    {
        title: "Oeillets jaunes",
        price:80,
        isPubliched: true
    },
    ];

    return (
        <main class="mainstyle">


            {productsFromDb.map((product) => {
                return (
                    <article>
                        <>
                            <h2>{product.title}</h2>
                            <p>{product.price} €</p>
                       </>
                    </article>
                );
            })}
        </main>       
    );
}
export default Products;