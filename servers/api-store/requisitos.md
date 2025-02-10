# API Products

Model: name, description, price, department, stock, available

## Recuperar todos los productos

Method: GET
Url: /api/products

Response: Array con todos los productos

## Recuperar los productos por departamento

Method: GET
Url: /api/products/dptm/DEPARTAMENTO

Response: Array con todos los productos pertenecientes a DEPARTAMENTO

## Recuperar un producto por ID

Method: GET
Url: /api/products/PRODUCTID

Response: El objeto que representa al producto con id PRODUCTID

## Creación de productos

Method: POST
Url: /api/products
Body: name, description, price, department, stock, available

Response: El nuevo producto creado

## Actualización de productos

Method: PUT
Url: /api/products/PRODUCTID
Body: Los campos a editar

Response: El producto editado

## Borrado de productos

Method: DELETE
Url: /api/products/PRODUCTID

Response: El producto eliminado

# TODO


1. Crear ficheros: routes, controller, model (vacío)
2. Enlazar todas las peticiones que lleguen a app.js con /api con el fichero api.routes
3. Enlazar todas las peticiones que lleguen a api.routes con la url /products con /api/products.routes
4. Métodos en el controlador y enlace con sus respectivas rutas
- Los métodos del controlador responden con **res.send()**

## Recuperar los productos mayores de un precio

Method: GET
Url: /api/products/price/230

Response: Array con todos los productos mayores de un precio


# API USUARIOS

## Registro de usuarios

Method: POST
Url: /api/users/register
Body: username, email, password

Response: mensaje de éxito y los datos del usuario

## Login de usuarios

Method: POST
Url: /api/users/login
Body: email, password

Response: mensaje de éxito y el token

## Solo se pueden borrar productos si eres ADMIN

- Middleware checkAdmin
- Si el usuario logado tiene el role admin, llamamos a next
- Si no tiene dicho role, respondemos con error

- Si hemos atravesado checkToken, tenemos los datos del usuario logado dentro de req.user

## Recuperar el perfil de usuario

Method: GET
Url: /api/users/profile
Headers: Authorization

Response: Todos los datos del usuario logado

1. Método en el controlador
2. Enlace entre ruta y método del controlador
3. Como es una petición autenticada hay que usar checkToken
4. Responder con los datos del usuario