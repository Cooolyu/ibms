package com.gmsz.om.web.floor.dao;

import java.util.List;

import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.web.floor.bean.FloorQuery;

public interface FloorMapper {
	
	public List<Floor> findFloorByBuilding(Long buildingId);
	
	public Floor findFloorById(Long id);
	
	public Floor findMinFloor(Long buildingId);
	
	public Floor findFloor(Long id);
	
	public List<Floor> findFloorByBuildId(FloorQuery floorQuery);
	public long floorPages(FloorQuery floorQuery);
	
	public void delFloorByFloorId(long floorId);
	
	public void addFloor(Floor floor);
	
	public void modifyFloor(Floor floor);
	
	//查询资产系统项
	public List<AssetsCategory> selAssetCate();
	
	public List<Floor> floorListDueSys (FloorQuery floorQuery);
}
