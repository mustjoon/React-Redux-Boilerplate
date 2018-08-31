import React, {PureComponent} from 'react';
import styled from 'styled-components';
import Button from '@common/button/Button';

const StyledListItem = styled.li`
  color: ${props => props.theme.textColor ? props.theme.textColor : 'white'};
  background: ${props => props.theme.backgroundColor ? props.theme.backgroundColor : 'black'};
  list-style-type: none;
  `

class ListItem extends PureComponent {


  onClick = () => {
    
    this.props.onClick(this.props.item.id)
  }

  render() {
    const { item } = this.props;
    console.log("render");
  
    return (
      <StyledListItem  onClick={this.onClick}> 

      <span>{item.title}</span>
      <Button>Laadilaa</Button>
    </StyledListItem>
    )
  }
}

export default ListItem;