# API Auth - GA7-220501096-AA5-EV01

## Descripción
Servicio web tipo API REST desarrollado con Node.js, Express y MongoDB Atlas para el registro y autenticación de usuarios.

## Tecnologías
- Node.js
- Express
- MongoDB Atlas
- Mongoose

## Endpoints

### Registro
POST /api/auth/register

Body:
{
  "usuario": "test",
  "password": "1234"
}

### Login
POST /api/auth/login

Body:
{
  "usuario": "test",
  "password": "1234"
}

## Ejecución

```bash
cd api-auth
npm install
npm run dev