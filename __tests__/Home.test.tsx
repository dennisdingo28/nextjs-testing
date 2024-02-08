import "@testing-library/jest-dom";
import {render, screen} from "@testing-library/react";
import Home from "@/app/page";

describe("Home", ()=>{
    it("should have Docs text", ()=>{
        render(<Home/>) //Arrange
        
        const myElement = screen.getByText('Docs'); //Action
    
        expect(myElement).toBeInTheDocument(); //Assert
    });
    it('should contain the text "information" ', ()=>{
        render(<Home/>) //Arrange
        
        const myElement = screen.getByText(/information/i); //Action
    
        expect(myElement).toBeInTheDocument(); //Assert
    });
    it('should have a heading" ', ()=>{
        render(<Home/>) //Arrange
        
        const myElement = screen.getByRole('heading', {
            name: "Learn"
        }); //Action
    
        expect(myElement).toBeInTheDocument(); //Assert
    });
});
