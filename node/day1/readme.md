1. What is HTTP and how does it work? Explain the request–response cycle.

HTTP (HyperText Transfer Protocol) is an application-layer protocol used for communication between a client (browser, mobile app) and a server over the web.
Request–Response Cycle:
Client sends an HTTP request (URL, method, headers, body)
Server receives and processes the request
Server sends an HTTP response (status code, headers, body)
Client renders or processes the response




2. HTTP Methods and Their Use Cases
Method	             Use Case
GET	                 Fetch data from the server (read-only)
POST	             Create a new resource
PUT	                 Replace an existing resource completely
PATCH	             Update part of an existing resource
DELETE	             remove a resource








3. HTTP Status Codes
HTTP status codes indicate the result of a request.
Categories:
2xx – Success
200 OK
201 Created
3xx – Redirection
301 Moved Permanently
304 Not Modified
4xx – Client Errors
400 Bad Request
401 Unauthorized
404 Not Found
5xx – Server Errors
500 Internal Server Error
502 Bad Gateway






4. What are HTTP Headers?
Headers provide metadata about the request or response.
Common Request Headers:
Authorization
Content-Type
Accept
User-Agent
Common Response Headers:
Content-Type
Set-Cookie
Cache-Control





5. Stateless vs Stateful Protocols
Stateless Protocol:
Server does not store client state
Each request is independent
Example: HTTP
Stateful Protocol:
Server remembers client session
Example: FTP, WebSockets (stateful behavior)
HTTP is stateless, but state can be managed using:
Cookies
Sessions
JWT tokens









6. Idempotency in REST APIs
A request is idempotent if multiple identical requests produce the same result.
Idempotent Methods:
GET
PUT
DELETE
HEAD
Non-Idempotent:
POST (creates new resource every time)
PATCH may or may not be idempotent depending on implementation.








7. What is REST? RESTful API Principles
REST (Representational State Transfer) is an architectural style for building APIs.
REST Principles
Client–Server separation
Statelessness
Uniform interface
Resource-based URLs
Use standard HTTP methods
Cacheable responses