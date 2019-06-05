import React from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import * as selectors from './redux/reducer';
import PropTypes from 'prop-types';

class Home extends React.Component{
    constructor(props) {
    super(props);
    autoBind(this);
  }
    componentDidMount() {
        this.props.dispatch(actions.getData());
        console.log('hell')
      }
    render(){
        const { loading,cities } = this.props;
        console.log(cities)
        return(
            <div>
                <h1>HASDASDADS</h1>
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  function mapStateToProps(state) {
    return selectors.getAllValues(state);
  }
export default connect(mapStateToProps)(Home);