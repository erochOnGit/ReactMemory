/**
 * Created by eroch on 03/05/2017.
 */

import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import ControllerLaps from '../component/ControllerLaps';

import { createRenderer } from "react-dom/test-utils"

test("################################# PASS : ControllerLaps is properly rendered #################################", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <ControllerLaps />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="ControllerLaps"></div>,
        "can render a ControllerLaps component if there is no data"
    )

    t.end()
})

it('true test', () => {
});

