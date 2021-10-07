import React, { Component } from 'react';
import Header from "../elements/header";
import Sidebar from "../elements/sidebar";
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';

export default class Index extends Component {
    state = {
        persons: [],
        id: '',
      }
    
    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    componentDidMount() {
        axios.get(`https://absensi-e2899-default-rtdb.firebaseio.com/karyawan.json`)
          .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }
    
    handleClickDelete = event => {
        event.preventDefault();

        axios.delete(`https://absensi-e2899-default-rtdb.firebaseio.com/karywan.json/${this.state.id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
      };

    render() {
        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <Header/>
                <div id="wrapper">
                    <Sidebar/>
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">CRUD App</li>
                                <li className="ml-auto"><Link to={'add'}>Add Employee</Link></li>
                            </ol>
                            <div className="card mb-3">
                                <div className="card-header"><i className="fas fa-table"></i>
                                    &nbsp;&nbsp;Employees List
                                </div>
                                <div className="card-body">
                                    <table className="table table-bordered">
                                        <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>Nama</th>
                                            <th>NIK</th>
                                            <th>No Hp</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {Object.values(this.state.persons).map((persons , index)=>
                                                <tr key={persons.id} >
                                                    <td name="id" onChange={this.handleChange}>{index + 1}</td>
                                                    <td>{persons.nama}</td>
                                                    <td>{persons.nik}</td>
                                                    <td>{persons.nohp}</td>
                                                    <td >{persons.email}</td>
                                                    <td>{persons.password}</td>
                                                    <td className="text-center">
                                                        <Link className="btn btn-sm btn-info" to={{ pathname: 'edit', search: '?id=' + persons.id }}>Edit</Link>
                                                        &nbsp; | &nbsp;
                                                        <button value={persons.id} className="btn btn-sm btn-danger" onClick={this.handleClickDelete} >Delete</button>
                                                    </td>
                                                </tr>)
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
