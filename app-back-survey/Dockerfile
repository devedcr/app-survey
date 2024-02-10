FROM maven:3.9.6-eclipse-temurin-17 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ ./
RUN mvn clean package -DskipTests=true

FROM eclipse-temurin:17.0.10_7-jre-jammy

RUN mkdir /app
COPY --from=builder /usr/src/app/target /app
WORKDIR /app
EXPOSE 8080
CMD ["java","-jar","./app-back-survey-0.0.1.jar"]