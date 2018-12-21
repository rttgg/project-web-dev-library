import React, { Component } from "react";


class Vocabulary extends Component {
    render() {
        return (
            <div>
            <h2>Vocabulary Library</h2>
            
            <p><strong> FRONT END </strong>=  Front end describes all the parts of a website that can be seen and 
            interacted with by users. Front end web development usually involves coding with "HTML", "CSS", 
            and "JavaScript". </p>
            
            <p><strong>HTML5 </strong> = is the latest version of HTML. HTML5 focuses on features that can be used on low-powered devices (making it ideal for 
            creating mobile applications), the native ability to work with multimedia and graphic content, and new semantic web tag elements 
            (features you use to structure your pages and documents).</p>

            <p><strong>ELEMENTS</strong> = are individual HTML components of document or webpage. For example, a paragraph in an HTML document is an
              element. Elements are made up of an opening tag, and information between 
               them: </p>
        
            <p><strong>ATTRIBUTES </strong>= are used to provide additional information about HTML elements. For example, 
             an HTML element like a paragraph can have an attribute of being aligned (left, center, or right).
             Attributes are included in the opening tag and made up of the attribute name, an equal sign, 
             and a value in double quotes.</p>
            
            <p><strong>OPENING TAG AND CLOSING TAGS</strong> = are sets of angle brackets with an HTML element character(s) that contains a piece of
             content or part of the structure for a web page. </p>
     
            <p><strong>SELF-CLOSING TAG</strong> = are opening tags that don't have a corresponding closing tag but instead close themselves with 
             a forward slash before the right angel bracket. If you look at this tag to insert an image, you'll see that it has the / which 
             typically denotes closing a tag inside the opening tag. 
             Example: <img src="http://google.com/myimage.jpg" alt="My image"/> </p>
        
            <p><strong>CSS(CASCADING STYLE SHEETS) </strong>= is the language used to add style to documents created with HTML.
               Where HTML comes first and creates the foundation for a page, CSS comes along next and is used to create 
               the page's layout, color, fonts, etc.</p>
           
            <p><strong>Variables</strong> = Containers for storing values</p>
            
            <p><strong>Syntax Error </strong>= produced when a scripts format or shape is incorrect, a misspelling is found, 
             or text is not recognized.</p>
   
            <p><strong>Object</strong> = something that exists like an HTML document, browser window, or the date and time</p>
    
            <p><strong>Instance</strong> = contained in () immediately after a command. Contains information about what an object is to do or
             how to be carried out</p>

            <p><strong>Method </strong>= command that tells how an object is to be acted upon</p>
 
            <p><strong>Document </strong>= object name that refers to the HTML document that contains the JavaScript.</p>
 
            <p><strong>Write</strong> = method that acts upon the object document to post text to a page</p>
 
            <p><strong>Function </strong>= user-defined or built-in set of statements that perform a task. Can also return a value when 
              used as a return statement.</p>
    
            <p><strong>Event Handler </strong>= Attributes of HTML tags embedded in documents. Assigns a JavaScript command or function 
              to execute.</p>
            
            <p><strong>	Property</strong> = Used to describe an object. There are several properties that never change</p>

            <p><strong>Array</strong> = an alternative, easier, and more flexible way to define variables</p>
 
            <p><strong>If Statement</strong> = it simply states that if this condition is true, do this, else do something else.</p>
 
            <p><strong>Else</strong> = a fallback to an if statement</p>
            
            <p><strong>JavaScript </strong>= A scripting language developed by Netscape for HTML documents. Scripts are performed after 
              specific user-triggered events. Creating JavaScript Web documents requires a text editor and compatible browser.</p>
            
            <p><strong>Operator</strong> = Performs a function on one or more operands or variables. Operators are divided into 
              two classes: binary and unary.</p>
    
            <p><strong>Binary operators</strong> = need two operands, and unary operands can operate on a single operand. For example, addition is 
             a binary operand: sum = 1+1 </p>
   
            <p><strong>Unary operands</strong> = are often used to update counters. The following example increases the 
             variable by 1: counter++</p>
    
            <p><strong>Button </strong>= An object that is a form element and must be defined within a tag and can be used to perform 
             an action.</p>
        
            <p><strong>Form </strong>= a property of the document object. Each form in a document is a separate and distinct object that can
             be referenced using the form object. </p>
            
            <p><strong>Math </strong>= Includes properties for mathematical constants and methods for functions.</p>
            
            <p><strong>String</strong> = a series of characters defined by double or single quotes.</p>
            
            <p><strong>Alert </strong>= displays a JavaScript alert dialog box with an OK button and a user-defined message. Before the user 
                can continue, they must press the OK button.</p>
            
            <p><strong>Scope </strong>= scope tells us where a piece of data is accessible. There are two kinds of scope: global and local.</p>
            
            <p><strong>Global scope</strong> = a variable with "global scope" can be accessed from anywhere in our program.</p>
            
            <p><strong>Local scope</strong> = a variable created inside of a function has "local scope." It can only be accessed from inside the 
              function it was created in.</p>
    
            <p><strong>	While loops</strong> = check whether a condition is true and then perform a task as long as the condition is true.</p>
    
            <p><strong>Value properties</strong> = these global properties return a simple value; they have not properties or methods. 
                 ex. Infinity, NaN, undefined, null literal.</p>
    
            <p><strong>NaN </strong>= the global NaN property is a value representing Not-A-Number.</p>
            
            <p><strong>Block </strong>= a block statement is used to group zero or more statements. The block is delimited by a pair of curly
                brackets.</p>
    
            <p><strong>Break</strong> = terminates the current loop, switch, or label statement and transfers program control to the 
            statement following the terminated statement.</p>
            
            <p><strong>Continue</strong> = terminates execution of the statements in the current iteration of the current or labeled loop and 
                continues execution of the loop with the next iteration.</p>
            
            <p><strong>var declaration</strong> = declares a variable, optionally initializing it to a value.</p>
            
            <p><strong>let declaration</strong> = declares a block scope local variable, optionally initializing it to a value.</p>
            
            <p><strong>const declaration</strong> = declares a read-only named constant.</p>
            
            <p><strong>Return</strong>  = specifies the value to be returned by a function.</p>
            
            <p><strong>Class</strong> = declares a class</p>
            
            <p><strong>	While </strong>= creates a loop that executes a specified statement as long as the test condition evaluates to true. 
                The condition is evaluated before executing the statement.</p>
            
            <p><strong>do...while</strong> = creates a loop that executes a specified statement until the test condition evaluates to false. 
                The condition is evaluated after executing the statement, resulting in the specified statement executing at 
                least once.</p>
            
            <p><strong>for </strong>= crates a loop that consists of three optional expressions, enclosed in parentheses and separated by 
                semicolons, followed by a statement executed in the loop.</p>
           
            <p><strong>this</strong> = The this keyword refers to a special property of an execution context.</p>
           
            <p><strong> “,” Comma operator</strong> = the comma operator allows multiple expressions to be evaluated in a single statement and returns the 
                result of the last expression.</p>
           
            <p><strong> Arrow functions </strong>= An arrow functions expression has a shorter syntax than a function expression and does
                not have its own this, arguments, super, or new target. These function expressions are best suited for non-method functions, and they cannot be used as 
                constructors.</p>
            
            <p><strong>React</strong> = is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
            
            <p><strong>Functional components </strong>= React supports a simpler syntax called functional components for component types like
                 Square that only consist of a render method.</p>
           
            <p><strong>JSX</strong> = is a syntax extension to JavaScript. It is similar to a template language, but it has full power of 
                JavaScript. JSX gets compiled to React.createElement() calls which return plain JavaScript objects 
                called “React elements”.</p>
            
            <p><strong>React elements</strong> = are the building blocks of React applications. One might confuse elements with a more widely 
                known concept of “components”. An element describes what you want to see on the screen. React elements are immutable. Typically, 
                elements are not used directly, but get returned from components.</p>
            
            <p><strong>React components </strong>= are small, reusable pieces of code that return a React element to be rendered to the page. 
                The simplest version of React component is a plain JavaScript function that returns a React element:</p>
            
            <p><strong>Props</strong> = are inputs to a React component. They are data passed down from a parent component to a child component.
                Remember that props are read only. They should not be modified in any way:</p>
            
            <p><strong>A “key”</strong> = is a special string attribute you need to include when creating arrays of elements. Keys help React 
                 identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the 
                 elements a stable identity.</p>
            <p><strong>MongoDB</strong> = stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time.
            </p>

            <p><strong>Representational State Transfer (REST)</strong> = is an architectural style that defines a set of constraints and properties based on HTTP. Web Services that conform to the REST architectural style, 
            or RESTful web services, provide interoperability between computer systems on the Internet.</p>

            <p><strong>GraphQL</strong> = is a query language for APIs and a runtime for fulfilling those queries with your existing data.</p>
     </div>
        );
    }
}

export default Vocabulary;