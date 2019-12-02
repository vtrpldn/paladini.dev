import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Wrap = styled.button`
  cursor: pointer;
  position: relative;
  display: inline-block;
  background-color: #35357f;
  color: #e7e7e7;
  font-size: 16px;
  line-height: 1.4;
  padding: 7px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color .3s ease;
  border: solid 1px transparent;
  font-weight: 600;
  font-family: 'Work Sans', sans-serif;
  &:hover {
    background-color: #3f3f96;
  }
  &:active {
    background-color: #4a4ab2;
  }
  & + & {
    margin-left: 15px;
  } 
  ${({ secondary }) => secondary && css`
    color: #777;
    background-color: #E7E7E7;
    &:hover {
      color: #444;
      background-color: #CFCFCF;
    }
    &:active {
      color: #555;
      background-color: #B8B8B8;
    }
  `}
  ${({ neutral }) => neutral && css`
    color: #1b1b1b;
    background-color: #2b2b2b;
    &:hover {
      background-color: #1F1F1F;
    }
    &:active {
      background-color: #1C1C1C;
    }
  `}
  ${({ caution }) => caution && css`
    color: #1b1b1b;
    background-color: #CC1133;
    &:hover {
      background-color: #D54A4B;
    }
    &:active {
      background-color: #A63A3A;
    }
  `}
  ${({ txt }) => txt && css`
    padding: 0;
    border: none;
    border-bottom: solid 1px;
    color: #1b1b1b
    border-radius: 0;
    line-height: 1.2;
    &:hover {
      color: #5C52DD;
      background: none;
    }
    &:active {
      color: #5249C4;
      background: none;
    }
    &:disabled {
      border: none!important;
    }
  `}
  ${({ txt, neutral }) => (txt && neutral) && css`
    color: #2b2b2b;
    &:hover {
      color: #1F1F1F;
    }
    &:active {
      color: #1C1C1C;
    }
  `}
  ${({ block }) => block && css`
    display: block;
    width: 100%;
  `}
  &:disabled {
    cursor: not-allowed;
    color: #CDCDCD;
    border: solid 1px #cdcdcd;
    background-color: #1b1b1b;
  }
`

const Button = (props) => {
  const { text, children, link, target, slot, onClick, preventDefault } = props

  const handleClick = (e) => {
    preventDefault && e.preventDefault()
    onClick && onClick(e)
  }

  const component = <Wrap {...props} onClick={handleClick}>{text || children}{slot}</Wrap>

  if (link) {
    return (
      <a href={link} target={target}>
        {component}
      </a>
    )
  }

  return component
}

Button.propTypes = {
  caution: PropTypes.bool,
  disabled: PropTypes.bool,
  neutral: PropTypes.bool,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  text: PropTypes.string,
  txt: PropTypes.bool
}

export default Button
