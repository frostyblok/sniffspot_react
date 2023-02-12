import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="flex-nav">
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className="column-xs-8 column-md-6">
                            <ul>
                                <Link to={"/"}>
                                    <li className="logo-name">Sniffspot</li>
                                </Link>
                                <li className="nav-item"><a href="#">Our dog parks</a></li>
                                <li className="nav-item"><a href="#">Blog</a></li>
                                <li className="nav-item"><a href="#">Top dog trainers</a></li>
                                <Link to={"/create-spot"}>
                                    <li>Become a Host</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="column-xs-4 column-md-6">
                            <ul>
                                <li className="nav-item logo">Signin</li>
                                <li className="nav-item"><a href="#">Join for free!</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default NavBar;
