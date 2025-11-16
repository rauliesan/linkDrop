package com.rls.LinkDrop.dto;

import com.rls.LinkDrop.model.Category;

public class AppDTO {
	
	private Long id;
	
	private String name;
	
	private Category category;

	private String imageURL;
	
	private String downloadURL;

	
	public AppDTO(Long id, String name, Category category, String imageURL, String downloadURL) {
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

	public void setImgURL(String imageURL) {
		this.imageURL = imageURL;
	}

	public String getDownloadURL() {
		return downloadURL;
	}

	public void setDownloadURL(String downloadURL) {
		this.downloadURL = downloadURL;
	}
}
