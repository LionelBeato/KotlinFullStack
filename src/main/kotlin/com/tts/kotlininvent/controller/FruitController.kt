package com.tts.kotlininvent.controller

import com.tts.kotlininvent.FruitService
import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin
@RequestMapping("/fruits")
class FruitController(val fruitService: FruitService){

    @GetMapping("/all")
    fun findAll() {
        fruitService.findAll()
    }

    @GetMapping("/{id}")
    fun findFruitById(@PathVariable id: Long) {
        fruitService.findFruitById(id)
    }


    @DeleteMapping("/delete/{id}")
    fun deleteFruitById(@PathVariable id: Long){
        fruitService.deleteFruitById(id)
    }

    @PutMapping("/put/{id}")
    fun updateFruit (@PathVariable id: Long, @RequestBody fruit: Fruit){
        fruitService.updateFruit(id, fruit)
    }

    @PostMapping("/post")
    fun addFruit (@RequestBody fruit: Fruit){
        fruitService.addFruit(fruit)
    }


}