import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class EditPage extends Component {

    render() {
        // const isLoading = this.state.isLoading;
        // if (this.state.toDashboard === true) {
        //     return <Redirect to='/' />
        // }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar></Sidebar>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Edit</li>
                            </ol>
                        </div>
                        <div className="container-fluid">
                            <div className="card mx-auto">
                                <div className="card-header">Employee Add</div>
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="field-wrap">
                                            <div className="form-group row" >
                                                <label for="staticEmail" className="col-sm-2 col-form-label">
                                                Nama
                                                </label>
                                                <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="staticEmail"
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <div className="form-group row">
                                                <label for="staticEmail" className="col-sm-2 col-form-label">
                                                NIK
                                                </label>
                                                <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="staticEmail"
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <div className="form-group row">
                                                <label for="staticEmail" className="col-sm-2 col-form-label">
                                                No HP
                                                </label>
                                                <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="staticEmail"
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <div className="form-group row">
                                                <label for="staticEmail" className="col-sm-2 col-form-label">
                                                Email
                                                </label>
                                                <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="staticEmail"
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field-wrap">
                                            <div className="form-group row">
                                                <label for="staticEmail" className="col-sm-2 col-form-label">
                                                Password
                                                </label>
                                                <div class="col-sm-10">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="staticEmail"
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" >Add Employee &nbsp;&nbsp;&nbsp;
                                            {/* {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                             ) : (
                                                 <span></span>
                                             )} */}
                                        </button>
                                    </form>
                                    {/* {this.renderRedirect()} */}
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        );
    }
}


