import sum from "../sum";

test("function to add 2 numbers",()=>{
    const result=sum(3,4);
    expect(result).toBe(7);
})