import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timelines'
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Nav from './components/Nav'

export default function App() {
  return (
    <BrowserRouter>
      <div className="Page">
        <Nav/>
        <Route render={({ location }) => {
          const { pathname, key } = location;

          return (
            <TransitionGroup component={null}>
              <Transition
                key={key}
                appear={true}
                onEnter={(node, appears) => play(pathname, node, appears)}
                onExit={(node) => exit(node)}
                timeout={{enter: 750, exit: 1000}}
              >
                <Switch location={location}>
                  <Route path="/work">
                    <Work />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/">
                    <Home />
                  </Route>
                </Switch>
              </Transition>
            </TransitionGroup>
          )
        }}/>
      </div>
    </BrowserRouter>
  );
}
