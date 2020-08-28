import React from 'react'
import styled from "styled-components"

export const Link: React.FC<{width?: number, height?: number, icon?: string, href: string}> = ({children, width, height, icon, href}) => {
  return (
      <WindowBorder width={width} height={height} href={href} target="_blank" rel="noopener noreferrer">
        <Content width={width} height={height}>
          {icon ? <img  src={icon} style={{width: width && `${width}em`}}/> : children}
        </Content>
    </WindowBorder>

  )
}

const Content = styled.div<{width?: number, height?: number}>`
  padding: 0.3rem 0.4rem;
  border-radius: 0.54em;
  background-color: ${props => props.theme.colors.windowBackground};
  color: ${props => props.theme.colors.secondary};
  margin: 0.2em 0.60em 0.60em 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => props.width ? `width: ${props.width}em;`: ""}
  ${props => props.height ? `height: ${props.height}em;`: ""}
  
`

const WindowBorder = styled.a<{width?: number, height?: number}>`
    display: block;
    background-color: ${props => props.theme.colors.border};
    border-radius: 0.8em;
    margin: 0.5em;

`