import React from 'react'

class Register extends React.Component {
    constructor(props) {
        super(props)

    }

  render() {

    return(
        <React.Fragment>
            <div className="authentication-wrapper authentication-3">
                <div className="authentication-inner">
                    {/* <!-- Side container --> */}
                    {/* <!-- Do not display the container on extra small, small and medium screens --> */}
                    <div className="d-none d-lg-flex col-md-12 align-items-center ui-bg-cover ui-bg-overlay-container p-5" style={{backgroundImage: "url('assets/img/bg/Pool2.jpg')"}}>
                      <div className="ui-bg-overlay opacity-"></div>

                      {/* <!-- Text --> */}
                      <div className="w-100 text-white px-5">
                        <h1 className="display-2 font-weight mb-1">Register Your Account
                        </h1>
                        {/* <div className="text-large font-weight-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula ex eu gravida faucibus. Suspendisse viverra pharetra purus. Proin fringilla ac lorem at sagittis.Proin tincidunt dui et nunc ultricies dignissim.
                        </div> */}
                        {/* <!-- Form container --> */}
                    <div className="align-items-center p-1">
                      {/* <!-- Inner container --> */}
                      {/* <!-- Have to add `.d-flex` to control width via `.col-*` classes --> */}
                      <div className="d-flex col-md-5 px-0 px-xl-4 mx-auto">
                        <div className="w-100">

                          {/* <!-- Logo --> */}
                          {/* <div className="w-100 position-relative" >
                              <img src="/assets/img/logo/avatar_purple.png" className="ui-w-100 rounded-circle"/>  
                          </div> */}
                          {/* <!-- / Logo --> */}

                          {/* <!-- Form --> */}
                          <form className="my-3">
                          <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                              Email
                              </label>
                              <input type="text" className="form-control" />
                          </div>
                            {/* <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">UserName</label>
                              <input type="text" className="form-control" />
                            </div> */}
                            <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                                <div>Password</div>
                              </label>
                              <input type="password" className="form-control"/>
                            </div>
                            <div className="form-group">
                              <label className="form-label d-flex justify-content-between align-items-end">
                                <div>Confirm Password</div>
                              </label>
                              <input type="password" className="form-control"/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center m-0">
                              <label className="custom-control custom-checkbox m-0">
                                <input type="checkbox" className="custom-control-input"/>
                                <span className="custom-control-label">Receive exciting features, news & special offers from Bodybuilding.com.</span>
                              </label>
                              <button type="button" className="btn btn-primary">Sign Up</button>
                            </div>
                          </form>
                          {/* <!-- / Form --> */}

                          
                        </div>
                      </div>
                    </div>
                    {/* <!-- / Form container --> */}
                      </div>
                      {/* <!-- /.Text --> */}
                    </div>
                    {/* <!-- / Side container --> */}
                </div>
            </div>
        </React.Fragment>
    )

  }
}

export default Register