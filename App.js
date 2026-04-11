// import React from "react"
// import ReactDOM from "react-dom/client"

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am H1"),
//     React.createElement("h2", {}, "I am H2"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am H1"),
//     React.createElement("h2", {}, "I am H2"),
//   ])]
// );

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React",
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);



import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Durjoy's first Heading",
);
const jsxHeading = (
<h1 className="heading">Jsx Heading</h1>
);


const name="Durjoy";


//short hand
const ShortHandHeader = () => <h1 className="heading">Durjoy Short Hand</h1>

//React Functional Component
const HeadingComp = () => (
  <div>
    <ShortHandHeader />
    {heading}
    {name+ ' '+ 'Ghosh'}
    {console.log("hello")}
    <h1>Durjoy Ghosh's React Prep</h1>
  </div>
);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComp />);
