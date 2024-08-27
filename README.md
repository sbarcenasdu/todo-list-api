
# Todo List API

Esta es una API RESTful desarrollada con [NestJS](https://nestjs.com/) para gestionar una aplicación de lista de tareas. La API permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre las tareas y está diseñada para ser escalable y fácil de mantener.

## Características

- **CRUD completo**: Endpoints para crear, leer, actualizar y eliminar tareas.
- **Persistencia**: Integración con [TypeORM](https://typeorm.io/) para la gestión de la base de datos PostgreSQL.
- **Modularidad**: Arquitectura modular que facilita la extensión y mantenimiento de la API.
- **Manejo de errores**: Respuestas claras y consistentes en caso de errores.

## Tecnologías

- **Node.js** y **TypeScript**: Lenguaje principal para el desarrollo.
- **NestJS**: Framework para construir aplicaciones Node.js eficientes y escalables.
- **TypeORM**: ORM para la interacción con la base de datos PostgreSQL.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.

## Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/sbarcenasdu/todo-list-api.git
   cd todo-list-api
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Configura la base de datos PostgreSQL en en las variables de entorno `.env`
	```bash
	DATABASE_HOST=tu_host
	DATABASE_PORT=tu_puerto
	DATABASE_USER=tu_usuario
	DATABASE_PASSWORD=tu_contraseña
	DATABASE_NAME=tu_base_de_datos
	```


4. Ejecuta las migraciones para crear las tablas necesarias:
   ```bash
   npm run migration:run
   ```

5. Inicia la aplicación:
   ```bash
   npm run start
   ```

## Uso

Una vez que la API esté en funcionamiento, puedes interactuar con ella mediante herramientas como [Postman](https://www.postman.com/) o [curl](https://curl.se/). A continuación se describen algunos de los endpoints disponibles:

- **Obtener todas las tareas**
  ```http
  GET /tasks
  ```
  Retorna una lista de todas las tareas.

- **Crear una nueva tarea**
  ```http
  POST /tasks
  ```
  Cuerpo de la solicitud:
  ```json
  {
    "title": "Nueva tarea",
    "description": "Descripción de la tarea",
    "completed": false
  }
  ```

- **Actualizar una tarea existente**
  ```http
  PUT /tasks/:id
  ```
  Cuerpo de la solicitud:
  ```json
  {
    "title": "Tarea actualizada",
    "description": "Descripción actualizada",
    "completed": true
  }
  ```

- **Eliminar una tarea**
  ```http
  DELETE /tasks/:id
  ```

## Estructura del Proyecto

```bash
├── .env                        # Variables de entorno, incluyendo datos sensibles de la base de datos
├── .gitignore                  # Archivos y directorios que Git debe ignorar
├── package.json                # Dependencias y scripts del proyecto
├── tsconfig.json               # Configuración de TypeScript
└── src
    ├── app.controller.ts       # Controlador principal de la aplicación
    ├── app.module.ts           # Módulo principal de la aplicación
    ├── main.ts                 # Punto de entrada de la aplicación
    └── tasks
        ├── tasks.controller.ts # Controlador para manejar las solicitudes HTTP relacionadas con tareas
        ├── tasks.module.ts     # Módulo de las tareas
        ├── tasks.service.ts    # Lógica de negocio para las tareas
        └── entities
            └── task.entity.ts  # Definición de la entidad Task

```

## Contacto

Desarrollado por [Sebastián Bárcenas](https://github.com/sbarcenasdu) - si tienes alguna pregunta, no dudes en contactarme.
