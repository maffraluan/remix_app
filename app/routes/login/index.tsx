import { Link } from "@remix-run/react";

export default function LoginPage() {
  return (
    <div>
      <h2>Login Page</h2>
      <Link to={"/home"}>Home Page</Link>
    </div>
  );
}
