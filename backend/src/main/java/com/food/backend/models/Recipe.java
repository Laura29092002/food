package com.food.backend.models;

import jakarta.persistence.*;

@Entity
@Table(name="recipe")
public class Recipe{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "image")
    private byte[] image;

    Recipe(int id, String name, byte[] image){
        this.id = id;
        this.name = name;
        this.image = image;
    }

    public Recipe() {
    }

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public byte[] getImage() {
        return image;
    }
    public void setImage(byte[] image) {
        this.image = image;
    }
}