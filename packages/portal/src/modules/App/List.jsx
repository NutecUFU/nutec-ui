import React, { Component } from 'react'

import { ListWrapper, ListItemWrapper, DropDown } from './styled'
import { Link } from '../../core/components'

class List extends Component {
  container= React.createRef();
  state = {
    open: false
  };

  test(){
    this.setState(state => ({
      open: !state.open
    }));
  }

  handleClickOutside = event => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  
  render(){
    return(
      <ListWrapper {...this.props}>
        {this.props.sidebar? 
          <ListItemWrapper onClick={this.props.toggleSidebar}>
            <Link to="/" hover>
              Home
            </Link>
          </ListItemWrapper>: ''}
        <ListItemWrapper onClick={this.props.toggleSidebar}>
          <Link to="/team" hover>
            Equipe
          </Link>
        </ListItemWrapper>
        <ListItemWrapper onClick={this.props.toggleSidebar}>
          <Link to="/exp" hover>
            Experimentos
          </Link>
        </ListItemWrapper>
        <ListItemWrapper onClick={() => this.test()}>
          <Link.External to="#" hover>
            Espaço Professor
          </Link.External>
          <DropDown open={this.state.open} ref={this.container}>
            <ListWrapper sidebar>
              <ListItemWrapper onClick={this.props.toggleSidebar}>
                <Link to="/prof/plans" hover>Planejamento</Link>
              </ListItemWrapper>
              <ListItemWrapper onClick={this.props.toggleSidebar}>
                <Link to="/prof/guides" hover>Roteiros Didaticos</Link>
              </ListItemWrapper>
              <ListItemWrapper onClick={this.props.toggleSidebar}>
                <Link to="/prof/curiosities" hover>Curiosidades Científicas</Link>
              </ListItemWrapper>
              <ListItemWrapper onClick={this.props.toggleSidebar}>
                <Link to="/prof/projects" hover>Projetos</Link>
              </ListItemWrapper>
            </ListWrapper>
          </DropDown>
        </ListItemWrapper>
        <ListItemWrapper onClick={this.props.toggleSidebar}>
          <Link.External to="http://www.dica.ufu.br/" hover>
            Museu Dica
          </Link.External>
        </ListItemWrapper>
        <ListItemWrapper onClick={this.props.toggleSidebar}>
          <Link.External to="http://nutec.ufu.br/moodle" hover>
            Moodle
          </Link.External>
        </ListItemWrapper>
        <ListItemWrapper onClick={this.props.toggleSidebar}>
          <Link to="/contact" hover>
            Contato
          </Link>
        </ListItemWrapper>
      </ListWrapper>
    )
  }
}

export default List