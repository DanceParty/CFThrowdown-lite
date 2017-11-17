import React from 'react'

// containers
import MenuContainer from '../../containers/MenuContainer'


class AdminHome extends React.Component {
  render() {
    return (
      <MenuContainer
        admin={true}
        navigation={this.props.navigation}
      />
    )
  }
}

export default AdminHome