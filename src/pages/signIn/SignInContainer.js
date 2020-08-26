import { connect } from 'react-redux';
import SignIn from './SignIn';
import { signIn } from '../../data/redux/user/actions';


const mapStateToProps = null;

const mapDispatchToProps = {
    signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
