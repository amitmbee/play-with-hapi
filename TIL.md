### HapiJS

- Config over code

#### Routing

- Get a server instance/reference

```js
server.route({
    method: ["GET", "POST"],
    path: "/",
    handler: (req, h) => {
        return h.redirect('/') // Always return something from handler function
    }
})
```

#### Middleware vs plugin

- To extend its functionality, Express uses middleware. Middleware essentially is a sequence of functions using callbacks to execute the next function.

- The issue with this is as your application grows in size and complexity, the order at which middleware executes becomes more crucial and more difficult to maintain.


#### To send a response, you simply return a value and Hapi will send the appropriate body and headers.

- An Object will respond with stringified JSON and Content-Type: application/json
- String values will be Content-Type: text/html
- You can also return a Promise or Stream.