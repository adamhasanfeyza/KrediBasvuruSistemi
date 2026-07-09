package com.kredibasvuru.repository;

import com.banka.entities.Personnel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonelRepository extends JpaRepository<Personnel,Integer> {
}