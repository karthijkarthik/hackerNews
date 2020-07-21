import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateState, fetchNewsData, hideNews} from '../actions/actionCreators';
import { UPDATE_HIDDEN_NEWSID } from '../actions/actionTypes';

export class HackersNews extends Component {
    componentDidMount() {
        const { dispatchFetchNews, dispatchUpdateState } = this.props;

        const hiddenIds = JSON.parse(localStorage.getItem('hiddenNewsid'));
        console.log('hiddenIds', hiddenIds);
        hiddenIds == null ? localStorage.setItem("hiddenNewsid", JSON.stringify([])) : dispatchUpdateState(UPDATE_HIDDEN_NEWSID, hiddenIds);

        dispatchFetchNews();
    }

    componentDidUpdate(prevProps, prevState) {
        const { pageNumber, dispatchFetchNews } = this.props;
        if(pageNumber !== prevProps.pageNumber) {
            dispatchFetchNews();
        }
    }
      
    render() {
        const { isLoaded, newsItems, hiddenNewsids, dispatchHideNewsId } = this.props;
        console.log('hiddenInComp', hiddenNewsids);
        return(
            <>
                Hackers News Component
                <ul>
                {
                    newsItems
                    .filter(news => !hiddenNewsids.includes(news.objectID))
                    .map(news => {
                        return(
                            <li id={news.objectID} key={news.objectID}>
                            <span>{news.num_comments}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                            <span>0</span>&nbsp;&nbsp;&nbsp;
                            <span>X</span>&nbsp;
                            <span>{news.title}</span>&nbsp;
                            <span onClick={() => dispatchHideNewsId(news.objectID)}>Hide</span>
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
    dispatchFetchNews: PropTypes.func.isRequired,
    dispatchHideNewsId: PropTypes.func
}

export const mapStateToProps = state => ({
    isLoaded: state.isLoaded,
    pageNumber: state.pageNumber,
    newsItems: state.newsItems,
    hiddenNewsids: state.hiddenNewsId
});

const mapDispatchToProps = {
    dispatchFetchNews: fetchNewsData,
    dispatchHideNewsId: hideNews,
    dispatchUpdateState: updateState
};

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(HackersNews);