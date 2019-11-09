import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Table from '../common/table/table';
import {bindActionCreators} from "redux";
import APITransport from "../../actions/apitransport/apitransport";
import {connect} from "react-redux";

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
            <Table tableData={this.props.dashboardResults} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        apistatus: state.apistatus,
        dashboardResults:state.dashboardResults
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        APITransport: APITransport
    }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))