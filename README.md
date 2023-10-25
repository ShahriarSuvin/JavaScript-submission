# JavaScript-submission

# JavaScript-submission for descriptive question.

`1.`Explain the difference between 'if...else' and 'switch' statements for conditional logic.?
        <h4>if-else</h4>
    ->if...else statements are the basic form of conditional control flow in JavaScript.
    ->It is used for eather 'true' or 'false'.
    -> It's flexible and can handle complex conditions

    <h4>switch</h4>
    ->When need to test a single expression against multiple possible values and execute different code blocks than use switch statements.
    ->A default case can be used to provide a fallback option.
    ->If many cases to check, than 'switch' is more useful from 'if-else'.

`2.`What is JavaScript, and what is its primary purpose in web development?
    ->JavaScript is a high-level, versatile, and widely-used programming language.
    #Primary Purpose in Web Development are:
                    ->Enhancing Interactivity
                    ->Dynamic Content
                    ->Handling User Input
                    ->Cross-Browser Compatibility

`3.`Explain the difference between var, let, and const when declaring variables in JavaScript.
        <h4>var</h4>
            ->Variables declared with var are function-scoped. This means they are only visible within the function in which they are declared, or globally if declared outside of any function.
        <h4>let</h4>
            ->Variables declared with let are block-scoped. They are only visible within the block in which they are declared
        <h4>const</h4>
            ->Variables declared with const are also block-scoped just like let. The key difference is that const variables must be initialized when declared and their value cannot be reassigned once set.

`4.`Explain the concept of "scope" in JavaScript and the difference between global and local scope.
    ->In JavaScript, "scope" refers to the context in which variables and functions are declared and accessed. 
            <h4>Local scope</h4>
                ->Local scope refers to the scope within functions or blocks. Variables declared within a function are typically local to that function and are not accessible from outside the function.
                ->Local scope provides encapsulation, which means variables declared within a function do not interfere with or overwrite variables of the same name in other scopes
            <h4>Global scope</h4>
                ->Variables and functions declared in the global scope are accessible from any part of your JavaScript code, both within and outside functions.
                ->Global scope refers to the outermost scope in your JavaScript code, which is often the entire web page or the top-level environment where your script is running.

`5.`What is the difference between "null" and "undefined" in JavaScript?
        <h4>Null</h4>
            ->null is also a primitive value, but it is used to explicitly indicate the absence of any object value.
            ->You can assign null to a variable or object property to indicate that it doesn't reference an object or doesn't have a meaningful value.
        <h4>Undefined</h4>
            ->undefined is a primitive value in JavaScript that typically represents the absence of a value, especially when a variable has been declared but not assigned a value.
            ->When a variable is declared but not initialized, or when a function doesn't explicitly return a value, it is set to undefined by default.

            <h3>Author : Suvin</h3>
