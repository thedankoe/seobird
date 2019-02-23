import React, { Component } from 'react'
import styled from 'styled-components'
import './styles/selectBox.css'
import { DownIcon, UpIcon } from './styles/IconStyles'

const SelectWrapper = styled.div`
  width: 100%;
  label {
    color: #fff;
    font-size: 2.2rem;
    font-weight: 500;
  }
`

const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  margin-top: 1rem;
  margin-bottom: ${props => props.theme.textSpace};
  padding: 1.5rem 1rem;
  background: rgba(0, 0, 0, 0.4);
  border-radius: 3px;
  font-size: 1.8rem;
  color: ${props => props.theme.lightGrey};
  cursor: pointer;
`

const SelectItemSelected = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  vertical-align: middle;
`

const SelectItems = styled.div`
  div {
    padding: 1rem;
    padding-left: 3rem;
    border-radius: 3px;
    cursor: pointer;
    transition: all ease 0.3s;
    :hover {
      background: ${props => props.theme.lightGrey};
      color: ${props => props.theme.secondary};
    }
  }
`

const SelectArrow = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  width: 4rem;
`

export default class SelectBox extends Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items && this.props.items[0],
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems,
    }))
  }

  selectItem = item => {
    this.setState({
      selectedItem: item,
      showItems: false,
    })
  }

  render() {
    const { items, showItems, selectedItem } = this.state
    return (
      <SelectWrapper>
        <label htmlFor="choice">Package Option Interested In</label>
        <SelectContainer onClick={this.dropDown}>
          <SelectItemSelected>{selectedItem.value}</SelectItemSelected>
          <SelectArrow>{showItems ? <UpIcon /> : <DownIcon />}</SelectArrow>
          <SelectItems style={{ display: showItems ? 'block' : 'none' }}>
            {items.map(item => (
              <div
                role="button"
                tabIndex="0"
                key={item.id}
                onClick={() => this.selectItem(item)}
                className={selectedItem === item ? 'selected' : ''}
              >
                {item.value}
              </div>
            ))}
          </SelectItems>
        </SelectContainer>
      </SelectWrapper>
    )
  }
}
