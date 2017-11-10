// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Link,
  Quote,
  Slide,
  Image,
  Text,
  Magic,
  Appear,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import reactLogo from './assets/img/react-logo-1000-transparent.png';
import reactTree from './assets/img/tree.png';
import champagneTower from './assets/img/champagne.gif';


// Require CSS
require('normalize.css');

const theme = createTheme();
const sln = false;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['zoom']} bgColor="secondary">
          <Image src={reactLogo} width="60%" height="60%"/>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            React Starter Kit
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            follow this presentation at <Link href="https://neontribe.github.io/ReactStarterKit" target="_blank">
               https://neontribe.github.io/ReactStarterKit
            </Link>
          </Text>
        </Slide>
        <Slide transition={['zoom']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Objectives
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Build a simple and useful app
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Stick to "plain" React
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Cover the breadth of the API
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Shortcut around some frustrating parts
          </Text>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * deliver oversimplified advice you can laugh at later
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Prerequisites
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Working familiarity with HTML
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Working knowlege of Javascript
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            A text editor, a terminal emulator, a browser
          </Text>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            An up-to-date Node installation (ideally via "nvm")
          </Text>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why React?
          </Heading>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Why React?
          </Heading>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            React will not:
          </Heading>
          <Appear>
            <Heading size={2} fit textColor="secondary">
              Make a TODO list in 10 LOC...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={3} textColor="secondary">
              Eliminate boilerplate...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={4} textColor="secondary">
              Automatically sync anything with anything else...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={5} textColor="secondary">
              Provide all the features you need...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">
              Remember your mother's birthday...
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Never trust a framework which hasn't been extracted from a substantial and successful real-world codebase.</Quote>
            <Cite>Anonymous Sage (probably Simon Willison)</Cite>
          </BlockQuote>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * Stuff you build with react feels solid and dependable
            </Text>
          </Appear>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>React Native’s biggest feature is React.</Quote>
            <Cite>Robbie McCorkell 2015</Cite>
          </BlockQuote>
          <Appear>
            <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
              * The conceptual model is an excellent fit for user interface work
            </Text>
          </Appear>
        </Slide>
        <Magic>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <Image src={reactTree} width="60%" height="60%"/>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <BlockQuote>
              <Quote>A tree of components each of which re-renders itself and its children when data changes</Quote>
            </BlockQuote>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <Image src={champagneTower} width="60%" height="60%"/>
            <Text margin="10px 0 0" textColor="tertiary" size={4} bold>
            * only with very deterministic champagne
            </Text>
          </Slide>
        </Magic>








        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/code.example.js").default}
            ranges={[
              { loc: [0, 11], title: "A Function Component" },
              { loc: [0, 1], note: "ceremony - makes JSX work" },
              { loc: [2, 5] },
              { loc: [3, 4], note: "Spooky JSX part" },
              { loc: [10, 11], note: "Make it the default export"}
            ]}/>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
