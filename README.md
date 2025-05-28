# API REST - Turpial Api 

![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23FFCA28.svg?style=for-the-badge&logo=firebase&logoColor=gray)
![Firestore](https://img.shields.io/badge/Firestore-FFCA28?style=for-the-badge&logo=firestore&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-%23F69220.svg?style=for-the-badge&logo=pnpm&logoColor=white)
![Hexagonal](https://img.shields.io/badge/arquitectura-hexagonal-red?style=for-the-badge
)

Esta es la documentación para la API REST de **Frontino**. Esta API está construida utilizando **Node.js** y **TypeScript**, con **Firebase Firestore** como su base de datos. El gestor de paquetes utilizado es **pnpm**.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Endpoints de la API](#endpoints-de-la-api)
  - [Ejemplos de Endpoints](#ejemplos-de-endpoints)
- [Autenticación](#autenticación)
- [Manejo de Errores](#manejo-de-errores)
- [Contribución](#contribución)
- [Licencia](#licencia)
- [Contacto](#contacto)

## Descripción

> Esta Api permite la gestion de tareas donde se puede crear usuario con solo el email, autenticarse obtener un token para la navegacion.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Firebase Firestore**: Base de datos NoSQL flexible y escalable.
- **pnpm**: Gestor de paquetes rápido y eficiente.
- [Otras bibliotecas o frameworks importantes que utilices, e.g., Express.js, etc.]

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu máquina:

- **Node.js**: [Enlace a la página de descarga de Node.js](https://nodejs.org/) (Se recomienda la versión LTS)
- **npm** (se instala con Node.js) o **pnpm**: [Enlace a la documentación de instalación de pnpm](https://pnpm.io/installation)
- **Firebase CLI** (opcional, pero recomendado para interactuar con Firebase desde la línea de comandos): `npm install -g firebase-tools` o `pnpm add -g firebase-tools`
- [Cualquier otro requisito específico de tu proyecto]

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo:

1. Clona el repositorio:
   ```bash
        https://github.com/ronald-dev86/turpial-api-rest.git
        cd turpial-api-rest

2. Instalacion de dependecia
  ```bash
      pnpm install

3. creacion .env
  ```bash
      PORT=3000
      #Firebase services account
      FIREBASE_PROJECT_ID=""
      FIREBASE_PRIVATE_KEY_ID=""
      FIREBASE_PRIVATE_KEY=""
      FIREBASE_CLIENT_EMAIL=""
      FIREBASE_CLIENT_ID=""
      FIREBASE_AUTH_URI=""
      FIREBASE_TOKEN_URI=""
      FIREBASE_AUTH_CERT_URL=""
      FIREBASE_CLIENT_CERT_URL=""

      #Bcrypt
      BCRYPT_SALT=

      #JWT
      JWT_SECRET_KEY=""
      JWT_EXPIRES_IN=
      JWT_ALGORITHM=""

4. Comando de Ejecucion de desarrollo
  ```bash
      pnpm run dev
