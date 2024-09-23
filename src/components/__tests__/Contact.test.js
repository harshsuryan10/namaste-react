import { render ,screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
describe('Contact component test case', () => {
    test("Should load contact us component",() => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    })
    test("Should load button inside contact us component",() => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    })
});
