FROM golang:1.20

WORKDIR /app
COPY . .

RUN go mod tidy
RUN go build -o backend .

EXPOSE 8080
CMD ["./backend"]
