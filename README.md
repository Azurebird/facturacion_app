# Facturacion APP

## Requirements
- Node version: 10.5.0
- MongoDB version: 4.0

## Folder structure

```
.
├── server
└── *
```

## Docker
You could run the image locally by following these steps:

Build the image

    docker build -t facturacion_app .
  
Run it

    docker run -p 8080:8080 facturacion_app
