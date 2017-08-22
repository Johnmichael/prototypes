line 11, if not commented out, will console.log

you ate the waffle
you ate the waffle


if commented out, will console.log

you ate the undefined <!-- (1)  -->
you ate the banana    <!-- (2)  -->

explanation:

1. when commented out, waffle does not have anything assigned it the type property
-- when it looks at it's prototype (the food object) -- it will not have anything their either,
so it returns "undefined"



2.  Here, we assigned this string to the type property on the food object.  (Line 13)
Meaning, on this call even though init is commented out, 'banana' is an object with the type property.

The string will fall back to it's prototype and there it will find the methods init, and eat.



prototypes-typechecking.js

Simple exercise for checking different objects's prototype is 'food'
