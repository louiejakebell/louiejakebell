import React from 'react'
import Head from 'next/head'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'

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
import Profile from '../images/profile.png'

import theme from '../src/theme'
import Carousel from '../src/components/Carousel'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Rubik', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: rgb(72, 72, 80);
    margin: 0;
  }
`

const Header = styled.div`
  background-color: #ecf0f1;
  text-align: center;
  padding: 1rem;
`

const ProfileImage = styled.img`
  width: 140px
  object-position: scale-down;
  border-radius: 100px;
  display: table;
  margin: 0 auto;
`

const SocialIcons = styled.div`
  text-align: center;
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

    <Header>
      <ProfileImage src={Profile} alt="profile" />

      <Title>Heya!</Title>
      <Image src={Hello} width="30px" alt="wave" />

      <Subtitle>My name is Louie.</Subtitle>
    </Header>

    <HorizontalCenter>
      <SocialIcons>
        <Anchor target="_blank" href="https://twitter.com/louiejakebell">
          Twitter
        </Anchor>
        {' • '}
        <Anchor target="_blank" href="https://github.com/louiejakebell">
          GitHub
        </Anchor>
        {' • '}
        <Anchor
          target="_blank"
          href="https://www.linkedin.com/in/louiejakebell/"
        >
          LinkedIn
        </Anchor>
        {' • '}
        <Anchor href="mailto:louiejakebell@gmail.com">Email</Anchor>
      </SocialIcons>

      <Paragraph>
        I am a Front End Developer from London <FlagImage /> with a passion for
        React / Next.js. I love developing JavaScript applications and I made
        the decision early in my career to pursue this language.
      </Paragraph>

      <Paragraph>
        My prominent experience is with the following technologies / frameworks:
        JavaScript, TypeScript, CSS, styled-components, Next.js, React, Redux,
        Node, Jest, React Testing Library and Netlify.
      </Paragraph>

      <ParagraphTitle>Featured side projects</ParagraphTitle>

      <Carousel>
        <Card
          target="_blank"
          href="https://setwork.netlify.com"
          background="#F7F3E3"
          color="white"
        >
          <CardTitle>
            setwork
            <BicepImage />
          </CardTitle>

          <Paragraph>
            A gym network used to track and visualize workout progress.
            Registration, login, customised plans, saving progress data and
            searching profiles.
          </Paragraph>
        </Card>

        <Card
          target="_blank"
          href="https://msngr.netlify.com"
          background="#DAC4F7"
          color="white"
        >
          <CardTitle>
            msngr
            <MessageImage />
          </CardTitle>

          <Paragraph>
            A small realtime messaging web application with an easy way to start
            a quick chat with a friend / colleague.
          </Paragraph>
        </Card>

        <Card
          target="_blank"
          href="https://exchangify.netlify.com"
          background="#D6F6DD"
          color="white"
        >
          <CardTitle>
            exchangify
            <MoneyImage />
          </CardTitle>

          <Paragraph>
            A small web app used to convert currencies and exchange money
            between wallets.
          </Paragraph>
        </Card>
      </Carousel>
    </HorizontalCenter>
  </ThemeProvider>
)

export default Index
