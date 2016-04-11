package com.gmsz.om.web.building.service;

import java.util.List;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.building.bean.BuildQuery;


public interface BuildingService {
	public Building getBuilding(Long id);
	
	public List<Building> findAllBuildings();
	
	public List<Building> buildList(BuildQuery buildQuery);
	
	public long buildPages(BuildQuery buildQuery);
	
	public Result addBuild(Building build);
	
	public Result delBuild(int buildId);
	
	public Result updateBuild(Building build);

}
