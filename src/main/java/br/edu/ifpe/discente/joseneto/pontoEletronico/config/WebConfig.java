package br.edu.ifpe.discente.joseneto.pontoEletronico.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Adiciona o mapeamento para todas as rotas
                .allowedOrigins("http://127.0.0.1:5500") // Permite requisições da origem especificada (alterar para o
                                                         // domínio do seu front-end)
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Métodos permitidos
                .allowedHeaders("*"); // Permite todos os cabeçalhos
    }
}
