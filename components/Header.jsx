import { Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/auth';

export default function Header() {
    const { user } = useAuth()
    return (
        <Navbar fluid rounded>
            <Link to="/">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">LOGO</span>
            </Link>
            <Navbar.Toggle />

            <Navbar.Collapse>
                <Link to="/" active>
                    Home
                </Link>

                {user?.email ?
                    <>
                    </>
                    :
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                }

            </Navbar.Collapse>
        </Navbar>
    );
}
