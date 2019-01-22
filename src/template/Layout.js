import React from 'react'
import Navigation from '../Navigation'
import TopNav from './TopNav'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="layout-wrapper layout-1">
                    <div className="layout-inner">
                        <TopNav />
                        <br />
                        <div className="layout-container">
                            <div className="layout-content">
                                <Navigation />
                                <Footer />
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* <!-- Core scripts --> */}
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
                <script src="assets/vendor/libs/popper/popper.js"></script>
                <script src="assets/vendor/js/bootstrap.js"></script>
                <script src="assets/vendor/js/sidenav.js"></script>

                {/* <!-- Libs --> */}

                {/* <!-- `perfect-scrollbar` library required by SideNav plugin --> */}
                <script src="assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

                {/* <!-- Main script --> */}

                <script src="assets/js/main.js"></script> 
            </React.Fragment>
        )
    }
}

export default Layout