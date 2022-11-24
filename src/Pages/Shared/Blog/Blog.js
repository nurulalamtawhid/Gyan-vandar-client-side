import React from 'react';

const Blog = () => {
    return (
        <section className=" text-gray-800">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 text-gray-600">.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What are the different ways to manage a state in a React application?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">There are four kind of states in React, local state,global state,server state, url state.Local state managed by usestate hook, Global state managed by authenticated userstate,server state can be managed by Ract Query,we can manage Url statte through uselocation hook since we use react router dom. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">How does prototypical inheritance work?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Prototypical inheritance work like an object can inherit the properties and methods of another object,Simce its a feature of javascript which allows and to add methods and properties in objects  </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600">What is a unit test? Why should we write unit tests?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600"> Unit test is a testing to validate ,each unit of the software code performs as expected.To decrease defects and expose them early in the development lifecycle and increase the code readability we should we use the unit test. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-emerald-600"> React vs. Angular vs. Vue?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Facebook released React.js in March 2013 as a JavaScript library.React.js uses a virtual DOM that only compares the previous HTML code differences and only loads the different parts which  impacts the loading times.AngularJS was developed in 2009 by Google.Angular.js is an MVC framework. A major disadvantage of Angular is that it uses a regular DOM, which massively impacts the loading time. Vuejs was developed by ex-Google employee Evan You in 2014.Vue.js core library focuses on the View layer only. It’s called a progressive framework because you can extend its functionality with official and third-party packages, such as Vue Router or Vuex, to turn it into an actual framework</p>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default Blog;