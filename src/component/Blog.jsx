import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-3xl text-center mt-5 mx-24'>When should you use context API</h1>
            <p >Get data that needs to be accessible by multiple components at different levels of the component tree.
                deeply nested components that need to access data from the parent component without having to pass props through each intermediate component.
                When we want to avoid prop drilling, which is the process of passing props through multiple components just to get the data to a deeply nested component.</p>
            <h1 className='text-3xl text-center mt-5'>What is a custom hook</h1>
            <p className='text-1xl  text-center mt-4'>A custom hook in React is a reusable function that contains some logic and state that can be shared across multiple components. Custom hooks allow you to extract complex logic from a component and reuse it in other components, making it easier to manage and maintain your code.</p>
            <h1 className='text-3xl text-center mt-5'>
                What is useRef
            </h1>
            <p className='text-1xl  text-center mt-4'>useRef is a hook in React that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the entire lifecycle of the component.</p>
            <h1 className='text-3xl text-center mt-5'>
                What is useMemo
            </h1>
            <p className='text-1xl  text-center mt-4'>useMemo is a hook in React that is used to memoize the result of a function call. Memoization is a technique used to optimize expensive computations by caching the results of function calls so that the same computation doesn't have to be performed again.</p>



        </div>
    );
};

export default Blog;