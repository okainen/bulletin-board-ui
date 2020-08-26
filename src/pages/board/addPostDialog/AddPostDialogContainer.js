import {connect} from 'react-redux';
import {addPost} from '../../../data/redux/posts/actions';
import AddPostDialog from './addPostDialog';


const mapStateToProps = null;

const mapDispatchToProps = {
    addPost
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPostDialog);
