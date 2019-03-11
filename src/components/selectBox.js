/* eslint react/destructuring-assignment: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
/* eslint jsx-a11y/label-has-for: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
import React, { Component } from 'react'
import styled from 'styled-components'
import { DownIcon, UpIcon } from './styles/IconStyles'

const SelectWrapper = styled.div`
  width: 100%;
  label {
    color: ${props => props.theme.primary};
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
  background: rgba(0, 0, 0, 0.6);
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
    :focus {
      outline: 1px solid ${props => props.theme.success};
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
    selectedItem: this.props.items[0] || this.props.selectedItem,
    showItems: false,
  }

  componentDidMount() {}

  componentDidUpdate() {}

  dropDown = () => {
    const { showItems } = this.state
    this.setState({
      showItems: !showItems,
    })
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
        <label htmlFor="choice">Service Interested In</label>
        <input
          type="hidden"
          value={selectedItem.value}
          name="choice"
          id="choice"
        />
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
