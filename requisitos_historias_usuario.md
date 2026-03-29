# Requisitos Funcionales e Historias de Usuario
## Plataforma de Arrendamiento de Inmuebles

---

## 1. Roles del Sistema

| Rol | Descripción |
|---|---|
| **Usuario anónimo** | Visitante sin autenticación. Solo puede consultar. |
| **Arrendatario** | Usuario autenticado que publica inmuebles para arrendar. |
| **Arrendador** | Usuario autenticado que busca, arrienda, comenta y califica inmuebles. |

> Un mismo usuario registrado puede actuar como arrendatario (publicando) y como arrendador (arrendando), dependiendo de la acción que realice.

---

## 2. Requisitos Funcionales

### RF-01 — Autenticación y gestión de usuarios

- **RF-01.1** El sistema debe permitir el registro de nuevos usuarios mediante correo electrónico y contraseña.
- **RF-01.2** El sistema debe permitir el inicio de sesión con credenciales registradas.
- **RF-01.3** El sistema debe permitir el cierre de sesión.
- **RF-01.4** El sistema debe permitir la recuperación de contraseña mediante correo electrónico.
- **RF-01.5** Los usuarios no autenticados podrán navegar y consultar inmuebles, calificaciones y comentarios, pero no podrán publicar, arrendar, comentar ni calificar.
- **RF-01.6** El sistema debe diferenciar y controlar los permisos según el rol del usuario autenticado.

---

### RF-02 — Publicación de inmuebles (Arrendatario)

- **RF-02.1** El arrendatario autenticado debe poder crear una publicación de inmueble.
- **RF-02.2** La publicación debe incluir al menos: título, descripción, dirección, precio de arriendo, tipo de inmueble y disponibilidad.
- **RF-02.3** El arrendatario debe poder subir una o más fotografías del inmueble.
- **RF-02.4** El arrendatario debe poder subir videos cortos del inmueble.
- **RF-02.5** El arrendatario debe poder editar la información de sus publicaciones en cualquier momento.
- **RF-02.6** El arrendatario debe poder desactivar o eliminar sus publicaciones.
- **RF-02.7** El sistema debe mostrar el estado de la publicación (disponible, arrendado, desactivado).

---

### RF-03 — Consulta de inmuebles (Todos los usuarios)

- **RF-03.1** Cualquier usuario (autenticado o no) debe poder ver el listado de inmuebles publicados.
- **RF-03.2** Cualquier usuario debe poder ver el detalle de un inmueble: descripción, fotos, videos, precio, calificación promedio y comentarios.
- **RF-03.3** El sistema debe permitir filtrar inmuebles por criterios como tipo, precio, ubicación y calificación.
- **RF-03.4** El sistema debe permitir buscar inmuebles por palabras clave.
- **RF-03.5** El listado de inmuebles debe mostrar información resumida: foto principal, título, precio, calificación promedio y disponibilidad.

---

### RF-04 — Arriendo de inmuebles (Arrendador autenticado)

- **RF-04.1** El arrendador autenticado debe poder enviar una solicitud de arriendo sobre un inmueble disponible.
- **RF-04.2** El sistema debe notificar al arrendatario cuando reciba una solicitud de arriendo.
- **RF-04.3** El arrendatario debe poder aceptar o rechazar solicitudes de arriendo.
- **RF-04.4** Una vez aceptada la solicitud, el estado del inmueble debe cambiar a "arrendado".
- **RF-04.5** El sistema debe mantener un historial de arriendos por usuario arrendador.
- **RF-04.6** El sistema debe impedir que un usuario arriende su propio inmueble.

---

### RF-05 — Calificación de inmuebles (Arrendador con historial)

- **RF-05.1** Solo los usuarios que hayan arrendado un inmueble en algún momento podrán calificarlo.
- **RF-05.2** La calificación debe ser numérica (por ejemplo, de 1 a 5 estrellas).
- **RF-05.3** Cada usuario puede calificar un mismo inmueble una sola vez, pero puede editar su calificación.
- **RF-05.4** El sistema debe calcular y mostrar el promedio de calificaciones de cada inmueble.
- **RF-05.5** Las calificaciones deben ser visibles para todos los usuarios, incluidos los no autenticados.

---

### RF-06 — Comentarios sobre inmuebles (Arrendador con historial)

- **RF-06.1** Solo los usuarios que hayan arrendado un inmueble en algún momento podrán comentarlo.
- **RF-06.2** El comentario debe estar asociado al usuario que lo realizó y mostrar la fecha de publicación.
- **RF-06.3** El usuario autor de un comentario debe poder editarlo o eliminarlo.
- **RF-06.4** Los comentarios deben ser visibles para todos los usuarios, incluidos los no autenticados.
- **RF-06.5** El arrendatario dueño de la publicación debe poder reportar comentarios inapropiados.

---

## 3. Historias de Usuario

---

### Épica 1: Autenticación

---

**HU-01 — Registro de usuario**

> Como visitante, quiero registrarme con mi correo y una contraseña, para poder acceder a las funcionalidades de la plataforma como arrendar, publicar, comentar o calificar.

