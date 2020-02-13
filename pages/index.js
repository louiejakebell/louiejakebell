import React from 'react'
import Head from 'next/head'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

import Hello from '../images/hello.png'
import Flag from '../images/flag.png'

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

const Index = () => (
  <div>
    <GlobalStyle />
    <Head>
      <title>louiejakebell</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <HorizontalCenter>
      <Title>
        Hello.
        <Image src={Hello} alt="wave" />
      </Title>

      <Subtitle>My name is Louie.</Subtitle>
      <Paragraph>
        I am a Front End Developer working in central London{' '}
        <Image src={Flag} width="24px" alt="flag" />. I currently work @{' '}
        <Anchor target="_blank" href="https://www.dunelm.com/">
          Dunelm
        </Anchor>{' '}
        as a Front End Developer. Prior to this, I worked @ Gamesys starting off
        as a Graduate Software Engineer followed by a promotion to a Front End
        Developer.
        {/* graduated from
        Portsmouth University in 2016 with a degree in Software Engineering. My
        first job in this industry started in August 2016 as a Graduate Software
        Engineer @ Gamesys. I was promoted to a Front End Developer role in
        March 2018 at the same company. My latest career change was in May 2019
        when I joined Dunelm as a Front End Developer where I am currently
        working. */}
        {/* <Anchor href="https://twitter.com/louiejakebell">here</Anchor>  */}
      </Paragraph>
    </HorizontalCenter>
  </div>
)

export default Index
