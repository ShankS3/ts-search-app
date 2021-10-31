import { FeedState } from 'constants/types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'actions/feedActions';
import Feeds from 'components/Feeds';
import { AppDispatch, RootState } from 'store/store';

const mapStateToProps = (state: RootState): { feeds: FeedState } => {
    return {
        feeds: state.feed
    };
};

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
};

const FeedsContainer = connect(mapStateToProps, mapDispatchToProps)(Feeds);

export default FeedsContainer;
