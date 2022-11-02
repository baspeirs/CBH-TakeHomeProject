# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

- Started by writing a function for generating a hash value + update + digest and returning result. I noticed the code was preforming this action more than once and by implementing this, the code is not only following 'DRY' principals, but is also easier to digest since each line using the function consists only of the function (named so you know what its doing) the parameter (so you know what the input is - in this case the input is the update value) - and the variable that the result is being saved to. Next I noticed that there were nested IF statements. the first nested statement I was able to say "if event does not exist - throw error". This allowed me to extract the if statement nested inside of the "if event exists" block, making it easier to understand and adding the throw error will allow for easier debugging. I was also able to remove some IF block nesting by adding an "&&" statement by saying "if candidate exists and type of is 'string'" instead. All the changes I made make the code easier to read by removing nested statements and by implementing 'DRY' code. 
