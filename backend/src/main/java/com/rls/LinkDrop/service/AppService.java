package com.rls.LinkDrop.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rls.LinkDrop.model.App;
import com.rls.LinkDrop.repository.AppRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class AppService {
	
	@Autowired
	private AppRepository appRepository;

	public List<App> getApps() {
		return appRepository.findAll();
	}
	
}
