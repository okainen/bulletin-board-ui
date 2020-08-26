import { connect } from 'react-redux';
import { signOut } from '../../../data/redux/user/actions';
import NavBar from './NavBar';


const mapStateToProps = null;

const mapDispatchToProps = {
    signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
