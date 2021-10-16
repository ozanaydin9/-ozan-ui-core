import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

const OzanButton = styled.button`
             &:hover {
                background: ${props => props.hoverColor} !important;
             }
             :active {
                transform: ${props => props.transformVal};
              }
  }`;


export const Button = ( props ) => {

  return (
    <OzanButton onClick={props.onClick}
                hoverColor={props.hoverColor}
                transformVal={props.transform}
                border = "red"
                style={{
                  minWidth:props.minWidth,
                  minHeight:props.minHeight,
                  margin:props.margin,
                  width:props.width,
                  height:props.height,
                  background:props.background,
                  outline:props.outline,
                  border:props.border,
                  borderRadius:props.borderRadius,
                  cursor:props.cursor,
                  boxShadow:props.boxShadow,
                  color:props.color,
                }}
    >
      <span style={{fontSize:props.fontSize, letterSpacing:props.letterSpacing, color:props.color,  fontWeight:props.fontWeight, }}>{props.text}</span>
    </OzanButton>
  )

}

Button.propTypes = {
  minWidth: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  minHeight: PropTypes.string,
  borderRadius: PropTypes.string,
  margin: PropTypes.string,
  background: PropTypes.string,
  border: PropTypes.string,
  boxShadow: PropTypes.string,
  hoverColor: PropTypes.string,
  outline: PropTypes.string,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  text: PropTypes.string,
  cursor: PropTypes.string,
  onClick: PropTypes.func,
  transform: PropTypes.string,
  letterSpacing:PropTypes.string,
};

Button.defaultProps = {
  minWidth:"100px",
  minHeight:"35px",
  width: "auto",
  height: "auto",
  borderRadius: "10px",
  margin: "0",
  background: "#4F4F4F",
  border: "none",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  hoverColor: "#343434",
  outline: "none",
  fontSize: "14px",
  color: "white",
  fontWeight: "normal",
  text: "Button",
  cursor: "pointer",
  onClick: () => {},
  transform: "translateY(1px)",
  letterSpacing: "2px"
}
