# Configuración de Firebase y Firestore

Sigue estos pasos para crear tu proyecto en Firebase, habilitar la base de datos y obtener tus credenciales.

## 1. Crear el Proyecto en Firebase
1. Ve a la [Consola de Firebase](https://console.firebase.google.com/).
2. Haz clic en **"Agregar proyecto"**.
3. Ponle un nombre (ej. `devfolio-backend`).
4. Desactiva Google Analytics (no es necesario para esto) y haz clic en **"Crear proyecto"**.

## 2. Registrar la Web App
1. Dentro de tu nuevo proyecto, haz clic en el icono de **Web** (`</>`).
2. Registra la app con un nombre (ej. `devfolio-web`).
3. Haz clic en **"Registrar app"**.
4. **IMPORTANTE**: Copia el objeto `firebaseConfig` que aparece en pantalla, o déjalo abierto para usarlo después.

## 3. Crear la Base de Datos Firestore
1. En el menú lateral izquierdo, ve a **"Compilación"** -> **"Firestore Database"**.
2. Haz clic en **"Crear base de datos"**.
3. Selecciona una ubicación cercana a ti (ej. `us-central1` o `southamerica-east1`).
4. **Reglas de Seguridad**:
   - Selecciona **"Comenzar en modo de prueba"** (permite leer/escribir a cualquiera por 30 días, ideal para desarrollo).
   - Haz clic en **"Habilitar"**.

## 4. Crear la Colección (Opcional)
Aunque el código la creará automáticamente, puedes crearla manualmente para verificar.
1. Haz clic en **"Iniciar colección"**.
2. ID de la colección: `messages`.
3. Haz clic en **"Siguiente"** y luego en **"Guardar"** (puedes dejar el documento ID en automático).

## 5. Obtener las Variables de Entorno
Vuelve a la configuración de tu proyecto (icono de engranaje -> Configuración del proyecto).
Si bajaste hasta "Tus apps" y seleccionas "Config", verás las claves.
Llena tu archivo `.env` en la raíz del proyecto (basado en `.env.example`) con estos valores:

```bash
VITE_FIREBASE_API_KEY=tu_api_key
VITE_FIREBASE_AUTH_DOMAIN=tu_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_project_id
VITE_FIREBASE_STORAGE_BUCKET=tu_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=tu_sender_id
VITE_FIREBASE_APP_ID=tu_app_id
```

## 6. Reiniciar el Servidor
Una vez guardado el archivo `.env`, detén la terminal donde corre el proyecto (`Ctrl + C`) y ejecútalo de nuevo:

```bash
npm run dev
```

¡Listo! Ahora el formulario de contacto enviará datos a tu base de datos Firestore.
