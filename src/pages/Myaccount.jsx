import { NavLink, Outlet } from 'react-router-dom';
import Header from '../components/Header';

function MyAccount() {
  return (
    <>
      <Header />
      <section>
        <div className='mt-[20px] mb-[40px]'>
          <nav>
            <ul className='flex justify-around'>
              <li>
                <NavLink to="login">
                  <h1 className='text-xl active'>Login</h1>
                </NavLink>
              </li>
              <li>
                <NavLink to="register">
                  <h1 className='text-xl'>Register</h1>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Outlet /> {/* Aquí cargará Login o Register según la ruta */}
        </div>
      </section>
    </>
  );
}

export default MyAccount;
