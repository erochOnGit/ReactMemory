import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Game from '../component/Game';
import Title from '../component/Title';

import { createRenderer } from "react-dom/test-utils"

test("PASS : App is properly rendered", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <App />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="App">
            <div className="App-header">
                <Title name="memory" />
            </div>
            <div>
                <Game />
            </div>
        </div>,
        "can render a App component if no image data are passed"
    )

    t.end()
})

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});
