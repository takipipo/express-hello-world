# express-hello-world

## Overview

This is my first web API using Express.js which is a Node.js framework to implement RESTful API.

## Acknowledgement

This is a tutorial from Mosh. You can visit the tutorial via this [link](https://www.youtube.com/watch?v=pKd0Rpw7O48&list=WL&index=1)

## Getting started

```
# Step 1: clone the repository
git clone https://github.com/takipipo/express-hello-world.git

# Step 2: install dependencies
npm install

# Step 3: Expose a port of your choice
# if PORT = 80
export PORT=80

# Step 4: Run the API
node app.js
```

## Entry Points <br>

### Note that every examples are independent.

### `GET request`

```
GET: /
>>> Hello World
GET: /api/courses
>>> [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
]
GET: /api/courses/1
>>> { id: 1, name: "course1" }
```

### `POST request`

```
POST: /api/courses
body = {
  "name": "course4"
}
>>> { id: 4, name: "course4" }
```

### `PUT request`

```
PUT: /api/courses/2
body = {
  "name":"ReactJS"
}
>>> {id: 2, name:"ReactJS"}
```

### `DELETE request`

```
DELETE: /api/courses/3
>>> [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
]
```
