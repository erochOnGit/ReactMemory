/**
 * Created by emile on 02/05/2017.
 */

import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals })

import React from 'react';
import Memory from '../component/Memory';


import { createRenderer } from "react-dom/test-utils"

test("PASS : Memory is properly rendered", (t) => {
    const renderer = createRenderer()

    renderer.render(
        <Memory />
    )
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div className="Memory"></div>,
        "can render a Memory component if there is no data"
    )

    t.end()
})

it('true test', () => {
});

