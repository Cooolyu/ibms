package com.gmsz.om.web.floor.service;

import java.util.List;

import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.floor.bean.FloorQuery;

public interface FloorService {
	
	public List<Floor> getFloorList(Long buildingId);
	
	public Floor getFloor(Long id);
	
	public Floor findMinFloor(Long buildingId);
	
	public Floor findFloor(Long id);
	
	public List<Floor> findFloorByBuildId (FloorQuery floorQuery);
	
	public long floorPages(FloorQuery floorQuery);
	
	public Result delFloorByFloorId (long floorId);
	
	public Result addFloor (Floor floor);
	
	public Result modifyFloor(Floor floor);
}
