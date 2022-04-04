import { connect } from 'react-redux';
import Dashboard from '../components/Car';

const mapStateToProps = (state) => {

    const props = {
        cars: state.cars,
        user: state.user
    };

    return props;
}

export default connect(mapStateToProps)(Dashboard);