**Criterios de aceptación:**
- El formulario solicita nombre, correo electrónico y contraseña.
- El sistema valida que el correo no esté previamente registrado.
- La contraseña debe cumplir requisitos mínimos de seguridad.
- Al completar el registro, el usuario queda autenticado automáticamente.

---

**HU-02 — Inicio de sesión**

> Como usuario registrado, quiero iniciar sesión con mis credenciales, para acceder a mi cuenta y utilizar las funciones que requieren autenticación.

**Criterios de aceptación:**
- El sistema valida correo y contraseña.
- Muestra mensaje de error si las credenciales son incorrectas.
- Redirige al usuario a la página principal tras el inicio de sesión exitoso.

---

**HU-03 — Cierre de sesión**

> Como usuario autenticado, quiero cerrar sesión, para proteger mi cuenta cuando termino de usar la plataforma.

**Criterios de aceptación:**
- La opción de cerrar sesión está disponible desde cualquier pantalla.
- Al cerrar sesión, el usuario es redirigido a la vista pública.

---

**HU-04 — Recuperación de contraseña**

> Como usuario registrado, quiero recuperar mi contraseña en caso de olvidarla, para poder volver a acceder a mi cuenta.

**Criterios de aceptación:**
- El usuario ingresa su correo y recibe un enlace de recuperación.
- El enlace expira después de un tiempo determinado.
- El usuario puede establecer una nueva contraseña desde el enlace.

---

### Épica 2: Consulta de inmuebles

---

**HU-05 — Explorar listado de inmuebles**

> Como visitante o usuario autenticado, quiero ver el listado de inmuebles disponibles, para encontrar opciones de arriendo que me interesen.

**Criterios de aceptación:**
- Se muestran tarjetas con foto principal, título, precio, calificación promedio y estado.
- El listado está paginado o implementa scroll infinito.
- Es accesible sin necesidad de autenticación.

---

**HU-06 — Ver detalle de un inmueble**

> Como visitante o usuario autenticado, quiero ver el detalle completo de un inmueble, para evaluar si me interesa arrendarlo.

**Criterios de aceptación:**
- Se muestran todas las fotos y videos del inmueble.
- Se muestra la descripción completa, precio, tipo y disponibilidad.
- Se muestra la calificación promedio y los comentarios existentes.

---

**HU-07 — Buscar y filtrar inmuebles**

> Como visitante o usuario autenticado, quiero buscar y filtrar inmuebles por distintos criterios, para encontrar más rápido las opciones que se ajusten a mis necesidades.

**Criterios de aceptación:**
- Se puede buscar por palabras clave en el título o descripción.
- Se puede filtrar por tipo de inmueble, rango de precio, ubicación y calificación mínima.
- Los resultados se actualizan en tiempo real o al aplicar los filtros.

---

### Épica 3: Publicación de inmuebles

---

**HU-08 — Publicar un inmueble**

> Como arrendatario autenticado, quiero publicar mi inmueble con toda la información relevante, para que posibles arrendadores puedan encontrarlo y contactarme.

**Criterios de aceptación:**
- El formulario incluye: título, descripción, dirección, precio, tipo de inmueble y disponibilidad.
- Se pueden adjuntar múltiples fotos.
- Se pueden adjuntar videos cortos.
- La publicación queda visible para todos los usuarios una vez creada.

---

**HU-09 — Editar una publicación**

> Como arrendatario autenticado, quiero editar la información de mis publicaciones, para mantenerla actualizada.

**Criterios de aceptación:**
- Solo el arrendatario dueño de la publicación puede editarla.
- Se pueden agregar, eliminar o reemplazar fotos y videos.
- Los cambios se reflejan de forma inmediata en la vista pública.

---

**HU-10 — Desactivar o eliminar una publicación**

> Como arrendatario autenticado, quiero desactivar o eliminar mis publicaciones, para retirar del mercado inmuebles que ya no deseo arrendar.

**Criterios de aceptación:**
- El arrendatario puede desactivar una publicación (queda oculta pero no eliminada) o eliminarla permanentemente.
- Las publicaciones desactivadas no aparecen en el listado público.
- Se solicita confirmación antes de eliminar permanentemente.

---

### Épica 4: Arriendo de inmuebles

---

**HU-11 — Solicitar arriendo de un inmueble**

> Como arrendador autenticado, quiero enviar una solicitud de arriendo sobre un inmueble disponible, para iniciar el proceso de arrendarlo.

**Criterios de aceptación:**
- La opción de solicitar arriendo solo aparece en inmuebles con estado "disponible".
- Un usuario no puede solicitar el arriendo de su propio inmueble.
- El arrendatario recibe una notificación con los datos del solicitante.

---

**HU-12 — Gestionar solicitudes de arriendo**

> Como arrendatario autenticado, quiero revisar y responder las solicitudes de arriendo de mi inmueble, para decidir a quién se lo arriendo.

