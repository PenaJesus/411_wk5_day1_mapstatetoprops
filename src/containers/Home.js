import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cars: state.cars,
  };
};

export default connect(mapStateToProps)(Home);
