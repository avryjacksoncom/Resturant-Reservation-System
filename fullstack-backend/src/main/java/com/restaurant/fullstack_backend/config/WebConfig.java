package com.restaurant.fullstack_backend.config;  // Ensure this matches your package structure

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration  // Marks this class as a configuration class
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // Allow CORS for all endpoints
        registry.addMapping("/**")  // This applies to all endpoints
            .allowedOrigins("http://localhost:3000")  // Allow React app on port 4000 (or the actual port you're using)
            .allowedMethods("GET", "POST", "PUT", "DELETE")  // Allow necessary HTTP methods
            .allowedHeaders("*")  // Allow any headers
            .allowCredentials(true);  // Allow credentials (e.g., cookies)
    }
}
