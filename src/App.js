import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from "./components/Home";
import Details from "./components/Details";
import CreateSpot from "./components/CreateSpot";
import './custom.scss'
import './App.scss';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/spot" component={Details} />
                <Route path="/create-spot" component={CreateSpot} />
            </Switch>
            <Footer />
        </Router>
    );
}

export default App;
