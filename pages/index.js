import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Profile from '../images/pafos.jpeg'
import Hello from '../images/hello.png'
import Flag from '../images/flag.png'
import Bicep from '../images/bicep.png'
import Frame from '../images/frame.png'
import Earth from '../images/earth.png'
import Message from '../images/message.png'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(72, 72, 80);
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

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  max-width: 500px;
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

const orange = '#f19666'
const purple = '#503283'
const lightPurple = '#9990FA'

const Card = styled.a`
  background: ${props => props.background};
  color: ${props => props.color};
  max-width: 400px;
  height: 100%;
  padding: 1em 2em;
  margin: 1em 0;
  border-radius: 5px;
  display: inline-table;
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

const CardList = styled.ul`
  margin: 0 0 1rem 0;
  padding-left: 1rem;
`

const IconImage = styled.img`
  margin-top: 1rem;
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

const ProfileImage = () => <Image src={Profile} width="140px" alt="profile" />
const FlagImage = () => <Image src={Flag} width="20px" alt="flag" />
const BicepImage = () => <Image src={Bicep} width="20px" alt="bicep" />
const FrameImage = () => <Image src={Frame} width="20px" alt="frame" />
const EarthImage = () => <Image src={Earth} width="20px" alt="earth" />
const MessageImage = () => <Image src={Message} width="20px" alt="message" />

const Index = () => (
  <div>
    <GlobalStyle />
    <Head>
      <title>louie jake bell (@louiejakebell)</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HorizontalCenter>
      <Curve />

      <Title>
        Hello. <Image src={Hello} alt="wave" />
      </Title>

      <Subtitle>My name is Louie.</Subtitle>

      <Anchor target="_blank" href="https://twitter.com/louiejakebell">
        Twitter
      </Anchor>
      {' • '}
      <Anchor target="_blank" href="https://github.com/louiejakebell">
        GitHub
      </Anchor>
      {' • '}
      <Anchor target="_blank" href="https://www.linkedin.com/in/louiejakebell/">
        LinkedIn
      </Anchor>
      {' • '}
      <Anchor href="mailto:louiejakebell@gmail.com">Email</Anchor>

      <Paragraph>
        I am a developer working in London <FlagImage />. I currently work @
        Dunelm as a Front End Developer. Prior to this, I worked @ Gamesys
        starting off as a Graduate Software Engineer; trying out different
        languages until I made the decision to focus my career on JavaScript.
      </Paragraph>

      <Paragraph>
        I have one of my side projects listed below; a gym tracker web
        application <BicepImage />. In addition to this, I have some other old
        side projects; 3d javascript animations
        <EarthImage /> and a photo composition web app <FrameImage />. The tech
        stacks used across these apps include: Next, React, Redux,
        styled-components, serverless lambda functions, MongoDB & three js.
      </Paragraph>

      <ParagraphTitle>Featured side projects</ParagraphTitle>

      <Card
        target="_blank"
        href="https://trackify.netlify.com"
        background="rgb(72, 72, 80)"
        color="white"
      >
        <CardTitle>trackify</CardTitle>
        <BicepImage />
        <Paragraph>
          A serverless gym tracker web application used to visualize workout
          progress. Features include: registration, login, customised gym plans,
          adding exercises, saving progress data, searching profiles.
        </Paragraph>
      </Card>

      <Card
        target="_blank"
        href="https://msngr.netlify.com"
        background="royalblue"
        color="white"
      >
        <CardTitle>msngr</CardTitle>
        <MessageImage />
        <Paragraph>
          A small realtime messaging web application with an easy way to start a
          quick chat with a friend / colleague. Developed using the WebSocket
          API, Next, React, AWS Lambda Functions, DynamoDB.
        </Paragraph>
      </Card>
    </HorizontalCenter>
  </div>
)

export default Index
