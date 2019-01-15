# Facturacion APP
This repository was created with the purpose the train my skills in node using different tools like:
- Node: Tool which runs JS throught the V8 engine.
- Babel: Transpiler to write ES6 code in Node.
- Docker: Tool to create containers.
- Eslint: To make use of the better ES6 practices.

The Entry point of the applicaction is `./server/app.js` from there you could reach every corner of the project.

## Requirements
- Node version: 10.5.0
- MongoDB version: 4.0

## Folder structure

```
.
├── server                                      # All the application is here
│   ├── api                                     # The exposed api with different services
│   └── config                                  # Some configuration files
├── test                                        # Empty folder with no tests
└── *
```

## Docker
You could run the image locally by following these steps:

Build the image

    docker build -t facturacion_app .
  
Run it

    docker run -p 8080:8080 facturacion_app
