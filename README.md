# Redux
All the things I have learned about Redux related stuff from Udacity React Nanodegree.

## Q&A
**Question:**
The connect function in the react-redux topic, has the following signature:
```javascript
function connect(mapStateToProps) {
  return (component) => {
  ...
  return ConnectedComponent 
}
```

So we have used a higher order function to achieve the functionality we want. Essentially, we only need to provide the states that needed as well as the component to be rendered. My question is that this higher order function seems confusing and unless they are used by Tyler, I have not a good idea on when to use them? Why the same functionality cannot be achieved by a single function like this:
```javascript
function connect(mapsStateToProps, component)
```

I tried this first order function and it is working. If I wanted to start on writing the connect function, I would have started with a first order function as above and not a higher order one but clearly there is a benefit (or some sort of power) with higher order functions?

I am generally wondering when to use higher order functions? Middleware are in the same plate where there are functions withing functions.

**Answer:**
Why the same functionality cannot be achieved by a single function like this:
```javascript
function connect(mapsStateToProps, component)
```

No you can't achieve this functionality using a single function if you are going to call the connect method the way shown below.

Remember how the connect method is going to be invoked-
```javascript
export default connect(mapStateToProps)(App)
```
*here mapStateToProps is a method that that returns an object having desired key-value pairs from a piece of state.*

Now looking at this connect method call you can notice the following-
1. It accepts mapStateToProps and [some other optional arguments](https://react-redux.js.org/api/connect#connect-parameters).
2. It returns a function that takes your component as the argument.

You can clearly see that implementation suggested by the instructor in the video take care of the above two things.

In your implementation, you are passing your component as a parameter which won't work because here **connect will return the function (which will modify our component ) rather than calling it inside itself.** We will invoke this returned function explicitly passing our component as the argument [using the second pair of ( )] and get the modified component.

This might seem to be a bit unusual syntax but it is a popular pattern used in JavaScript and is called function currying. [You can learn more about it here](https://javascript.info/currying-partials).

*Function currying simply means take a function, transform it and return. Currying doesn’t call a function. It just transforms it.*

Now the thing here is, you might have used a different syntax to achieve the same result but then you would have needed to change the way you invoke the connect method. 

In this course, the instructor is actually following the exact pattern while implementing connect (in fact all other features you studied in the course) that has been used by the creator of redux and react-redux library so that at the end of the course you understand how these library works under the hood.

>     I tried this first order function and it is working. If I wanted to start on writing the connect function, I would have started with a first order function as above and not a higher order one but clearly there is a benefit (or some sort of power) with higher order functions? I am generally wondering when to use higher order functions? Middleware are in the same plate where there are functions withing functions.

The point here is, you don't really need to bother that much about why a certain feature have been implemented in a certain way because they have already been implemented by the creators of these libraries considering certain advantages they got following a particular pattern. For example, in this case the connect method enjoys [these](https://javascript.info/currying-partials#currying-what-for) advantages of the concept function currying.

Similarly higher order functions is used when we want to pass a function as an argument to a function or return a function from another function (in fact this is the definition of higher order function).

<hr />