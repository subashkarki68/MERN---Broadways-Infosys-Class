# Learning Summary: Creating a Basic HTTP Server with Node.js

In this project, I've delved into creating a simple HTTP server using Node.js, mastering several key concepts:

## 1. Setting Up an HTTP Server

- Imported the `http` module from Node.js.
- Created an HTTP server using the `createServer` method.

## 2. Handling Different Routes

- Implemented route handling based on the requested URL (`req.url`).
- Set appropriate status codes (`res.statusCode`) for each route.

## 3. Redirecting and Handling Redirects

- Demonstrated a redirect scenario with a `301` status code and specified the new location using `res.setHeader("Location", "/new-location")`.
- Utilized `res.end()` to conclude the response during a redirect.

## 4. Reading and Serving HTML Content

- Employed the `readFile` function from the `fs` module to read HTML content from files.
- Set the `Content-Type` header to specify that the response contains HTML content (`res.setHeader("Content-Type", "text/html")`).
- Served the HTML content back to the client using `res.end(data)`.

## 5. Listening on a Specific Port

- Used the `listen` method to initiate the server, specifying the listening port and host (`localhost` in this case).
- Logged a message to signal that the server is actively listening on a specific port.

**Conclusion:**
This project establishes a foundational understanding of building a basic HTTP server, encompassing route handling, redirects, and serving HTML content. Further enhancements and features can be seamlessly added based on specific project requirements.

