package com.example.demo;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface Trainrepo extends MongoRepository<Train, Integer>{

}
