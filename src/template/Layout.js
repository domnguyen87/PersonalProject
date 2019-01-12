import React from 'react'
import Navigation from '../Navigation'
import TopNav from '../template/TopNav'

class Layout extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {/* <!-- Layout wrapper --> */}
                <div className="layout-wrapper layout-1">
                    {/* <!-- Layout navbar --> */}
                    <div className="layout-inner">
                        <TopNav />

                    {/* <!-- / Layout navbar --> */}
                        <div className="layout-container">
                            <Navigation />
                        </div>
                    {/* <!-- / Layout navbar --> */}
                    </div>
                </div>
                {/* <!-- / Layout wrapper --> */}

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