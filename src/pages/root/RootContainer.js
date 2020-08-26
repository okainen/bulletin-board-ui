import { connect } from 'react-redux';
import Root from './Root';


const mapStateToProps = state => ({
    isLoggedIn: state.user.get('isLoggedIn')
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Root);
