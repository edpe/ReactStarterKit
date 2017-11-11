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
import Terminal from "spectacle-terminal";
import Typist from "react-typist";
import Loading from "react-loading";

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Images
import reactLogo from './assets/img/react.png';
import reactTree from './assets/img/tree.png';
import champagneTower from './assets/img/champagne.gif';
import vDom from './assets/img/vdom.png';
import allthethings from './assets/img/installallthethings.jpg';
import separation from './assets/img/separationofconcerns.png';
import paperloo from './assets/img/paperloo.jpg';


// Require CSS
require('normalize.css');

const theme = createTheme();
const sln = true;
const cursor = { show: true, blink: true, element: "|", hideWhenDone: true, hideWhenDoneDelay: 500 };


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
          <Slide bgColor="secondary">
            <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
              React's Conceptual Model
            </Heading>
            <BlockQuote>
              <Quote>A composition of pure functions which returns a UI state for a given set of input data</Quote>
            </BlockQuote>
          </Slide>
        </Magic>
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Wait!
          </Heading>
          <Appear>
            <Text>What about performance?</Text>
          </Appear>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={3} caps lineHeight={1} textColor="primary">
              The Virtual DOM
          </Heading>
          <Image src={vDom} width="80%" height="80%"/>
          <Appear>
            <Text textColor="tertiary">The diff generates a list of DOM mutations like a version control system outputs text mutations</Text></Appear>
        </Slide>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/HelloWorld.example.js").default}
            ranges={[
              { loc: [0, 7], title: "HelloWorld.js" },
              { loc: [0, 1], note: "ES6 import ceremony" },
              { loc: [2, 5], note: "A simple 'fat arrow' function"},
              { loc: [6, 7], note: "Make it the default export"},
              { loc: [3, 4], note: "Spooky JSX part" },
            ]}/>
          <Slide transition={['slide']} bgColor="primary" textColor="secondary">
          <Heading size={3} fit lineHeight={1} textColor="secondary">
              Some Complications
          </Heading>
          <List>
            <ListItem>Javascript from the future</ListItem>
            <ListItem>Which browsers can't even run yet</ListItem>
            <ListItem>Some of it isn't even Javascript</ListItem>
            <ListItem>NPM, Webpack, Babel, ES6/7</ListItem>
            <ListItem>I can't even...</ListItem>
          </List>
        </Slide>
        <Slide transition={[]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
              Fatigued Already?
          </Heading>
          <Image src={allthethings} width="70%" height="70%"/>
        </Slide>
        <Slide transition={['slide']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="tertiary">
            Create-React-App
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            is here to save us
          </Text>
        </Slide>
        <Slide bgColor="primary">
          <Heading size={2} caps fit textColor="tertiary">Let's get started</Heading>
          <Terminal title="rupert@quixote: ~/public_html/ReactStarterKit" output={[
              <Typist cursor={ cursor }>nvm install 9</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>Checksums empty<br/>Now using node v9.1.0 (npm v5.5.1)</div>
              ],
              <Typist cursor={ cursor }>npm install -g create-react-app</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>/home/rupert/.nvm/versions/node/v9.1.0/bin/create-react-app -> /home/rupert/.nvm/versions/node/v9.1.0/lib/node_modules/create-react-app/index.js<br/>+ create-react-app@1.4.3<br/>added 106 packages in 7s</div>
              ],
              <Typist cursor={ cursor }>create-react-app workshop</Typist>,
              [
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Loading type="bars" color="#fff" height="30" width="30" />
                </div>,
                <div style={{ color: "#33B969"}}>Success! Created workshop at /home/rupert/tmp/test/workshop<br/>...<br/>We suggest that you begin by typing:<br/><br/>cd workshop<br/>yarn start</div>
              ],
            ]} />
        </Slide>
        <Slide transition={['slide']} bgColor="secondary" textColor="tertiary">
          <Heading size={3} textColor="tertiary">A Little Cleanup</Heading>
          <List ordered>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/index.css</em> and remove its import from <em style={{ color: "#33B969"}}>src/index.js</em></ListItem>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/App.css</em> and remove its import from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>delete <em style={{ color: "#33B969"}}>src/logo.svg</em> and remove its import from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>delete the return statement (lines 5 to 15) from <em style={{ color: "#33B969"}}>src/App.js</em></ListItem>
            <ListItem>make line 5 of <em style={{ color: "#33B969"}}>src/App.js</em> read <strong style={{ color: "#f9c300"}}>return null;</strong></ListItem>
          </List>
          <Appear>
            <Text textColor="tertiary">Gratz! You've made an empty webpage!</Text>
          </Appear>
        </Slide>
        <CodeSlide
          showLineNumbers={sln}
          transition={[]}
          lang="js"
          code={require("./assets/code/HelloWorld.example.js").default}
          ranges={[
            { loc: [0, 7], title: "HelloWorld.js" },
          ]}/>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/HelloWorldApp.example.js").default}
            ranges={[
              { loc: [0, 0], title: "App.js" },
              { loc: [1, 2], note: "Import your new component" },
              { loc: [5, 6], note: "Create an instance of your component in JSX and return it"},
              { loc: [0, 10] },
            ]}/>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/jsx.example.js").default}
            ranges={[
              { loc: [0, 1], title: "JSX" },
              { loc: [2, 4], note: "Use curlies to embed any Javascript expression" },
              { loc: [5, 7], note: "You can do what you like in there..." },
              { loc: [8, 13] },
              { loc: [11, 12], note: "Some tag attributes are differently named!" },
              { loc: [10, 11], note: "Most often they are camel-cased versions of the ones you know" },
              { loc: [14, 22]},
              { loc: [15, 22], note: "Be careful to wrap multi-line JSX expressions in parentheses"},
              { loc: [23, 34]},
            ]}/>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={3} fit textColor="tertiary">
            This makes people nervous
          </Heading>
          <Appear>
            <Image src={separation} width="80%" height="80%" />
          </Appear>
        </Slide>
        <Slide transition={[]} bgColor="secondary">
          <Heading size={3} fit textColor="primary">
            Thinking in Components
          </Heading>
          <Image src={paperloo} width="70%" height="70%" />
          <Text size={6} fit textColor="tertiary">
            * carefully-scoped shovel-ready spec ;-)
          </Text>
        </Slide>
        <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="json"
            code={require("./assets/code/cluj.data.js").default}
            ranges={[
              { loc: [0, 0], title: "Loo Data" },
              { loc: [0, 3], note: "geoJson Wrapper (data.features is an array of loos)" },
              { loc: [18, 33] },
              { loc: [21, 22], note: "loo.properties.name" },
              { loc: [23, 30], note: "geoJson Point (wgs84) loo.geometry.coordinates" },
            ]}/>
          <Slide transition={[]} bgColor="secondary">
            <Heading size={3} fit textColor="primary">
              All about "props"
            </Heading>
            <Text size={6} fit textColor="tertiary">
              how to pass data to components
            </Text>
          </Slide>
          <CodeSlide
            showLineNumbers={sln}
            transition={[]}
            lang="js"
            code={require("./assets/code/props.example.js").default}
            ranges={[
              { loc: [0, 0], title: "Props!" },
              { loc: [0, 1], note: "A component function receives 'props' as its first argument" },
              { loc: [2, 3], note: "'props' is a read-only object!" },
              { loc: [6, 7], note: "'props' is populated by the attributes applied to the component in JSX" },
              { loc: [12, 15], note: "Setting default props" },
              { loc: [20, 24], note: "Input validation with the prop-types package" },
            ]}/>
          <Slide transition={[]} bgColor="primary">
            <Heading size={3} fit textColor="secondary">
              LooMap mission 1
            </Heading>
            <List>
              <ListItem>Replace HelloWorld with a Loo component which can show a loo's name</ListItem>
              <ListItem>Copy the fixture from 'https://github.com/neontribe/ReactStarterKit'</ListItem>
              <ListItem>Import it in App.js</ListItem>
              <ListItem>Supply the first item from the array as data to your component</ListItem>
              <ListItem>Build a LooList component which can accept an array of data and render a list of Loo components</ListItem>
            </List>
          </Slide>


      </Deck>
    );
  }
}
