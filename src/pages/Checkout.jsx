function Checkout() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Checkout</h1>
            <p className="text-lg mb-6">Gracias por tu compra. Tu pedido ha sido procesado con éxito.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Volver a la tienda
            </button>
        </div>
    );
    
}       

export default Checkout;