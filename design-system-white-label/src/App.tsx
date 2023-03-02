import React from 'react';
import Button from './components/Button/Button';
import Paragraph from './components/Paragraph/Paragraph';
import { Container } from './components/Container/Container';
import { Header } from './components/Header/Header';
import styles from './App.module.scss';
import './theming/generator.scss';

function App() {
  return (
    <div className={styles.App}>
      <Header>
        <Container>
            <h1>Design System White Label</h1>
        </Container>
      </Header>

      <main data-company="openweb" data-mode="dark">
        <Container>
          <article>
            <h2>OpenWeb style</h2>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          
            <Button appearance="rounded">Read more!</Button>
          </article>
        </Container>
      </main>

      <section data-company="openweb" data-mode="light" style={{marginBottom: '3rem'}}>
        <Container>
          <article>
            <Paragraph>And this is a bit with a light theme</Paragraph>
            <Button>And a button on light mode</Button>
          </article>
        </Container>
      </section>

      <section data-company="pauwels" data-mode="dark">
        <Container>
          <article>
            <h2>Pauwels section</h2>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
          
            <Button appearance="rounded">Dark mode</Button>
          </article>
        </Container>
      </section>

      <section data-company="pauwels" data-mode="light">
        <Container>
          <article>
            <Paragraph>And this is a bit with a light theme</Paragraph>
            <Button>And a button on light mode</Button>
          </article>
        </Container>
      </section>
    </div>
  );
}

export default App;
