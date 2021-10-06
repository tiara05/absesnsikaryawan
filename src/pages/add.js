import React, {Component} from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link} from "react-router-dom";
import axios from 'axios';
import { trackPromise } from "react-promise-tracker";

export default class AddPage extends Component {

    state = {
        results: [],
        nama: "",
        nik: "",
        nohp: "",
        email: "",
        password: "",
        modalIsOpen: false,
    };
    
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
          })
        );
      };

    render() {
        const { nama, nik, nohp, email, password } = this.props;
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
                                                    type="text"
                                                    class="form-control"
                                                    name="nama"
                                                    value={nama}
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
                                                    type="text"
                                                    class="form-control"
                                                    value={nik}
                                                    name="nik"
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
                                                    type="number"
                                                    class="form-control"
                                                    name="nohp"
                                                    value={nohp}
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
                                                    type="email"
                                                    class="form-control"
                                                    value={email}
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
                                                    type="password"
                                                    class="form-control"
                                                    name="password"
                                                    value={password}
                                                    onChange={this.handleChange}
                                                    required
                                                ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <input type="submit"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
