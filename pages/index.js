import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

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
`

const Subtitle = styled.h2`
  font-size: 2em;
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
  height: 170px;
  margin: 10px;
  box-align: center;
  text-alignt: center;
  justify-content: center;
  display: inline-table;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 500px) {
    width: 95%;
    height: 100%;
  }

  h3 {
    margin-block-start: 0.2em;
    margin-block-end: 0.2em;
  }

  p {
    @media (max-width: 500px) {
      min-height: 60px;
    }

    min-height: 100px;
    font-size: 1em;
    display: inline-table;
    text-decoration: none;
    margin-block-start: 0em;
    margin-block-end: 0em;
  }
`

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
      <Title>
        Hello. <Image src={Hello} alt="wave" />
      </Title>

      <Subtitle>My name is Louie Jake Bell.</Subtitle>

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

      <Paragraph>
        I am a Front End Developer working in London <FlagImage />. I currently
        work @ Dunelm as a Front End Developer. Prior to this, I worked @
        Gamesys starting off as a Graduate Software Engineer followed by a
        promotion to a Front End Developer.
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
        background="lightgrey"
        color="black"
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
          a photo composition web app. add a customized # of cards, upload a
          photo inside each and view all photos in a responsive composition.
        </p>
        <FrameImage />
      </Card>
    </HorizontalCenter>
  </div>
)

export default Index
