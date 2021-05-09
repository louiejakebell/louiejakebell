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
import Profile from '../images/memoji.jpg'
import Planet from '../images/planet.png'

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
const PlanetImage = () => <Image src={Planet} width="20px" alt="planet" />

const Index = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head>
      <title>louie jake bell (@louiejakebell)</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header>
      <ProfileImage src={Profile} alt="profile" />

      <Title>Hey!</Title>
      <Image src={Hello} width="30px" alt="wave" />

      <Subtitle>My name is Louie.</Subtitle>
    </Header>

    <HorizontalCenter>
      <SocialIcons>
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/louiejakebell"
        >
          Twitter
        </Anchor>
        {' • '}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/louiejakebell"
        >
          GitHub
        </Anchor>
        {' • '}
        <Anchor
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/louiejakebell/"
        >
          LinkedIn
        </Anchor>
        {' • '}
        <Anchor href="mailto:louiejakebell@gmail.com">Email</Anchor>
      </SocialIcons>

      <Paragraph>
        I am a Software Engineer from London <FlagImage /> with a passion for
        problem solving. I love developing React applications and I made the
        decision early in my career to pursue JavaScript.
      </Paragraph>

      <Paragraph>
        My prominent experience is with the following technologies / frameworks:
        JavaScript, TypeScript, CSS, Next.js, React, Node, Jest & React Testing
        Library.
      </Paragraph>

      <ParagraphTitle>Featured side projects</ParagraphTitle>

      <Carousel>
        <Card
          target="_blank"
          rel="noopener noreferrer"
          href="https://convey.vercel.app/"
          background="#E2E8F0"
          color="white"
        >
          <CardTitle>
            convey
            <PlanetImage />
          </CardTitle>

          <Paragraph>
            Version 2.0 gym planner web app used to track and visualize workout
            progress. Second iteration of the technology stack includes:
            PostgreSQL, Prisma, Next, Chakra, Next-Auth and react-query.
          </Paragraph>
        </Card>

        <Card
          target="_blank"
          rel="noopener noreferrer"
          href="https://setwork.netlify.com"
          background="#F7F3E3"
          color="white"
        >
          <CardTitle>
            setwork
            <BicepImage />
          </CardTitle>

          <Paragraph>
            Version 1.0 gym planner web app used to track and visualize workout
            progress. Registration, login, customised plans, saving progress
            data and searching profiles.
          </Paragraph>
        </Card>

        <Card
          target="_blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
