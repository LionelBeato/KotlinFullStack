package com.tts.kotlininvent.controller

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/fruits")
class FruitController (val repository: FruitRepository){

    @GetMapping("/all")
    fun findAll(): Iterable<Fruit> = repository.findAll();

//    @GetMapping("/{name}")
//    fun findFruitByName(@PathVariable name: String)
//    =  repository.findByName(name)

    @GetMapping("/{id}")
    fun findFruitById(@PathVariable id: Long)
    = repository.findById(id)

    @DeleteMapping("/delete/{id}")
    fun deleteFruitById(@PathVariable id: Long)
    = repository.deleteById(id)

    @PutMapping("/put/{id}")
    fun updateFruit (@PathVariable id: Long, @RequestBody fruit: Fruit)
    = repository.save(fruit)

    @PostMapping("/post")
    fun addFruit (@RequestBody fruit: Fruit)
    = repository.save(fruit)

}