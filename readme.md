# aplicacion de servicios crud (reservas de horas hoteleras)
## modo de uso
Instalar los archivos con el comando npm y luego usar node server.js para correr el puerto

- En la URL del navegador escribir: "http://localhost:5000/api/reservas"
- Interactuar con las diferentes opciones que la api ofrece:
`Id`, `email`, `hotel`, `tipo_habitacion`, `fecha_inicio`, `fecha_fin`, `num_huespedes`, 
### Ejemplo
"http://localhost:5000/api/reservas/?fecha_inicio=2024-03-01&fecha_fin=2024-12-01"

- En el archivo `mock.js` se proporcionan algunos datos iniciales. Si quiere usar la API desde cero; dejar el array vacío.
- Puedes interactuar con la api en la plataforma de `Insomnia` llenando los siguientes campos:
email,
hotel,
roomType,
checkInDate,
checkOutDate,
adults,
children,