package com.ecommerce.project.repositories;

import com.ecommerce.project.model.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.Optional;


@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserName(String userName);

    boolean existsByEmail(@NotBlank @Size(max = 50) @Email String email);

    boolean existsByUserName(@NotBlank @Size(min = 3, max = 20) String username);
}
