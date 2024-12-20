package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	// Rota de teste
	router.GET("/api/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{"message": "Hello from Go backend kkkkk"})
	})

	// Rota para exibir uma página HTML sobre bolo
	router.GET("/bolo", func(c *gin.Context) {
		c.HTML(http.StatusOK, "/frontend/src/components/Bolo/Bolo.html", nil)
	})

	// Carregar templates HTML
	router.LoadHTMLFiles("/frontend/src/components/Bolo/Bolo.html")

	router.Run(":8080") // Backend rodará na porta 8080
}