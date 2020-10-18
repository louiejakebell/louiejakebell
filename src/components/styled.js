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
  CurveStyles
}
