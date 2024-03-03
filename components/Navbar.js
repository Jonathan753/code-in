import Link from 'next/link'
import Image from 'next/image';
import styles from "../styles/navbar.module.css";


export default function Navbar() {

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Link href="/">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={45}
                        height={45}
                        priority
                    />
                </Link>
            </div>
            <div className={styles.navButtons}>
                <Link href="/">
                    <p className={styles.link}>Inicio</p>
                </Link>
                <Link href="/client">
                    <p className={styles.link}>Clientes</p>
                </Link>
            </div>
        </nav>
    );
}
