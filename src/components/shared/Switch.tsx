import React, {FC} from "react";
import styled from "styled-components/macro";
import Color from "color";


interface SwitchProps {
  switched: boolean,
  width: number,
  onClick: () => void,
  leftText: string,
  rightText: string
}

export const Switch : FC<SwitchProps> = ({switched, width, onClick, leftText, rightText}) => {
  
  return (
    <Wrapper width={width} onClick={onClick}>
      
      <Selection switched={switched} width={width}/>
      <FlexWrapper>
        <LeftText >{leftText}</LeftText>
        <RightText >{rightText}</RightText>
        
      </FlexWrapper>
      
    </Wrapper>
      
  )
}

const offset = 0.133
const height = 1.266

const Wrapper = styled.div.attrs(props => ({tabIndex: 0}))<{ width: number}>`
  font-weight: bold;
  position: relative;
  padding: ${offset}em;
  background: ${props => props.theme.colors.secondary};
  border-radius: 0.766em;
  width: ${props => props.width}em;
  height: ${height + offset*2 }em;
  cursor: pointer;
  transition: background-color 0.15s linear, box-shadow 0.2s linear;
  -webkit-tap-highlight-color: transparent;
  outline: none;
  
  &:hover  {
    background-color: ${props => props.theme.colors.darken.secondary};
  }
  //&:focus {
  //  box-shadow: 0 0 2pt 1pt #A5E8E8;
  //}

`

const Selection = styled.div<{switched: boolean, width: number}>`
  position: absolute;
  transition: transform 0.3s cubic-bezier(0,1,0.5,1);
  width: ${props => props.width / 2 - offset }em;
  height: ${height}em;
  border: ${offset }em solid ${props => props.theme.colors.switch.leftText};
  border-radius: 0.633em;
  background: ${props => props.theme.colors.primary};
  
  ${props => !props.switched ?
  `transform: translate3d(0,0,0)`
  : `transform: translate3d(${ props.width / 2  - offset}em,0,0);`
  }
  
`

const LeftText = styled.div`
  color: ${props => props.theme.colors.switch.leftText};
  z-index: 1;
  text-transform: uppercase;
  user-select: none;
  margin-bottom: ${offset * 1.7}em;
  
`
const RightText = styled.div`
  color: ${props => props.theme.colors.switch.rightText};
  z-index: 1;
  text-transform: uppercase;
  user-select: none;
  margin-bottom: ${offset * 1.7}em;
  
`

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: inherit;
`















