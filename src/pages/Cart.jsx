import { Link } from 'react-router-dom';
import CartProducts from "../components/CartProducts";

function Cart() {
    return (
        <>
        <section className="m-auto w-[375px]">
        <CartProducts />
        <div className="bg-gray-100 rounded shadow-lg mt-4 p-4">
            <h1>Resumen de compra</h1>
            <div className="flex justify-between mb-2">
            <h1>Total:</h1>
            <p>$ 2.000</p>
             </div>
             <Link to="/checkout"> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">Continuar con la compra</button></Link>

        </div>

        </section>
        
        </>
    )
    
}


export default Cart;