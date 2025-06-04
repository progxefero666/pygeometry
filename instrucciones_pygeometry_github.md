# Instrucciones para el Proyecto: pygeometry

Este archivo es un recordatorio para configurar el repositorio Git local y conectarlo con el repositorio remoto en GitHub para el proyecto `pygeometry`.

## 1. Recordatorio: Gestión de Credenciales de Git en Windows

*   **Usuario de GitHub Asociado:** `progxefero666`
*   **Correo Electrónico Asociado:** `correoxefero@gmail.com`
*   Git en Windows, a través del **Administrador de Credenciales de Windows** (o Git Credential Manager Core), debería gestionar tus credenciales automáticamente.
*   Después de la primera autenticación exitosa contra GitHub para este nuevo repositorio (si es necesaria), no deberías necesitar introducir tu usuario/contraseña o token para cada `push` o `pull`.
*   Si se solicitan credenciales inesperadamente, verifica el estado del Administrador de Credenciales o considera usar/renovar un Personal Access Token (PAT) desde tu cuenta de GitHub.

## 2. Detalles del Repositorio `pygeometry`

*   **URL del Repositorio en GitHub:** `https://github.com/progxefero666/pygeometry`
*   **Rama Principal Designada:** `main`

## 3. Comandos para la Configuración Inicial y Primer Commit

Los siguientes comandos asumen que estás en la raíz de la carpeta de tu proyecto `pygeometry` en la terminal y que esta carpeta *aún no es un repositorio Git* o quieres empezar de cero la conexión.

Si la carpeta ya es un repositorio Git y solo necesitas añadir el remoto y hacer push, ajusta los comandos según sea necesario (principalmente omitiendo `git init` y `git add README.md` si ya tienes archivos y commits).

```bash
# 0. (Opcional, pero recomendado para este repo) Configurar usuario y email localmente si es diferente del global
# git config user.name "progxefero666"
# git config user.email "correoxefero@gmail.com"

# 1. Crear un archivo README.md inicial (si el proyecto está vacío)
echo "# pygeometry" >> README.md

# 2. Inicializar el repositorio Git local
git init

# 3. Añadir el README.md al staging area (o todos los archivos con 'git add .')
git add README.md
# Alternativamente, si ya tienes todos los archivos del proyecto:
# git add .

# 4. Realizar el primer commit
git commit -m "first commit"

# 5. Asegurar que la rama principal se llame 'main'
git branch -M main

# 6. Añadir el repositorio remoto de GitHub
git remote add origin https://github.com/progxefero666/pygeometry.git

# 7. Subir los cambios a GitHub
git push -u origin main
```

## Pasos a Seguir Cuando Abras la Carpeta del Proyecto `pygeometry`:

1.  Verifica que estás en el directorio correcto del proyecto `pygeometry`.
2.  Confirma si el proyecto ya fue inicializado como un repositorio Git (`git status`).
3.  Si no lo es, o si quieres seguir la secuencia completa para un proyecto nuevo, ejecuta los comandos de la sección 3.
4.  Si ya es un repositorio Git con commits, y solo necesitas conectarlo y subirlo, usa principalmente los comandos `git remote add origin ...` (si el remoto no existe) y `git push -u origin main`. 