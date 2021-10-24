import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Singup = () => {
    return (
        <Fragment>
            <div id="signupbox" className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <div className="panel panel-info" style={{marginTop:"80px"}}>
                    <div className="panel-heading">
                        <div className="panel-title">Sign Up</div>
                        <div style={{ float: 'right', fontSize: '85%', position: 'relative', top: '-10px' }}><Link to="/" id="signinlink" onclick="$('#signupbox').hide(); $('#loginbox').show()">Sign In</Link></div>
                    </div>
                    <div className="panel-body">
                        <form id="signupform" className="form-horizontal" role="form">
                            <div id="signupalert" style={{ display: 'none' }} className="alert alert-danger">
                                <p>Error:</p>
                                <span />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="col-md-3 control-label">Email</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="firstname" className="col-md-3 control-label">Name</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="firstname" placeholder="First Name" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password" className="col-md-3 control-label">Password</label>
                                <div className="col-md-9">
                                    <input type="password" className="form-control" name="passwd" placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="icode" className="col-md-3 control-label">Phone</label>
                                <div className="col-md-9">
                                    <input type="text" className="form-control" name="icode" placeholder />
                                </div>
                            </div>
                            <div className="form-group">
                                {/* Button */}
                                <div className="col-md-offset-3 col-md-9">
                                    <button id="btn-signup" type="button" className="btn btn-info"><i className="icon-hand-right" /> &nbsp; Sign Up</button>
                                    {/* <span style={{ marginLeft: '8px' }}>or</span> */}
                                </div>
                            </div>
                            {/* <div style={{ borderTop: '1px solid #999', paddingTop: '20px' }} className="form-group">
                                <div className="col-md-offset-3 col-md-9">
                                    <button id="btn-fbsignup" type="button" className="btn btn-primary"><i className="icon-facebook" /> &nbsp; Sign Up with Facebook</button>
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Singup