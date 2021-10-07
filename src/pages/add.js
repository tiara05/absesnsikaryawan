import React, {Component} from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';
import { trackPromise } from "react-promise-tracker";
import { toast } from "react-toastify";


export default class AddPage extends Component {

    state = {
        results: [],
        nama: "",
        nik: "",
        nohp: "",
        email: "",
        password: "",
        modalIsOpen: false,
        redirect: false,
        toDashboard: false,
        isLoading: false,
    };

    handleChange = event => {
        this.setState(
            { nama: document.getElementById("nama").value ,
            nik: document.getElementById("nik").value ,
            nohp: document.getElementById("nohp").value ,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value }
        );
    }

    handleSubmit = (e) => {
        e.preventDefault();
    
        const Data = {
          nama: this.state.nama,
          nik: this.state.nik,
          nohp: this.state.nohp,
          email: this.state.email,
          password: this.state.password,
        };
        
        trackPromise(
        axios.post("https://absensi-e2899-default-rtdb.firebaseio.com/karyawan.json", Data).then((response) => {
            console.log(response);
    
            const results = [
              ...this.state.results,
              { ...Data, id: response.data.name },
            ];
    
            this.setState({
                results: results,
                nama: "",
                nik: "",
                nohp: "",
                email: "",
                password: "",
            });

            toast.success("You added a new entry!");
          })
        );
      };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    };

    render() {
        const isLoading = this.state.isLoading;
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
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
                                <li className="breadcrumb-item active">Add</li>
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
                                                    id="nama"
                                                    type="text"
                                                    class="form-control"
                                                    name="nama"
                                                    value={this.nama}
                                                    onChange={this.handleChange}
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
                                                    id="nik"
                                                    type="text"
                                                    class="form-control"
                                                    name="nik"
                                                    value={this.nik}
                                                    onChange={this.handleChange}
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
                                                    id="nohp"
                                                    type="number"
                                                    class="form-control"
                                                    name="nohp"
                                                    value={this.nohp}
                                                    onChange={this.handleChange}
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
                                                    id="email"
                                                    type="text"
                                                    class="form-control"
                                                    value={this.email}
                                                    onChange={this.handleChange}
                                                    name="email"
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
                                                    id="password"
                                                    type="password"
                                                    class="form-control"
                                                    value={this.password}
                                                    name="password"
                                                    onChange={this.handleChange}
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-primary btn-block" type="submit" disabled={this.state.isLoading ? true : false}>Add Employee &nbsp;&nbsp;&nbsp;
                                            {isLoading ? (
                                                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                ) : (
                                                <span></span>
                                            )}
                                        </button>
                                    </form>
                                    {this.renderRedirect()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}