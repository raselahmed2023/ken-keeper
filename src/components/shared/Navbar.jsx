import Link from 'next/link';
import NavLinks from '../Nav/NavLinks';
import Logo from "../../assets/logo.png"
import Image from 'next/image';


const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-4 bg-base-100 shadow-sm">
            <Link href="/" className="font-bold text-lg">
                <Image src={Logo} width={100} height={100}></Image>
            </Link>
            <NavLinks></NavLinks>
        </nav>
    );
};

export default Navbar;