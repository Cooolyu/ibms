package com.gmsz.om.web.building.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.building.bean.BuildQuery;
import com.gmsz.om.web.building.dao.BuildingMapper;

@Component
public class BuildingServiceImp implements BuildingService {

	private static final Logger LOG = LoggerFactory.getLogger(BuildingServiceImp.class);
	
	@Resource
	private BuildingMapper buildingMapper;
	
	@Override
	public Building getBuilding(Long id) {
		return this.buildingMapper.getBuildingById(id);
	}

	@Override
	public List<Building> findAllBuildings() {
		return this.buildingMapper.findAllBuildings();
	}

	@Override
	public long buildPages(BuildQuery buildQuery) {
		return this.buildingMapper.buildPages(buildQuery);
	}

	@Override
	public List<Building> buildList(BuildQuery buildQuery) {
		return this.buildingMapper.buildList(buildQuery);
	}

	@Override
	public Result addBuild(Building build) {
		
		build.setStatus(1L);
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		BuildQuery buildQuery = new BuildQuery();
		buildQuery.setSelection(build.getName());
		if(this.buildPages(buildQuery) > 0){
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该栋楼已存在");
		}else{
			this.buildingMapper.addBuild(build);
		}
		return result;
	}

	public Result delBuild(int buildId) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		if(this.getBuilding(Long.valueOf(buildId)) == null){
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该栋楼不存在");
		}else{
			this.buildingMapper.delBuild(buildId);
		}
		return result;
	}
	

	public Result updateBuild(Building build){
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		BuildQuery buildQuery = new BuildQuery();
		buildQuery.setSelection(build.getName());
		if(this.buildList(buildQuery).size() > 1 ){
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该栋楼已经存在");
		}else{
			this.buildingMapper.updateBuild(build);
		}
		return result;
	}


}
