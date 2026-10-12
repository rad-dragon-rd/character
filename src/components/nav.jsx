import navLogo from '../img/icons/apex-white-nav-logo.svg'


function Nav() {
  return (
    <nav>
        <a href=""><img src={navLogo} alt=""/></a>
        <div>
            <a href="" className="nav-img">инфо</a>
            <a href="" className="nav-img">способности</a>
            <a href="" className="nav-img">издание</a>
        </div>
    </nav>
  );
}

export default Nav;