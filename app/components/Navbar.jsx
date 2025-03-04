import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="logo"
        width={70}
        placeholder="blur"
        quality={100}
      />

      <h1>Intro Next App</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">All Tickets</Link>
      <Link href="/tickets/create">Create New</Link>
    </nav>
  );
}
