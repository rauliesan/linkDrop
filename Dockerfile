# --- Etapa 1: Construcción (Build Stage) ---
# Usamos una imagen de Maven con JDK 17 para compilar nuestro proyecto.
FROM maven:3.8.3-openjdk-17 AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero el pom.xml para aprovechar el cache de capas de Docker.
COPY backend/pom.xml .

# Copiamos el resto del código fuente del backend
COPY backend/src ./src

# Ejecutamos el comando de Maven para compilar el proyecto y generar el .jar
# -DskipTests omite la ejecución de tests para acelerar la construcción
RUN mvn clean install -DskipTests


# --- Etapa 2: Ejecución (Runtime Stage) ---
# Usamos una imagen mucho más ligera que solo contiene la Java Runtime Environment (JRE)
FROM openjdk:17-jre-slim

# Establecemos el directorio de trabajo
WORKDIR /app

# Copiamos el .jar compilado desde la etapa de construcción 'build' a la etapa actual
COPY --from=build /app/target/*.jar app.jar

# El comando que se ejecutará cuando el contenedor se inicie.
# La aplicación Spring Boot leerá la variable de entorno $PORT
# proporcionada por Render para saber en qué puerto iniciarse.
ENTRYPOINT ["java", "-jar", "app.jar"]