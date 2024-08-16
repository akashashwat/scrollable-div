import { Link } from "react-scroll";

const duration = 500;

export default function Navigation() {
  return (
    <div className="navigation">
      <Link activeClass="active" to="tab1" spy smooth duration={duration}>
      Dropshipping Challenge
      </Link>
      <Link activeClass="active" to="tab2" spy smooth duration={duration}>
      Creator Challenge
      </Link>
      <Link activeClass="active" to="tab3" spy smooth duration={duration}>
      Local Consulting Challenge
      </Link>
      <Link activeClass="active" to="tab4" spy smooth duration={duration}>
      CXO Mentorship Programme
      </Link>
    </div>
  );
}
