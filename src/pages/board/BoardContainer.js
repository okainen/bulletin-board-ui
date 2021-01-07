import {connect} from 'react-redux';
import Board from './Board';
import {addPost, loadPosts} from '../../data/redux/posts/actions';
import {signOut} from '../../data/redux/user/actions';

const mapStateToProps = state => ({
  posts: state.board.get('posts').toJS(),
  postsWereLoaded: state.board.get('postsWereLoaded')
});

const mapDispatchToProps = {
  loadPosts,
  addPost,
  signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
