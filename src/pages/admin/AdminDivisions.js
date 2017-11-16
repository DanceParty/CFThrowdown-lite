import React from 'react'

// containers
import DivisionContainer from '../../containers/DivisionContainer'


class AdminDivisions extends React.Component {
  render() {
    return (
      <DivisionContainer
        navigation={this.props.navigation}
        admin={true}
      />
    )
  }
}

export default AdminDivisions