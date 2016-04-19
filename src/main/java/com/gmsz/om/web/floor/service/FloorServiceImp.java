package com.gmsz.om.web.floor.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.floor.bean.FloorQuery;
import com.gmsz.om.web.floor.dao.FloorMapper;

@Component
public class FloorServiceImp implements FloorService {

	@Resource
	private FloorMapper floorMapper;
	
	@Override
	public List<Floor> getFloorList(Long buildingId) {
		return this.floorMapper.findFloorByBuilding(buildingId);
	}

	@Override
	public Floor getFloor(Long id) {
		return this.floorMapper.findFloorById(id);
	}

	@Override
	public Floor findMinFloor(Long buildingId) {
		return this.floorMapper.findMinFloor(buildingId);
	}

	@Override
	public Floor findFloor(Long id) {
		return this.floorMapper.findFloor(id);
	}

	@Override
	public List<Floor> findFloorByBuildId(FloorQuery floorQuery) {
		return this.floorMapper.findFloorByBuildId(floorQuery);
	}

	@Override
	public long floorPages(FloorQuery floorQuery) {
		return this.floorMapper.floorPages(floorQuery);
	}

	@Override
	public Result delFloorByFloorId(long floorId) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		if(this.floorMapper.findFloor(floorId) == null){
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该楼层不存在");
		}else{
			this.floorMapper.delFloorByFloorId(floorId);
		}
		return result;
	}

	@Override
	public Result addFloor(Floor floor) {
		
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		FloorQuery floorQuery = new FloorQuery();
		floorQuery.setBuildId(floor.getBuildingId());
		floorQuery.setSelection(floor.getName());
		if(this.floorMapper.floorPages(floorQuery) > 0){
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该楼层已存在");
		}else{
			this.floorMapper.addFloor(floor);
		}
		return result;
	}

	@Override
	public Result modifyFloor(Floor floor) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		if(floor.getName() != null && floor.getName() != ""){
			FloorQuery floorQuery = new FloorQuery();
			floorQuery.setSelection(floor.getName());
			floorQuery.setBuildId(floor.getBuildingId());
			if(this.floorMapper.floorPages(floorQuery) >0){
				result.setResultId(StateDefine.FLAG_FAIL_ERROR);
				result.setResultValue(false);
				result.setMessage("该楼层已存在");
			}else{
				this.floorMapper.modifyFloor(floor);
			}
		}else{
			this.floorMapper.modifyFloor(floor);
		}
		return result;
	}

	@Override
	public List<AssetsCategory> selAssetCate() {
		return this.floorMapper.selAssetCate();
	}

	@Override
	public List<Floor> floorListDueSys(FloorQuery floorQuery) {
		return this.floorMapper.floorListDueSys(floorQuery);
	}

}
