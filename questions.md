Basic Function Questions
What are the different ways to write a function in JavaScript?
Difference between Function Declaration and Function Expression?
Difference between normal functions and Arrow Functions?
What is function hoisting?
Are arrow functions hoisted?
What is an anonymous function?
What is an IIFE (Immediately Invoked Function Expression)?
What is a callback function?
What is a Higher Order Function (HOF)?
Give examples of HOFs in JavaScript.
React Event Handler Questions
Difference between:
onClick={handleClick}

and

onClick={handleClick()}
Why does onClick={handleClick()} execute immediately?
Difference between:
onClick={handleClick}

and

onClick={() => handleClick()}
When should you use:
onClick={() => handleClick(id)}
How do you pass arguments to an event handler?
How do you pass both event and custom arguments?
onClick={(e) => handleClick(e, id)}
What object is automatically passed to event handlers?
What is a Synthetic Event in React?
Difference between onClick, onChange, and onInput?
What happens if you write:
onClick={() => handleClick}
Callback & Closure Questions
What is a closure?
Why are closures important in React?
Explain closure with a counter example.
What is a stale closure?
Why can state sometimes appear outdated inside a function?
How do functional updates solve stale state issues?
setCount(prev => prev + 1)
What happens here?
setCount(count + 1);
setCount(count + 1);
Why doesn't count increase by 2?
What variables does a closure remember?
How do hooks use closures internally?
React Rendering & Functions
What happens to functions during component re-render?
Is a new function created on every render?
Why can this cause unnecessary re-renders?
<MyComponent onClick={() => doSomething()} />
What is referential equality?
Why does React compare function references?
What problems occur when passing inline functions as props?
When is creating functions inside JSX acceptable?
When can it become a performance issue?
useCallback Questions
What is useCallback?
Why was useCallback introduced?
Difference between:
const fn = () => {}

and

const fn = useCallback(() => {}, [])
When should you NOT use useCallback?
Can overusing useCallback hurt performance?
How does useCallback help with React.memo?
React.memo + Functions
What is React.memo?
Why can function props break memoization?
Explain this scenario:
<Child onClick={() => doSomething()} />
Why does Child re-render every time?
How can useCallback help?
Difference between value equality and reference equality?
Advanced Function Questions
What is currying?
const add = a => b => a + b;
How is currying useful in React?
What is partial application?
Difference between currying and closures?
What is debouncing?
What is throttling?
How would you debounce a search input in React?
How would you throttle a scroll event?
What is memoization?
Difference between useMemo and useCallback?
Very Common Practical Interview Questions
Explain exactly what happens when a button is clicked in React.
Why doesn't React call a function immediately when using:
onClick={handleClick}
How would you prevent a function from executing during render?
How would you call a function with parameters on click?
Why is this wrong?
<button onClick={deleteUser(id)}>
What is the best way to write this?
<button onClick={() => deleteUser(id)}>
How would you optimize function props passed to child components?
How would you avoid unnecessary re-renders caused by callbacks?
What is a pure function?
Why are pure functions preferred in React?
