package com.tts.kotlininvent

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.boot.web.servlet.FilterRegistrationBean
import org.springframework.context.annotation.Bean
import org.springframework.core.Ordered
import org.springframework.web.cors.CorsConfiguration
import org.springframework.web.cors.UrlBasedCorsConfigurationSource
import org.springframework.web.filter.CorsFilter

@SpringBootApplication
class KotlininventApplication {


    @Bean
    fun simpleCorsFilter(): FilterRegistrationBean<CorsFilter> {
        val source = UrlBasedCorsConfigurationSource()
        val config = CorsConfiguration()
        config.allowCredentials = true
        config.allowedOrigins = listOf("http://localhost:4200")
        config.allowedMethods = listOf("*")
        config.allowedHeaders = listOf("*")
        source.registerCorsConfiguration("/**", config)
        val bean = FilterRegistrationBean(CorsFilter(source))
        bean.order = Ordered.HIGHEST_PRECEDENCE
        return bean
    }

    @Bean
    fun init(repository: FruitRepository) = CommandLineRunner {
        repository.save(Fruit("apples", "5"))
        repository.save(Fruit("mangoes", "2"))
        repository.save(Fruit("pears", "3"))
    }
}

fun main(args: Array<String>) {
    runApplication<KotlininventApplication>(*args)
}
