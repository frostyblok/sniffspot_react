import React, { Component } from 'react';
import 'react-rater/lib/react-rater.css'
import Reviews from "./Reviews";
import Product from "./Product";

class Details extends Component {
    componentDidMount = () => {
        const state = Object.keys(this.props.location.state).length > 0 ? this.props.location.state : this.state
        const { spot } = state;

        this.setState({ spot: spot })
    }

    render() {
        return (
            <div className="container">
                {this.state && <Product spot={this.state.spot} />}
                {this.state && <Reviews
                    spotId={this.state.spot['id']}
                    comments={this.state.spot['reviews']}
                    averageRating={this.state.spot['average_ratings']}
                />}
            </div>
        );
    }
}

export default Details;
