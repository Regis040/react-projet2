import { FOCUSABLE_SELECTOR } from "@testing-library/user-event/dist/utils";

function Products () {

  
    const productsFromDb = [
    {
        title: "Chaussures vertes",
        price: 300,
        isPubliched: false
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
                         {product.isPubliched ?  (<><h2>{product.title}</h2> <p> {product.price} €</p></>) : (<h2>{product.title} : Ce produit n'est pas disponible</h2>) }                       
                    </article>
                );
            })}
        </main>       
    );
}
export default Products;