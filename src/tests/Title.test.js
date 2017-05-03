/**
 * Created by emile on 29/04/2017.
 */
import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import Title from '../src/component/Title';

import { createRenderer } from "react-dom/test-utils"

const gameName = "memory"
    test("PASS : App is properly rendered", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <Title />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <h1>Game</h1>,
        "can render a Title component if no name data are passed"
    )

    renderer.render(
        <Title name="" />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <h1>Game</h1>,
        "can render a Title component if name is empty"
    )

    renderer.render(

        <Title name={gameName}/>

    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <h1>memory</h1>,
        "can render a Title component if the name is fill"
    )


    t.end()
})

it('true test', () => {
});
