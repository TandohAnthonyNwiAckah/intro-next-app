import Link from "next/link";

const AuthLayout = ({ children }) => {
  return (
    <>
      <nav>
        <h1>Intro Next App</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/signin">Sign in</Link>
      </nav>

      {children}
    </>
  );
};

export default AuthLayout;
