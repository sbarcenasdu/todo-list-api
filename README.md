
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

3. Configura la base de datos PostgreSQL en el archivo `ormconfig.json` o en las variables de entorno.

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
├── src
│   ├── tasks
│   │   ├── task.entity.ts      # Definición de la entidad Task
│   │   ├── tasks.service.ts    # Lógica de negocio para las tareas
│   │   ├── tasks.controller.ts # Controlador para manejar las solicitudes HTTP
│   │   └── tasks.module.ts     # Módulo de las tareas
│   └── app.module.ts           # Módulo principal de la aplicación
├── test                        # Pruebas unitarias y de integración
├── ormconfig.json              # Configuración de TypeORM
├── package.json                # Dependencias y scripts
└── README.md                   # Descripción del proyecto
```

## Contribución

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza tus cambios y haz commit (`git commit -m 'Añadir nueva funcionalidad'`).
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para obtener más detalles.

## Contacto

Desarrollado por [Sebastián Bárcenas](https://github.com/sbarcenasdu) - si tienes alguna pregunta, no dudes en contactarme.
