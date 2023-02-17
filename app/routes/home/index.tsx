import { Link } from "@remix-run/react";

export default function HomePage() {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to={"/"}>Back to Login Page</Link>
    </div>
  );
}
