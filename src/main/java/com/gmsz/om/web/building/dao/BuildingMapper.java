package com.gmsz.om.web.building.dao;

import java.util.List;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.web.building.bean.BuildQuery;


public interface BuildingMapper {
	
	//查找楼
	public Building getBuildingById(Long id);
	
	public List<Building> findAllBuildings();
	public List<Building> buildList(BuildQuery buildQuery);
	
	public long buildPages(BuildQuery buildQuery);
	public void addBuild(Building build);
	
	public void delBuild(int buildId);

	public void updateBuild(Building build);
	
}
