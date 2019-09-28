package com.tts.kotlininvent

import com.tts.kotlininvent.model.Fruit
import com.tts.kotlininvent.repo.FruitRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class FruitService (private val repository: FruitRepository){

    @Transactional
    fun findAll(): Iterable<Fruit> = repository.findAll();

    @Transactional
    fun findFruitById(id: Long)
            = repository.findById(id)

    @Transactional
    fun deleteFruitById(id: Long)
            = repository.deleteById(id)

    @Transactional
    fun updateFruit (id: Long, fruit: Fruit)
            = repository.save(fruit)

    @Transactional
    fun addFruit ( fruit: Fruit)
            = repository.save(fruit)

}