**Criterios de aceptación:**
- Se listan todas las solicitudes recibidas con el nombre del solicitante y la fecha.
- El arrendatario puede aceptar o rechazar cada solicitud.
- Al aceptar, el estado del inmueble cambia automáticamente a "arrendado".
- El arrendador es notificado de la decisión.

---

**HU-13 — Consultar historial de arriendos**

> Como arrendador autenticado, quiero ver el historial de inmuebles que he arrendado, para tener registro de mis experiencias anteriores.

**Criterios de aceptación:**
- Se listan los inmuebles arrendados con fecha de inicio y estado del arriendo.
- Desde el historial se puede acceder al detalle del inmueble.

---

### Épica 5: Calificación de inmuebles

---

**HU-14 — Calificar un inmueble arrendado**

> Como arrendador autenticado que ha arrendado un inmueble, quiero calificarlo con una puntuación, para compartir mi experiencia con otros usuarios.

**Criterios de aceptación:**
- Solo se puede calificar un inmueble que el usuario haya arrendado previamente.
- La calificación es numérica del 1 al 5.
- Cada usuario solo puede tener una calificación activa por inmueble.
- La calificación promedio del inmueble se actualiza automáticamente.

---

**HU-15 — Editar una calificación**

> Como arrendador autenticado, quiero poder editar la calificación que le di a un inmueble, para corregirla si cambié de opinión.

**Criterios de aceptación:**
- El usuario puede modificar su calificación previa en cualquier momento.
- El promedio del inmueble se recalcula al guardar el cambio.

---

**HU-16 — Ver calificaciones de un inmueble**

> Como visitante o usuario autenticado, quiero ver las calificaciones de un inmueble, para tener una idea de la experiencia de otros arrendadores.

**Criterios de aceptación:**
- Se muestra el promedio de calificaciones y el número total de votos.
- Es visible sin necesidad de autenticación.

---

### Épica 6: Comentarios sobre inmuebles

---

**HU-17 — Comentar un inmueble arrendado**

> Como arrendador autenticado que ha arrendado un inmueble, quiero dejar un comentario sobre mi experiencia, para ayudar a otros usuarios a tomar una decisión informada.

**Criterios de aceptación:**
- Solo se puede comentar un inmueble que el usuario haya arrendado previamente.
- El comentario muestra el nombre del autor y la fecha de publicación.
- No hay límite en la cantidad de comentarios por inmueble, pero un usuario solo puede tener un comentario activo por inmueble.

---

**HU-18 — Editar o eliminar un comentario propio**

> Como arrendador autenticado, quiero poder editar o eliminar mis comentarios, para corregir o retirar información que ya no deseo publicar.

**Criterios de aceptación:**
- Solo el autor del comentario puede editarlo o eliminarlo.
- Se solicita confirmación antes de eliminarlo.
- La edición muestra una indicación de que el comentario fue modificado.

---

**HU-19 — Ver comentarios de un inmueble**

> Como visitante o usuario autenticado, quiero ver los comentarios de un inmueble, para conocer las experiencias de quienes lo han arrendado.

**Criterios de aceptación:**
- Los comentarios se muestran en orden cronológico (más recientes primero).
- Son visibles sin necesidad de autenticación.
- Se muestra el nombre del autor y la fecha de cada comentario.

---

**HU-20 — Reportar un comentario inapropiado**

> Como arrendatario dueño de una publicación, quiero poder reportar comentarios inapropiados, para mantener la calidad y veracidad de la información en mi publicación.

**Criterios de aceptación:**
- El botón de reporte está disponible para el arrendatario en los comentarios de sus propias publicaciones.
- El reporte queda registrado para revisión por parte de los administradores de la plataforma.
- El comentario permanece visible hasta que sea revisado y gestionado.

---

## 4. Resumen de cobertura

| Código | Historia de Usuario | Rol principal |
|---|---|---|
| HU-01 | Registro de usuario | Visitante |
| HU-02 | Inicio de sesión | Usuario registrado |
| HU-03 | Cierre de sesión | Usuario autenticado |
| HU-04 | Recuperación de contraseña | Usuario registrado |
| HU-05 | Explorar listado de inmuebles | Todos |
| HU-06 | Ver detalle de un inmueble | Todos |
| HU-07 | Buscar y filtrar inmuebles | Todos |
| HU-08 | Publicar un inmueble | Arrendatario |
| HU-09 | Editar una publicación | Arrendatario |
| HU-10 | Desactivar o eliminar publicación | Arrendatario |
| HU-11 | Solicitar arriendo | Arrendador |
| HU-12 | Gestionar solicitudes de arriendo | Arrendatario |
| HU-13 | Consultar historial de arriendos | Arrendador |
| HU-14 | Calificar un inmueble arrendado | Arrendador (con historial) |
| HU-15 | Editar una calificación | Arrendador (con historial) |
| HU-16 | Ver calificaciones | Todos |
| HU-17 | Comentar un inmueble arrendado | Arrendador (con historial) |
| HU-18 | Editar o eliminar comentario propio | Arrendador (con historial) |
| HU-19 | Ver comentarios | Todos |
| HU-20 | Reportar comentario inapropiado | Arrendatario |
