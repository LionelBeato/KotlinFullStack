package com.tts.kotlininvent.repo

import com.tts.kotlininvent.model.Fruit
import org.springframework.data.repository.CrudRepository

interface FruitRepository: CrudRepository<Fruit, Long> {
    fun findFruitByName(name: String): List<Fruit>
}