1. What is CORS? Why does it exist?
CORS (Cross-Origin Resource Sharing) is a browser security mechanism that controls how a web page from one origin can request resources from another origin.
It exists to:
Prevent malicious websites from accessing sensitive data from another domain
Allow controlled, secure cross-origin communication
Example:
Frontend → http://localhost:3000
Backend → http://localhost:5000
➡ Different origins → CORS rules apply



2. Explain the Same-Origin Policy (SOP)
The Same-Origin Policy is a browser security rule that blocks JavaScript from accessing resources from another origin.
An origin is defined by:
Protocol (http / https)
Domain
Port




3. What are preflight requests? When do they occur?
A preflight request is an OPTIONS HTTP request sent by the browser before the actual request
It occurs when the request is:
Not a “simple request”
Uses methods like PUT, DELETE, PATCH
Has custom headers (e.g., Authorization)
Uses Content-Type: application/json
Purpose:
To ask the server: “Is this request allowed?”
If server responds with proper CORS headers → request proceeds.




4. What is CSRF? How do you prevent it?
CSRF (Cross-Site Request Forgery) tricks a logged-in user into performing actions without consent.
Example:
User logged into bank site
Visits malicious site
Malicious request transfers money using user’s cookies
Prevention:
CSRF tokens
SameSite cookies
Double submit cookies
Require Authorization headers (JWT)






5. What is XSS? How do you prevent it?
XSS (Cross-Site Scripting) allows attackers to inject malicious JavaScript into a website.
Types:
Stored XSS
Reflected XSS
DOM-based XSS
Prevention:
Escape user input
Use React (auto-escapes JSX)
Content Security Policy (CSP)
Avoid innerHTML






6. What is SQL Injection? How do you prevent it?
SQL Injection occurs when attackers inject SQL commands via user input.
Example (vulnerable):
SELECT * FROM users WHERE email = '${email}'
Prevention:
Prepared statements
Parameterized queries
ORM/ODM (Mongoose, Prisma)
Input validation
Safe example:
User.findOne({ email });







7. What is the principle of least privilege?

The Principle of Least Privilege (PoLP) states:
Give users or systems only the minimum permissions required to perform their task.
Examples:
User → read-only access
Admin → full access
Database user → only required tables
Benefits:
Reduces attack surface
Limits damage if compromised
Improves security