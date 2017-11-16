import React from 'react'

// containers
import NewDivisionContainer from '../../containers/NewDivisionContainer'


class AddDivision extends React.Component {
  render() {
    return (
      <NewDivisionContainer
        admin={true}
        navigation={this.props.navigation}
      />
    )
  }
}

export default AddDivision