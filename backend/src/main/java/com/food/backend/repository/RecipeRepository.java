package com.food.backend.repository;

import com.food.backend.models.Ingredients;
import com.food.backend.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface RecipeRepository extends JpaRepository<Recipe, Integer> {
    @Query(value = "SELECT i.id, i.name, i.image, i.category_id, CAST(r.quantity AS VARCHAR) " +
            "FROM recipe_to_ingredient r " +
            "INNER JOIN ingredient i ON i.id = r.ingredient_id " +
            "WHERE r.recipe_id = :id",
            nativeQuery = true)
    List<Ingredients> findAllIngredientsByRecipeId(@Param("id") Integer id);
}