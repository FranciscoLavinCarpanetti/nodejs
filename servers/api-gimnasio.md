# API Gimnasio

## Recuperar todos los clientes

Method: GET
Url: /api/clientes
Headers: XXX
Body: XXX

Response: Array con todos los clientes

## Recuperar un único cliente

Method: GET
Url: /api/clientes/IDCLIENTE
Headers: XXX
Body: XXX

Response: Un único objeto con los datos del cliente

## Recuperar los clientes mayores de una edad

Method: GET
Url: /api/clientes/edad/34
Headers: XXX
Body: XXX

Response: Un array con todos los clientes mayores de la edad especificada.  

## Creación de clientes

Method: POST
Url: /api/clientes
Headers: Content-Type -> application/json
Body: nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni

Response: Los datos del nuevo cliente

## Actualizar un único cliente COMPLETO

Method: PUT
Url: /api/clientes/IDCLIENTE
Headers: Content-Type -> application/json
Body: nombre, apellidos, direccion, email, edad, sexo, cuota, fecha_nacimiento, dni

Response: Los datos del cliente actualizado

## Borrar un único cliente

Method: DELETE
Url: /api/clientes/IDCLIENTE
Headers: XXX
Body: XXX

Response: Los datos del cliente borrado

1. Método en el controlador
2. Ruta 
3. Método en el modelo para borrar (delete from clientes where id = XXX)
4. Ejecutamos la query de borrado en el controlador
5. Investigamos cómo podemos responder con los datos del cliente borrado


## Recuperación de monitores

Method: GET
Url: /api/monitores

Response: Array con todos los monitores

1. Crear ficheros de rutas, modelo y controlador
2. Definir la RUTA. ¡Cuidado porque hay que definir la ruta /api/monitores desde api.routes!
3. Asociar el método del controlador con la ruta
4. Crear una función en el modelo que lance la query 

select * from monitores

5. En el controlador ejecutamos el método de la query y respondemos con el resultado

## Recuperar los datos de todos los monitores y sus clientes asociados

Method: GET
Url: /api/monitores/clientes
Headers: XXXX
Body: XXXX

Response: 
```json
[
    { 
        "id": 1, 
        "nombre": "Glenna Shepherd", 
        "experiencia": 19, 
        "clientes": [{}, {}]
    },
    { 
        "id": 2,
        "nombre": "Tamara Solomon", 
        "experiencia": 19, 
        "clientes": []
    },
]
```