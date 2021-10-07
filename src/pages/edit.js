import React, { Component } from 'react';
import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";

export default class EditPage extends Component {


    state = {
        id: '',
        redirect: false,
        isLoading: false
    };

    componentDidMount() {
        const id = this.props.location.search[4];
        axios.get('https://absensi-e2899-default-rtdb.firebaseio.com/karyawan.json' + id,)
            .then(response => {
                const emp = response.data.employee;
                this.setState({id: emp.id });
                document.getElementById('inputnama').value = emp.nama;
                document.getElementById('inputnik').value = emp.nik;
                document.getElementById('inputnohp').value = emp.nohp;
                document.getElementById('inputemail').value = emp.email;
                document.getElementById('inputpassword').value = emp.password;
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
        
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({isLoading: true});
        const token = localStorage.getItem('token');
        const url = 'https://absensi-e2899-default-rtdb.firebaseio.com/karyawan.json'+ this.state.id;
        const name = document.getElementById('inputName').value;
        const phone = document.getElementById('inputPhone').value;
        const email = document.getElementById('inputEmail').value;
        const location = document.getElementById('inputLoca').value;
        const empid = document.getElementById('inputEmpId').value;
        const company = document.getElementById('inputComp').value;
        axios.put(url, { name: name, phone: phone, email:email, location:location, emp_id:empid, company:company, token:token })
            .then(result => {
                if (result.data.status) {
                    this.setState({redirect: true, isLoading: false})
                }
            })
            .catch(error => {
                this.setState({ toDashboard: true });
                console.log(error);
            });
    };

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/dashboard' />
        }
    };


    render() {
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
                                                    id="inputnama"
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
                                                    id="inputnik"
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
                                                    id="inputnohp"
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
                                                    id="inputemail"
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
                                                    id="inputpassword"
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


