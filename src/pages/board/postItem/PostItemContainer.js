import {connect} from 'react-redux';
import {deletePost, editPost} from '../../../data/redux/posts/actions';
import PostItem from './PostItem';

const mapStateToProps = null;

const mapDispatchToProps = {
  editPost,
  deletePost
};

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);
