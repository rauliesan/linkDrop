package com.rls.LinkDrop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rls.LinkDrop.model.App;

public interface AppRepository extends JpaRepository<App, Long> {

	public List<App> findAll();

}
