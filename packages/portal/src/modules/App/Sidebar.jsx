import React, { Component } from 'react'
import { SidebarWrapper, SidebarMenuWrapper } from './styled'

import List from './List'

class Sidebar extends Component {
  render(){
    return(
      <SidebarWrapper>
        <SidebarMenuWrapper {...this.props}>
          <List sidebar toggleSidebar={() => this.props.toggleSidebar()}/>
        </SidebarMenuWrapper>
      </SidebarWrapper>
    )
  }
}

export default Sidebar