import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updatePageNumber } from '../actions/actionCreators';

export const Pagination = ({
    pageNumber,
    totalPage,
    dispatchUpdatePageNumber
}) => {
    return(
        <>
            {console.log(pageNumber, totalPage)}
            {pageNumber !== 0 && <span onClick={() => dispatchUpdatePageNumber(pageNumber - 1)}>Previous</span>}
            {pageNumber < totalPage && <span onClick={() => dispatchUpdatePageNumber(pageNumber + 1)}>Next</span>}
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
    dispatchUpdatePageNumber: updatePageNumber
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Pagination);