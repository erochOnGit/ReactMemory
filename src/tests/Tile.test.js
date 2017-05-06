/**
 * Created by eroch on 04/05/2017.
 */

import tape from "tape"
import addAssertions from "extend-tape"
import jsxEquals from "tape-jsx-equals"
const test = addAssertions(tape, { jsxEquals });

import React from 'react';
import Tile from '../component/Tile';

import { createRenderer } from "react-dom/test-utils"

test("################################# PASS : Tile is properly rendered #################################", (t) => {
    const renderer = createRenderer();

    renderer.render(
        <Tile />
    );
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div
            className="Tile"
            id={undefined}
        >
            <img
                alt={undefined}
                className="tilePicture"
                src=""
            />
        </div>,
        "can render a Tile component if there is no data"
    );

    t.end()
});

test("################################# PASS : Tile is properly rendered #################################", (t) => {
    const renderer = createRenderer();

    renderer.render(
        <Tile id="tileTest"/>
    );
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div
            className="Tile"
            id="tileTest"
        >
            <img
                alt="tileTest"
                className="tilePicture"
                src=""
            />
        </div>,
    "can render a Tile component if there is id"
    );

    t.end()
});

test("################################# PASS : Tile is properly rendered #################################", (t) => {
    const renderer = createRenderer();

    renderer.render(
        <Tile
            id="tileTest"
            picture="picture"
            face="face"
            owner="owner"
        />
    );
    t.jsxEquals(
        renderer.getRenderOutput(),
        <div
            className="Tile"
            id="tileTest"
        >
            <img
                alt="tileTest"
                className="tilePicture"
                src=""
            />
        </div>,
        "can render a Tile component if there is id"
    );

    t.end()
});

it('true test', () => {
 });

