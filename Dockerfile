# --- Etapa 1: Construcción (Build Stage) ---
FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean install -DskipTests

# --- Etapa 2: Ejecución (Runtime Stage) ---
# Usamos una imagen ligera de OpenJDK 17 que sí existe.
FROM openjdk:17-slim

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# El comando que se ejecutará cuando el contenedor se inicie.
ENTRYPOINT ["java", "-jar", "app.jar"]```
