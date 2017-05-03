/**
 * Created by emile on 02/05/2017.
 */

import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import Memory from '../component/Memory';
import Game from '../component/Game';

import { createRenderer } from "react-dom/test-utils"

test("################################# PASS : Game is properly rendered #################################", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <Game name=""/>
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="game-container">
            no game specified
        </div>,
        "can render a Game component if there is no data"
    )

    t.end()
})

test("################################# PASS : Game is properly rendered #################################", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <Game name="memory"/>
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="game-container">
            <Memory/>
        </div>,
        "can render a Game component if there is memory passed"
    )

    t.end()
})

it('true test', () => {
});

