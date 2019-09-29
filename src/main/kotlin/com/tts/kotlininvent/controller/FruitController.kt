package com.tts.kotlininvent.controller

import com.tts.kotlininvent.FruitService
import com.tts.kotlininvent.model.Fruit
import org.springframework.web.bind.annotation.*


@RestController
@RequestMapping("/fruits")
class FruitController(private val fruitService: FruitService){


    @GetMapping("/all")
    fun findAll()
            = fruitService.findAll()


    @GetMapping("/id/")
    fun findFruitById(@RequestParam id: Long)
            = fruitService.findFruitById(id)

    @GetMapping("/name/")
    fun findFruitByName(@RequestParam name: String)
            = fruitService.findFruitByName(name)


    @DeleteMapping("/delete/{id}")
    fun deleteFruitById(@PathVariable id: Long)
            = fruitService.deleteFruitById(id)

    //this implementation is somewhat unique for a PUT method; adding the extra logic might be considered a code smell
    @PutMapping("/put/{id}")
    fun updateFruit (@PathVariable id: Long, @RequestBody fruit: Fruit):Fruit{
        fruit.id = id
        return fruitService.updateFruit(fruit)
    }


    @PostMapping("/post")
    fun addFruit ( @RequestBody fruit: Fruit)
            = fruitService.addFruit(fruit)

}