import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Profile from '../images/pafos.jpeg'
import Hello from '../images/hello.png'
import Flag from '../images/flag.png'
import Bicep from '../images/bicep.png'
import Frame from '../images/frame.png'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
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

const Card = styled.a`
  background: ${props => props.background};
  color: ${props => props.color};
  width: 220px;
  height: 160px;
  margin: 10px;
  text-alignt: left;
  display: inline-table;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 95%;
    height: 100%;
  }

  h3 {
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
  }

  p {
    font-size: 1em;
    display: inline-table;
    text-decoration: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
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
    fill: rgb(153, 144, 250);
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
        class="shape-fill"
      ></path>
    </svg>
  </CurveStyles>
)

const ProfileImage = () => <Image src={Profile} width="140px" alt="profile" />
const FlagImage = () => <Image src={Flag} width="20px" alt="flag" />
const BicepImage = () => <Image src={Bicep} width="20px" alt="bicep" />
const FrameImage = () => <Image src={Frame} width="20px" alt="frame" />

const Index = () => (
  <div>
    <GlobalStyle />
    <Head>
      <title>louie jake bell</title>
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
        I have a couple of my side projects listed below. The first is a gym
        tracker web app <BicepImage /> and the second is a photo composition web
        app <FrameImage />. The tech stacks used in either / both include: Next,
        React, Redux, styled-components, lambda functions & MongoDB.
      </Paragraph>

      <Card
        target="_blank"
        href="https://trackify.netlify.com"
        background="#2d3436"
        color="white"
      >
        <h3>trackify</h3>
        <p>
          gym tracker web app with registration + login. set schedules, save
          progress & visualize data. view other user profiles.
        </p>
        <BicepImage />
      </Card>

      <Card
        target="_blank"
        href="https://composify.netlify.com"
        background="#00b894"
        color="white"
      >
        <h3>composify</h3>
        <p>
          a photo composition web app. add a customized # of cards & upload
          images inside each to create a composition.
        </p>
        <FrameImage />
      </Card>
    </HorizontalCenter>
  </div>
)

export default Index
