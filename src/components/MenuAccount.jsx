import { Link} from 'react-router-dom';

function MenuAccount() {
    return (
        <>
        <nav>
                    <ul>
                        <li><Link to="/login"><h1>Login</h1></Link>
                            </li>
                        <li><Link to="/register"><h1>Register</h1></Link>
                            
                        </li>
                    </ul>
                </nav>
        
        </>
    )
    
} export default MenuAccount;