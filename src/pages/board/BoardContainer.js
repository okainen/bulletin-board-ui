import {connect} from 'react-redux';
import Board from './Board';


const mapStateToProps = state => ({
    posts: state.board.get('posts').toJS()
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Board);
