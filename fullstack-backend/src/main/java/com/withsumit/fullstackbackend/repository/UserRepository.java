package com.withsumit.fullstackbackend.repository;

import com.withsumit.fullstackbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User,Long>{



}
