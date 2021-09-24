import React, {Component} from 'react';
// import axios from 'axios';
import {Link, Redirect} from 'react-router-dom';
// import TitleComponent from "./title";
import "./login.module.css";

export default class Login extends Component {
    render() {
        return (
            <div className="form">
              <div class="tab-content">
                <div id="login">
                  <form action="/" method="post" style={{"max-width": "800px", "backgroundColor": "rgba(104, 104, 104, 0.9)", "margin": "40px auto"}}>
                    <div className="field-wrap">
                    <h1>Login Absensi Yuk</h1>
                      <div className="form-group row">
                        <label for="staticEmail" class="col-sm-2 col-form-label" style={{"color": "white"}}>
                          Email
                        </label>
                        <div className="col-sm-10">
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
                        <label for="staticEmail" className="col-sm-2 col-form-label" style={{"color": "white"}}>
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
        
                    <Link to="/dashboard">
                      <button type="submit" className="button button-block">
                        Login
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          )
    }
}


