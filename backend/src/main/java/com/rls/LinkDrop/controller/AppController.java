package com.rls.LinkDrop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rls.LinkDrop.model.App;
import com.rls.LinkDrop.model.Category;
import com.rls.LinkDrop.service.AppService;



@RestController
@CrossOrigin (origins = "*", allowedHeaders = "*")
public class AppController {
	
	@Autowired
	private AppService service;
	
	@GetMapping("/getApps")
	public List<App> getLoadApps() {
		return service.getApps();
	}
	
	@GetMapping("/getCategories")
	public Category[] getCategories() {
		return Category.values();
	}
	
	
}
