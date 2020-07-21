import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateState } from '../actions/actionCreators';
import { UPDATE_PAGENUMBER } from '../actions/actionTypes';

export const Pagination = ({
    pageNumber,
    totalPage,
    dispatchUpdatePageNumber
}) => {
    return(
        <>
            {pageNumber !== 0 && <span onClick={() => dispatchUpdatePageNumber(UPDATE_PAGENUMBER, pageNumber - 1)}>Previous</span>}
            {pageNumber < totalPage && <span onClick={() => dispatchUpdatePageNumber(UPDATE_PAGENUMBER, pageNumber + 1)}>Next</span>}
        </>
    );
};

Pagination.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    dispatchUpdatePageNumber: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
    pageNumber: state.pageNumber,
    totalPage: state.totalPageNumber
});

const mapDispatchToProps = {
    dispatchUpdatePageNumber: updateState
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Pagination);