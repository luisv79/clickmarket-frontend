import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'




function Footer() {
    return(
        <>
        
<footer>
    <div>
        <div className="mb-[65px]">
            <img className="w-[50px] mb-[44px]" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente repellendus.</p>
            <div className="mt-[44px]">
                <ul className="flex justify-between">
                    <li><FontAwesomeIcon icon={faFacebookF} /></li>
                    <li><FontAwesomeIcon icon={faInstagram} /></li>
                    <li><FontAwesomeIcon icon={faTiktok} /></li>
                </ul>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-[2rem]">

            <div>
                <div>
                    <h3 className="font-bold">Solutions</h3>
                    <ul>
                        <li>Solution 1</li>
                        <li>Solution 2</li>
                        <li>Solution 3</li>
                        <li>Solution 4</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Support</h3>
                    <ul>
                        <li>Suport 1</li>
                        <li>Suport 2</li>
                        <li>Suport 3</li>
                        <li>Suport 4</li>
                    </ul>
                </div>
            </div>

            <div>
                <div>
                    <h3 className="font-bold">Company</h3>
                    <ul>
                        <li>Solution 1</li>
                        <li>Solution 2</li>
                        <li>Solution 3</li>
                        <li>Solution 4</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold">Legal</h3>
                    <ul>
                        <li>Suport 1</li>
                        <li>Suport 2</li>
                        <li>Suport 3</li>
                        <li>Suport 4</li>
                    </ul>
                </div>
            </div>

        </div>

    </div>

    <div>

        <p>© 2023 Your Company Name. All rights reserved.</p>
    </div>
  
</footer>

        
        </>
    )
    
}

export default Footer;