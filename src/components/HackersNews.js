import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchNewsData } from '../actions/actionCreators';

export class HackersNews extends Component {
    componentDidMount() {
        const { dispatchFetchNews} = this.props;
        dispatchFetchNews();
    }

    componentDidUpdate(prevProps, prevState) {
        const { pageNumber, dispatchFetchNews} = this.props;
        if(pageNumber !== prevProps.pageNumber) {
            dispatchFetchNews();
        }
    }
      
    render() {
        const { isLoaded, newsItems } = this.props;
        return(
            <>
                Hackers News Component
                <ul>
                {
                    newsItems.map(news => {
                        return(
                            <li id={news.objectID} key={news.objectID}>
                            <span>{news.num_comments}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>0</span>&nbsp;&nbsp;&nbsp;
                            <span>X</span>&nbsp;
                            <span>{news.title}</span>&nbsp;
                            <span>Hide</span>
                            </li>
                        )
                    })
                }
                </ul>
            </>
        );
    }
}

HackersNews.propTypes = {
    isLoaded: PropTypes.bool.isRequired,
    newsItems: PropTypes.objectOf.isRequired,
    dispatchFetchNews: PropTypes.func.isRequired
}

export const mapStateToProps = state => ({
    isLoaded: state.isLoaded,
    pageNumber: state.pageNumber,
    newsItems: state.newsItems
});

const mapDispatchToProps = {
    dispatchFetchNews: fetchNewsData
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HackersNews);