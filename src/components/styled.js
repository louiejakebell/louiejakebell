import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  max-width: 500px;
`

const Card = styled.a`
  background: ${props => props.background};
  color: ${props => props.color};
  touch-action: pan-y;
  width: 400px;
  flex-grow: 0;
  flex-shrink: 0;
  padding: 1em 2em;
  margin: 1em 0;
  border-radius: 5px;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    opacity: 0.75;

    h3 {
      text-decoration: underline;
    }
  }

  h3 {
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
  }

  @media (max-width: 500px) {
    width: calc(100vw - 100px);
  }
`

const Title = styled.h1`
  font-size: 4em;
  margin-block-end: 0.3em;
  display: inline-block;
`

const Subtitle = styled.h2`
  font-size: 2em;
  margin-block-start: 0.3em;
`

const ParagraphTitle = styled.h3`
  font-size: 1.4em;
  margin-block-start: 0.3em;
`

const HorizontalCenter = styled.div`
  margin: 0 auto;
  display: table;
  max-width: 500px;
`

const Anchor = styled.a`
  color: blue;
  cursor: pointer;
`

const Image = styled.img`
  width: 50px;
  width: ${props => props.width};
`

const CardTitle = styled.h3`
  display: inline-block;
  text-decoration: none;
  font-size: 1.2rem;
  width: fit-content;
  margin-block-start: 0em;
  margin-block-end: 0em;

  span {
    font-size: 1rem;
  }
`

const CurveStyles = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  transform: rotate(180deg);

  svg {
    position: relative;
    display: block;
    width: calc(150% + 1.3px);
    height: 200px;
  }

  .shape-fill {
    fill: lightgrey;
  }
`

const Curve = () => (
  <CurveStyles>
    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="shape-fill"
      ></path>
    </svg>
  </CurveStyles>
)

export {
  Paragraph,
  Card,
  Title,
  Subtitle,
  ParagraphTitle,
  HorizontalCenter,
  Anchor,
  Image,
  CardTitle,
  Curve
}
