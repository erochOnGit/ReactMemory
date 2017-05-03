/**
 * Created by eroch on 03/05/2017.
 */

import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import ControllerPlayer from '../component/ControllerPlayer';

import { createRenderer } from "react-dom/test-utils"

test("################################# PASS : ControllerPlayer is properly rendered #################################", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <ControllerPlayer />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="ControllerPlayer"></div>,
        "can render a ControllerPlayer component if there is no data"
    )

    t.end()
})

it('true test', () => {
});

