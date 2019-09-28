package com.tts.kotlininvent

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.stereotype.Service

@Service
class FruitService (private val repository: FruitRepository){

    fun findAll(): Iterable<Fruit> = repository.findAll()

    fun findFruitById(id: Long)
            = repository.findById(id)

    fun deleteFruitById(id: Long)
            = repository.deleteById(id)

    fun updateFruit (fruit: Fruit)
            = repository.save(fruit)

    fun addFruit (fruit: Fruit)
            = repository.save(fruit)

}