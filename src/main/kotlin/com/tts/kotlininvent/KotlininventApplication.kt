package com.tts.kotlininvent

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.boot.CommandLineRunner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Bean

@SpringBootApplication
class KotlininventApplication{


    //code that resolves at runtime that adds items to the repository
    @Bean
    fun init(repository: FruitRepository) = CommandLineRunner {
        repository.save(Fruit("apples", 5))
        repository.save(Fruit("mangoes", 2))
        repository.save(Fruit("pears", 3))


    }
}

fun main(args: Array<String>) {
    runApplication<KotlininventApplication>(*args)
}
