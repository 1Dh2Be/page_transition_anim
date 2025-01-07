import { Link } from "react-router";

const Nav = () => {
  return (
    <nav className="flex justify-between pt-3">
      <div>
        <h2>
          <Link to="/">CodeAnim</Link>
        </h2>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>
            <Link to="home">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
