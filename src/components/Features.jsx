import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Features() {
    return (
        <div className='borde m-[15px]'>
            <ul className='p-[30px]'>
               <li className='flex gap-4 items-center mb-[30px]'> 
                    <span className='text-yellow-400 text-4xl'><FontAwesomeIcon icon={faEnvelope} /></span>
                     <div>
                        <h2 className='text-xl font-bold'>Lorem ipsum</h2>
                        <p className='font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
                <li className='flex gap-4 items-center mb-[30px]'>
                    <span className='text-yellow-400 text-4xl'><FontAwesomeIcon icon={faEnvelope} /></span>
                     <div>
                        <h2 className='text-xl font-bold'>Lorem ipsum</h2>
                        <p className='font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
                <li className='flex gap-4 items-center mb-[30px]'>
                    <span className='text-yellow-400 text-4xl'><FontAwesomeIcon icon={faEnvelope} /></span>
                     <div>
                        <h2 className='text-xl font-bold'>Lorem ipsum</h2>
                        <p className='font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
                <li className='flex gap-4 items-center mb-[30px]'>
                    <span className='text-yellow-400 text-4xl'><FontAwesomeIcon icon={faEnvelope} /></span>
                     <div>
                        <h2 className='text-xl font-bold'>Lorem ipsum</h2>
                        <p className='font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
                <li className='flex gap-4 items-center mb-[30px]'>
                    <span className='text-yellow-400 text-4xl'><FontAwesomeIcon icon={faEnvelope} /></span>
                     <div>
                        <h2 className='text-xl font-bold'>Lorem ipsum</h2>
                        <p className='font-light'>Lorem ipsum dolor sit amet</p>
                    </div>
                </li>
                
            </ul>
        </div>
    );  
    
}

export default Features;