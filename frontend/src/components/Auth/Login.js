import React, { Fragment} from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Fragment>
            <div className="container">
                <div id="loginbox" style={{ marginTop: '50px' }} className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                    <div className="panel panel-info">
                        <div className="panel-heading">
                            <div className="panel-title">Sign In</div>
                            <div style={{ float: 'right', fontSize: '80%', position: 'relative', top: '-10px' }}><a href="#">Forgot password?</a></div>
                        </div>
                        <div style={{ paddingTop: '30px' }} className="panel-body">
                            <div style={{ display: 'none' }} id="login-alert" className="alert alert-danger col-sm-12" />
                            <form id="loginform" className="form-horizontal" role="form">
                                <div style={{ marginBottom: '25px' }} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user" /></span>
                                    <input id="login-username" type="text" className="form-control" name="username" defaultValue placeholder="username or email" />
                                </div>
                                <div style={{ marginBottom: '25px' }} className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-lock" /></span>
                                    <input id="login-password" type="password" className="form-control" name="password" placeholder="password" />
                                </div>
                                <div className="input-group">
                                    <div className="checkbox">
                                        <label>
                                            <input id="login-remember" type="checkbox" name="remember" defaultValue={1} /> Remember me
                                        </label>
                                    </div>
                                </div>
                                <div style={{ marginTop: '10px' }} className="form-group">
                                    {/* Button */}
                                    <div className="col-sm-12 controls">
                                        <a id="btn-login" href="#" className="btn btn-success">Login</a>
                                        {/* <a id="btn-fblogin" href="#" className="btn btn-primary">Login with Facebook</a> */}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-md-12 control">
                                        <div style={{ borderTop: '1px solid#888', paddingTop: '15px', fontSize: '85%' }}>
                                            Don't have an account!
                                            <Link to ="/singup">
                                                Sign Up Here
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}


export default Login