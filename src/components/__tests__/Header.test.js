import { render } from "@testing-library/react"
import { Provider } from "react-redux";
import appStore from './../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import Header from './../Header';
import "@testing-library/jest-dom"
import {fireEvent, screen } from "@testing-library/react";


it("Should load Header Component with a login button",() => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button" ,{name : "Logout"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button" ,{name : "Logout"});
    // const cartItem = screen.getByText("Cart - (0 items)")
    expect(logoutButton).toBeInTheDocument();
})