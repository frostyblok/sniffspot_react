import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Rater from "react-rater";
import Comment from "./Comment";
import FormInput from "./FormInput";
import axios from "axios";
import Spot from "./Spot";

class Reviews extends Component {
    state = {
        show: false,
        comment: '',
        rating: 0,
        comments: [],
        spotId: '',
        spotName: '',
        averageRating: 0
    }

    componentDidMount = () => {
        const { spotId, spotName, comments } = this.props
        this.setState({ spotId: spotId, spotName: spotName, comments: comments })
    }

    componentDidUpdate = async (prevProps, prevState) => {
        if ((this.state.comments.length !== prevState.comments.length)) {
            const { day, duration } = this.state;
            await this.processGetAxiosCall()
        }
    }

    handleClose = () => {
        this.setState({ show: false })
    }

    handleShow = () => {
        this.setState({ show: true })
    }

    handleChange = (value) => {
        this.setState({ comment: value })
    }

    handleRate = value => {
        this.setState({ rating: value.rating })
    }

    addReview = async () => {
        const { rating, comment, spotId } = this.state;
        const data = new FormData();
        data.append('rating', rating.toString())
        data.append('content', comment)
        data.append('spot_id', spotId)

        this.setState({ show: false })
        await this.processPostAxiosCall(data)
    }

    processPostAxiosCall = async (params) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/spots/${this.state.spotId}/reviews`, params)
            .then(res => {
                if (res.status == 201) {
                    this.setState({ comments: res.data['reviews'], averageRating: res.data['average_ratings'] });
                }
            })
            .catch(({message}) => {
                console.log(message)
                alert('There was an error while saving data')
            })
    }

    processGetAxiosCall = async () => {
        axios.get( `${process.env.REACT_APP_BACKEND_URL}/spots/${this.state.spotId}/reviews`)
            .then(res => {
                if (res.status == 200) {
                    this.setState({ comments: res.data['reviews'], averageRating: res.data['average_ratings'] });
                }

            })
            .catch(() => {
                alert('There was an error while retrieving the data')
            })
    }

    render() {
        const { comments, averageRating } = this.state
        return (
            <div className="details-reviews">
                <div className="d-flex justify-content-between">
                    <div className="d-flex mt-5">
                        <div className="average-rating"><Rater rating={averageRating} total={5} interactive={false} /> {averageRating}</div>
                        <div className="total-rating mx-3">({comments.length})</div>
                    </div>
                    <div className="mt-5">
                        <Button variant="primary" onClick={this.handleShow}>
                            Add Review
                        </Button>

                        <Modal show={this.state.show} onHide={this.handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Review</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div className="rating-modal">
                                    <label className="rating-label">Rating</label>
                                    <Rater onRate={this.handleRate} />
                                    <FormInput
                                        name="comment"
                                        label="Comment"
                                        value={this.state.comment}
                                        handleInputChange={this.handleChange}
                                    />
                                </div>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={this.addReview}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

                <div className="row my-5">
                    <div className="col-12 col-sm-8">
                        {comments.map((comment, index) => (
                            <Comment comment={comment} key={index} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Reviews;
