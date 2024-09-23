const { render,screen } = require("@testing-library/react")
import RestaurantCard from "./../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should Render Restaurant component with props Data",() => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("Nandhini Deluxe");
    expect(name).toBeInTheDocument();
})