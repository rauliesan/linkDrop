package com.rls.LinkDrop.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "app")
public class App {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Long id;
	
	@Column(name = "name", nullable = false, unique = true)
	private String name;
	
	@Enumerated(EnumType.STRING)
	@Column(name = "category", nullable = false)
	private Category category;
	
	@Column(name = "image_url", nullable = false, columnDefinition = "TEXT")
	private String imageURL;
	
	@Column(name = "download_url", nullable = false, unique = true, columnDefinition = "TEXT")
	private String downloadURL;

	
	public App() {
		super();
	}
	

	public App(Long id, String name, Category category, String imageURL, String downloadURL) {
		super();
		this.id = id;
		this.name = name;
		this.category = category;
		this.imageURL = imageURL;
		this.downloadURL = downloadURL;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public String getImageURL() {
		return imageURL;
	}

	public void setImageURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getDownloadURL() {
		return downloadURL;
	}

	public void setDownloadURL(String downloadURL) {
		this.downloadURL = downloadURL;
	}
	
	
}
