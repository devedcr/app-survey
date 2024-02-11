FROM maven:3.9.6-eclipse-temurin-17-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY ./ ./
RUN mvn clean package -DskipTests=true

FROM eclipse-temurin:17.0.10_7-jre-alpine

#values default
ENV SPRING_DATASOURCE_URL=jdbc:postgresql://192.168.0.15/db_survey
ENV SPRING_DATASOURCE_USERNAME=postgres
ENV SPRING_DATASOURCE_PASSWORD=edcr
ENV SPRING_JPA_HIBERNATE_DDL_AUTO=update
ENV SERVER_ADDRESS=0.0.0.0
ENV SERVER_PORT=8080

RUN mkdir /app
COPY --from=builder /usr/src/app/target /app
WORKDIR /app
EXPOSE 8080
CMD ["java","-jar","./app-back-survey-0.0.1.jar"]
