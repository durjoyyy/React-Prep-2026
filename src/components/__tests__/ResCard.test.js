import { render,screen } from "@testing-library/react"
import ResCard, { withPromotedLabel } from './../ResCard';
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resCardMock.json"


it("Should render ResCard Component with props Data",()=>{
    render(<ResCard {...MOCK_DATA} />);
    const resName=screen.getByText("KFC");

    expect(resName).toBeInTheDocument();
})


it("Should render ResCard Component with promoted lable",()=>{

    const TopRatedCard=withPromotedLabel(ResCard);
    render(<TopRatedCard {...MOCK_DATA} />);
    const topRatedText=screen.getByText(/Top Rated/);
    expect(topRatedText).toBeInTheDocument();
})