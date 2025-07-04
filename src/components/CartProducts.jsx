import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faBookmark } from '@fortawesome/free-solid-svg-icons'

function CartProducts() {
    return (
        <>
        <div className="bg-gray-100 rounded shadow-lg">
                    <div className="flex justify-between p-4">
        
                    <div>
                    <img src="https://placehold.co/80" alt="" />
                    <div className="flex">
                        <button>+</button>
                        <input className="text-center w-[60px]" type="text" placeholder="1" value={1}/>
                        <button>-</button>
                    </div>
                    </div>
        
                    <div>
                        <div className="flex">
                            <div className='pr-4'>
                                <span>Nombre del producto</span>
                                <p>Nombre vendedor</p>
                            </div>
                            <div className="flex flex-col">
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                                <button><FontAwesomeIcon icon={faBookmark} /></button>
                            </div>
                        </div>
        
                        <div>
                         <h2>$ 2.000</h2>
                        </div>
                    </div>
        
                    </div>
        
        
                    
        
        
                </div>
        
        </>
    )
    
}

export default CartProducts;