package com.tts.kotlininvent.controller

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class FruitController (val repository: FruitRepository){

    @GetMapping("/fruits")
    fun findAll(): Iterable<Fruit> = repository.findAll();

    @GetMapping("/{name}")
    fun findFruitByName(@PathVariable name: String)
    =  repository.findFruitByName(name)

    @GetMapping("/fruits/{id}")
    fun findFruitById(@PathVariable id: Long)
    = repository.findFruitById(id)


}