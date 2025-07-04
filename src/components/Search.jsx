import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'


function Search() {
    return (
        <>
         <div className='text-center'>
                            <form action="">
                                <input className='bg-white rounded-s-md w-[288px] h-[35px] pl-[25px]' type="text" placeholder='Buscar..'/>
                                <button className='bg-gray-950 rounded-e-md text-white w-[55px] h-[35px]' type="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                            </form>
                           
                        </div>
        
        </>
    )
    
}

export default Search;