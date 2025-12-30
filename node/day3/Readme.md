##  What is JWT (JSON Web Token)?

JWT is a **compact, URL-safe token** used to securely transmit information between a client and a server.
It is commonly used for **authentication and authorization** in REST APIs.

JWT is **stateless** → the server does not store session data.

###  JWT Structure

A JWT has **three parts**, separated by dots (`.`):



 Payload is **Base64 encoded, not encrypted**.


### 🔹 Signature

Used to **verify token integrity**.
HMACSHA256(
  base64(header) + "." + base64(payload),
  secret
)




##  How does JWT Authentication work?

###  Authentication Flow

1. User logs in with credentials
2. Server verifies credentials
3. Server generates JWT
4. JWT is sent to client
5. Client stores JWT
6. Client sends JWT with each request
7. Server verifies JWT before allowing access


Authorization: Bearer <JWT_TOKEN>


 JWT vs Sessions

Advantages of JWT

* Stateless (scales well)
* No server-side session storage
* Works well with microservices
* Can store user roles/claims

 Disadvantages of JWT

* Cannot easily invalidate tokens
* Larger payload size
* Security risk if token is stolen
* Token stored on client

 Sessions (Comparison)

| Feature     | JWT       | Session  |
| ----------- | --------- | -------- |
| Storage     | Client    | Server   |
| Scalability | High      | Low      |
| Revocation  | Hard      | Easy     |
| State       | Stateless | Stateful |



## Where should JWT be stored on the client?

###  localStorage

 Easy to use
 Vulnerable to XSS attacks

###  Cookies (HTTP-only)

 Safer against XSS
 Needs CSRF protection

### Memory (Recommended for SPAs)

 Most secure
 Token lost on refresh

###  Best Practice

* **Access Token** → Memory
* **Refresh Token** → HTTP-only Cookie

---

##  Access Token vs Refresh Token

###  Access Token

* Short-lived (5–15 min)
* Used for API requests
* Stored in memory

### Refresh Token

* Long-lived (days)
* Used to get new access token
* Stored in HTTP-only cookie

| Feature  | Access    | Refresh       |
| -------- | --------- | ------------- |
| Lifetime | Short     | Long          |
| Usage    | API calls | Token renewal |
| Storage  | Memory    | Cookie        |

---

##  Handling JWT Expiration & Refresh

###  Flow

1. Access token expires
2. API returns `401 Unauthorized`
3. Client sends refresh token
4. Server verifies refresh token
5. New access token issued
6. Client retries request

### Security Measures

* Rotate refresh tokens
* Store refresh tokens in DB
* Blacklist compromised tokens

---

 What is Role-Based Access Control (RBAC)?

RBAC restricts access based on **user roles**.

###  Example Roles

* Admin
* User
* Moderator

### Example

* Admin → Create/Delete users
* User → View content only



 How to implement Authorization in an API?

 Step 1: Authentication Middleware

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("No token");

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
}
```

---

 Step 2: Authorization Middleware

function authorize(roles = []) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).send("Forbidden");
    }
    next();
  };
}

 Protected Route Example
app.delete(
  "/users/:id",
  authenticate,
  authorize(["admin"]),
  deleteUser
);

