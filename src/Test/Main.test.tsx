import React from 'react';
import { render, screen } from "@testing-library/react";
import Main from '../Components/Main';

describe('Main Component', () => {
    it('renders correctly',() => {
        render(<Main />)
    })
})
