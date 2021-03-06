package com.tts.kotlininvent.model

import javax.persistence.Entity
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id


//This annotation allows this object to be treated as a discreet entity in a database
@Entity
class Fruit (
    var name: String = "",
    var quantity: Long = 0,

    //these annotations are for assigning and generating IDs
    @Id @GeneratedValue (strategy = GenerationType.AUTO)
    var id: Long = 0






)