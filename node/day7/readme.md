1️.  What is Express.js? Why use it over plain Node.js?
Express.js is a minimal, flexible web framework built on top of Node.js that simplifies building APIs and web servers.
Why not plain Node.js?
With plain Node.js:
You manually handle routes
Parse request bodies yourself
Write repetitive boilerplate code
Why Express?
 Simple routing
Middleware system
Built-in request/response helpers
 Faster development




 2️. What is middleware in Express? Explain the middleware chain.
Middleware is a function that runs between request and response.
(req, res, next) => { ... }
Middleware chain flow:
Request → Middleware 1 → Middleware 2 → Route → Response
next() passes control to the next middleware
If next() is not called → request stops





3️. Types of Middleware in Express
 Application-level middleware
Applies to all routes
app.use(express.json());
 Router-level middleware
Applies to specific routes
router.use(authMiddleware);
 Error-handling middleware
Handles errors centrally
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});
Built-in middleware
express.json()
express.urlencoded()
express.static()
Third-party middleware
cors, morgan, multer






4️. How does error handling work in Express?
Key rule:
Error middleware must have 4 parameters
(err, req, res, next)
Example:
app.get('/', (req, res) => {
  throw new Error('Something broke');
});
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});
Async error handling:
app.get('/', async (req, res, next) => {
  try {
    await something();
  } catch (err) {
    next(err);
  }
});






5️. Difference between app.use() and app.all()
Feature	app.use()	app.all()
HTTP methods	All	All
Path matching	Prefix-based	Exact match
Use case	Middleware	Route handling
app.use('/api', middleware);   // all routes starting with /api
app.all('/test', handler);     // only /test route






6️. Explain routing in Express. How do route parameters work?
Routing maps HTTP methods + paths to handlers.
app.get('/users', handler);
Route parameters:
app.get('/users/:id', (req, res) => {
  console.log(req.params.id);
});

URL:
/users/42 → req.params.id = 42




7️. Route handlers vs Middleware
Middleware:
Pre-process requests
Can modify req / res
Calls next()
app.use(authMiddleware);
Route Handlers:
Final destination
Sends response
app.get('/users', (req, res) => {
  res.json(users);
});




8️. How do you handle file uploads in Express?
Using multer middleware
npm install multer
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

Supports:
single()
array()
fields()





9 . How would you structure a large Express application?
Recommended folder structure:
src/
├── controllers/
├── routes/
├── services/
├── models/
├── middlewares/
├── utils/
├── config/
├── app.js
└── server.js
Why this works:
 Separation of concerns
 Testable code
 Scalable
 Team-friendly

// routes/user.routes.js
router.get('/', userController.getUsers);