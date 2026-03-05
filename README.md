# 🧠 Sistema de Gestión de Pedidos – Patrón State

Arquitectura Cliente–Servidor | Ingeniería de Software I

---

## 📌 Descripción del Proyecto

Este proyecto implementa un sistema de gestión de pedidos utilizando una arquitectura Cliente–Servidor y aplicando el patrón de diseño State dentro de la capa de lógica de negocio.

El objetivo principal es demostrar la integración coherente entre arquitectura y patrón de diseño, aplicando principios SOLID y manteniendo una estructura profesional de proyecto.

El sistema permite gestionar el estado de un pedido a través de una API REST desarrollada con Node.js y Express.

---

## 🏗️ Arquitectura

El sistema está estructurado bajo el modelo Cliente–Servidor:

Cliente (HTTP Requests)
↓
Servidor (Express API)
↓
Controlador
↓
Dominio (Pedido + State)
↓
Repositorio (Persistencia simulada)

### Cliente

Envía solicitudes HTTP al servidor para modificar el estado del pedido.

### Servidor

Contiene la lógica de negocio e implementa el patrón State.

### Dominio

La clase Pedido delega su comportamiento al estado actual, permitiendo cambios dinámicos sin utilizar estructuras condicionales complejas.

### Repository

Se encarga de simular la persistencia del pedido, separando la lógica de almacenamiento de la lógica de negocio.

---

## 🎯 Patrón de Diseño Aplicado: State

El patrón State permite que un objeto cambie su comportamiento cuando cambia su estado interno.

En este sistema, el objeto Pedido puede encontrarse en los siguientes estados:

* Pendiente
* Pagado
* Enviado
* Cancelado

Cada estado encapsula su propio comportamiento, eliminando condicionales dentro de la clase Pedido y permitiendo extender el sistema sin modificar código existente.

---

## 🧩 Principios SOLID Aplicados

Single Responsibility Principle
Cada estado tiene una única responsabilidad asociada a su comportamiento específico.

Open/Closed Principle
Es posible agregar nuevos estados sin modificar la clase Pedido.

Dependency Inversion Principle
Pedido depende de la abstracción EstadoPedido y no de implementaciones concretas.

Alta cohesión y bajo acoplamiento
Cada componente cumple una función clara dentro de la arquitectura.

---

## 📂 Estructura del Proyecto

pedido-state-api/

server.js
package.json

routes/
 pedidoRoutes.js

controllers/
 pedidoController.js

domain/
 Pedido.js
 states/
  EstadoPedido.js
  Pendiente.js
  Pagado.js
  Enviado.js
  Cancelado.js

repository/
 PedidoRepository.js

README.md

---

## 🚀 Instalación

1. Clonar repositorio
   git clone <URL_DEL_REPOSITORIO>
   cd pedido-state-api

2. Instalar dependencias
   npm install

3. Ejecutar servidor
   node server.js

Servidor disponible en:
[http://localhost:3000](http://localhost:3000)

---

## 🔌 Endpoints Disponibles

Obtener estado actual del pedido
GET /api/pedido

Cambiar estado del pedido
POST /api/pedido/pagar
POST /api/pedido/enviar
POST /api/pedido/cancelar

---

## 🧪 Ejemplo de Flujo

1. El pedido inicia en estado Pendiente.
2. El cliente envía una solicitud POST /pagar.
3. El estado cambia a Pagado.
4. El cliente envía POST /enviar.
5. El estado cambia a Enviado.

El cambio de comportamiento ocurre dinámicamente mediante el patrón State.

---

## 📊 Ventajas del Diseño

* Eliminación de condicionales complejos.
* Código limpio y mantenible.
* Alta escalabilidad.
* Separación clara de responsabilidades.
* Arquitectura coherente con principios de diseño.

---

## 🔮 Posibles Mejoras Futuras

* Implementación de base de datos real (MongoDB o PostgreSQL).
* Autenticación y autorización.
* Sistema de logs profesional.
* Pruebas unitarias automatizadas.
* Contenerización con Docker.

---

## 👨‍💻 Tecnologías Utilizadas

* Node.js
* Express
* JavaScript ES Modules

---

## 🎓 Contexto Académico

Proyecto desarrollado para el curso:

CC3090 – Ingeniería de Software I
Universidad del Valle de Guatemala
Semestre I – 2026

Grupo 3
Arquitectura: Cliente–Servidor
Patrones: Builder, Composite, State, Repository
