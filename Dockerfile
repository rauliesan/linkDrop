# --- Etapa 1: Construcción (Build Stage) ---
# Usamos una imagen base de Eclipse Temurin JDK 17, un estándar de la industria.
FROM eclipse-temurin:17-jdk-jammy AS build

# Instalar Maven dentro del contenedor de construcción
RUN apt-get update && apt-get install -y maven

WORKDIR /app
COPY backend/pom.xml .
COPY backend/src ./src
RUN mvn clean install -DskipTests


# --- Etapa 2: Ejecución (Runtime Stage) ---
# Usamos la imagen JRE (solo para ejecución) de Eclipse Temurin, que es ligera y segura.
FROM eclipse-temurin:17-jre-jammy

WORKDIR /app
COPY --from=build /app/target/*.jar app.jar

# El comando que se ejecutará cuando el contenedor se inicie.
ENTRYPOINT ["java", "-jar", "app.jar"]
