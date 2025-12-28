1. What is HTTPS? How does it differ from HTTP?

HTTP (HyperText Transfer Protocol)
- Sends data in plain text
- Vulnerable to man-in-the-middle (MITM) attacks
- No data integrity or confidentiality
- Uses port 80
HTTPS (HTTP Secure)
- HTTP + SSL/TLS encryption
- Data is encrypted during transmission
- Ensures confidentiality, integrity, and authentication
- Uses port 443

Key Differences

| Feature | HTTP | HTTPS |
|------|------|-------|
| Encryption |  No |  Yes |
| Security | Low | High |
| Data tampering | Possible | Prevented |
| Certificate required | No | Yes |

---

2. Explain SSL/TLS. What is the SSL Handshake Process?

SSL/TLS
- SSL (Secure Sockets Layer) and TLS (Transport Layer Security)are protocols for secure communication.
- TLS is the modern replacement for SSL.

SSL/TLS Handshake Steps
1. Client sends Client Hello (supported cipher suites)
2. Server sends Server Hello + SSL certificate
3. Client verifies certificate with Certificate Authority
4. Client generates a session key
5. Session key is encrypted using server’s public key
6. Secure communication begins using symmetric encryption

---

3. What is Encryption? Symmetric vs Asymmetric Encryption

Encryption
Process of converting data into unreadable form to prevent unauthorized access.

Symmetric Encryption
- Same key used for encryption & decryption
- Fast and efficient
- Example: AES

Asymmetric Encryption
- Uses public key (encrypt) & private key (decrypt)
- Slower than symmetric
- Example: RSA

| Feature | Symmetric | Asymmetric |
|------|----------|------------|
| Keys | One | Public + Private |
| Speed | Fast | Slower |
| Usage | Data transfer | Key exchange |

---

4. What are Certificates? What is a Certificate Authority (CA)?

Digital Certificates
- Verify the identity of a website
- Contains:
  - Public key
  - Domain name
  - Issuer (CA)
  - Expiry date

Certificate Authority (CA)
- Trusted organization that issues certificates
- Examples:
  - DigiCert
  - Let’s Encrypt
  - GlobalSign


---

5. Difference Between Authentication and Authorization

Authentication
- Verifies who you are
- Example: Login with email & password

Authorization
- Verifies what you can access
- Example: Admin vs User permissions

| Authentication | Authorization |
|---------------|---------------|
| Identity check | Permission check |
| Happens first | Happens after auth |
| Login | Access control |

---

 6. Explain Session-Based Authentication

 How Sessions Work
1. User logs in with credentials
2. Server creates a session
3. Session ID stored on server
4. Session ID sent to client via cookie
5. Client sends cookie on each request
6. Server validates session ID

Pros & Cons

Simple to implement  
Server memory usage  
Hard to scale (stateful)

---

7. What are Cookies? Cookie Security Attributes

Cookies
- Small data stored in browser
- Sent automatically with HTTP requests

Important Cookie Attributes

HttpOnly
- Prevents access via JavaScript
- Protects against XSS

 Secure
- Cookie sent only over HTTPS

SameSite
- Controls cross-site requests
- Values:
  - `Strict`
  - `Lax`
  - `None`
