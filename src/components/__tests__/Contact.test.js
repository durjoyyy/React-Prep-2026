
import Contact from "../ContactUs";
import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom"


test("should load contact us page",()=>{
    render(<Contact/>);
    const textFields=screen.getAllByRole("textbox");
    const heading=screen.getByText("Contact Us");
    const btn=screen.getByText("Send Message")
    expect(textFields).toHaveLength(3);
    expect(heading).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
})


test("should load input name inside contact componrnt",()=>{
    render(<Contact/>);
    const inputName=screen.getByPlaceholderText("Your Message");
    expect(inputName).toBeInTheDocument();
    
})



