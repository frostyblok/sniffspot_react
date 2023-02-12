import React, { Component } from "react";
import axios from "axios";
import { Oval } from 'react-loader-spinner'
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import FormFile from "./FormFile";

class CreateSpot extends Component {
    state = {
        title: '',
        description: '',
        price: '',
        imageList: [],
        loading: false
    }

    handleChange = (value, name) => {
        this.setState({ [name]: value })
    }

    onFileChange = (files) => {
        this.setState(({
            imageList: [...this.state.imageList, files[0]]
        }))
    }

    createSpot = async () => {
        this.setState({ loading: true })
        const { title, description, price, imageList } = this.state;
        const data = new FormData();
        for (var i = 0; i < imageList.length; i++) {
            data.append('images[]', imageList[i]);
        }
        data.append('title', title)
        data.append('description', description)
        data.append('price', price)
        this.processPostAxiosCall(data)
    }

    processPostAxiosCall = (params) => {
        axios.post('http://localhost:8080/spots', params)
            .then(res => {
                if (res.status == 201) {
                    this.props.history.push({ pathname: '/', state: { spots: res.data } });
                }
            })
            .catch(({message}) => {
                console.log(message)
                alert('There was an error while saving data')
            })

        this.setState({ loading: false })
    }

    render() {
        const { loading } = this.state;
        return (
            <div className="container">
                <section className="row justify-content-center">
                    <div className="col-12">
                        <h3 className="panel-title text-center">Create Spot</h3>
                    </div>
                    <div className="col-6">

                        <FormInput
                            name="title"
                            label="Title"
                            value={this.state.title}
                            handleInputChange={this.handleChange}
                        />
                        <FormTextArea
                            name="description"
                            label="Description"
                            value={this.state.description}
                            handleInputChange={this.handleChange}
                        />
                        <FormInput
                            name="price"
                            label="Price"
                            value={this.state.price}
                            handleInputChange={this.handleChange}
                        />
                        <FormFile name="images" lable="images" handleFileChange={this.onFileChange} />
                        <div className="form-group">
                            <div className="col-sm-offset-3 col-sm-12 d-flex create-spot-action">
                                <button type="submit" className="btn btn-primary w-50 my-3" disabled={loading} onClick={this.createSpot}>Create</button>
                                {loading && <Oval
                                    height={40}
                                    width={40}
                                    color="#4fa94d"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true}
                                    ariaLabel='oval-loading'
                                    secondaryColor="#4fa94d"
                                    strokeWidth={2}
                                    strokeWidthSecondary={2}

                                />}
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default CreateSpot;
