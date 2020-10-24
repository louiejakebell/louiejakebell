import React from 'react'
import Head from 'next/head'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import {
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
} from '../src/components/styled'
import Hello from '../images/hello.png'
import Flag from '../images/flag.png'
import Bicep from '../images/bicep.png'
import Message from '../images/message.png'
import Money from '../images/money.png'
import theme from '../src/theme'
import Carousel from '../src/components/Carousel'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(72, 72, 80);
  }
`

const FlagImage = () => <Image src={Flag} width="20px" alt="flag" />
const BicepImage = () => <Image src={Bicep} width="20px" alt="bicep" />
const MessageImage = () => <Image src={Message} width="20px" alt="message" />
const MoneyImage = () => <Image src={Money} width="20px" alt="money" />

const Index = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>louie jake bell (@louiejakebell)</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HorizontalCenter>
      <Curve />

      <div>
        <Title>Hello.</Title>
        <Image src={Hello} alt="wave" />
      </div>

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
        I have a few of my side projects listed below including: a gym tracker
        app <BicepImage />, a live chat messaging app <MessageImage /> and a
        currency exchange app <MoneyImage />. The tech stacks used across these
        apps and some others not listed include: Next, React, Redux,
        styled-components, Netlify / AWS lambda functions, MongoDB, Web Sockets
        & three js.
      </Paragraph>

      <ParagraphTitle>Featured side projects</ParagraphTitle>

      <Carousel>
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
            progress. Features include: registration, login, customised gym
            plans, adding exercises, saving progress data, searching profiles.
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
            A small realtime messaging web application with an easy way to start
            a quick chat with a friend / colleague. Developed using the
            WebSocket API, Next, React, AWS Lambda Functions, DynamoDB.
          </Paragraph>
        </Card>

        <Card
          target="_blank"
          href="https://exchangify.netlify.com"
          background="#B47978"
          color="white"
        >
          <CardTitle>exchangify</CardTitle>
          <MoneyImage />
          <Paragraph>
            A small web application used to convert currencies and exchange
            money between wallets. Developed using the React, Context API, Next,
            Netlify Lambda Functions.
          </Paragraph>
        </Card>
      </Carousel>
    </HorizontalCenter>
  </ThemeProvider>
)

export default Index
