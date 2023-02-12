import React, { Component } from "react";
import '../custom.scss'
import Spot from "./Spot";
import axios from "axios";
import Spots from "./Spots";


class Home extends Component {
    state = {
        spots: []
    }

    componentDidMount = async () => {
        await this.processGetAxiosCall()
    }

    processGetAxiosCall = async () => {
        axios.get('http://localhost:8080/spots')
            .then(res => {
                this.setState({ spots: res.data });
            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }

    handleSpot = id => {
        const spots = this.state.spots;
        const isSpot = (element) => element['id'] == id;
        const index = spots.findIndex(isSpot)

        if (index == -1) {
            return;
        }

        this.props.history.push({ pathname: '/spot', state: { spot: spots[index] } });
    }

    handlePriceSort = ({ target }) => {
        const { spots } = this.state

        if (target.value == 'high') {
            spots.sort((a, b) => b.price - a.price);
        } else {
            spots.sort((a, b) => a.price - b.price);
        }

        this.setState({ spots: spots })
    }

    render() {
        return (
            <div className="App">
                <section className="hero">
                    <div className="container">
                        <div className="hero-content">
                            <h1>Rent safe and private dog parks hosted by locals in Seattle, Washington</h1>
                            <p>Sniffspot's private dog parks are the best way to exercise your dog. We have the best variety and the best priced dog parks anywhere!</p>
                            <button type="button" className="btn explore-button">Become a Host
                            </button>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row center mx-4 my-4">
                            <h2 className="mb-3 text-center">Popular private dog parks near Seattle, Washington</h2>
                        </div>
                        <div className="row justify-content-end mx-1 my-3">
                            <select className="col-3 price-sort" onChange={this.handlePriceSort}>
                                <option value="0">Sort By Price</option>
                                <option value="high">Price: High to Low</option>
                                <option value="low">Price: Low to High</option>
                            </select>
                        </div>

                        <Spots onAnySpotClicked={this.handleSpot} spots={this.state.spots} />
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;
