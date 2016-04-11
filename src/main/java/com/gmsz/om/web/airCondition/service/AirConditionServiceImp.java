package com.gmsz.om.web.airCondition.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.airCondition.beans.AirAssets;
import com.gmsz.om.web.airCondition.dao.AirConditionMapper;

@Component
public class AirConditionServiceImp implements AirConditionService{

	@Resource
	private AirConditionMapper airConditionMapper;
	
	
	@Override
	public List<Building> buildList() {
		return this.airConditionMapper.buildList();
	}


	@Override
	public List<Floor> floorList(long buildId) {
		return this.airConditionMapper.floorList(buildId);
	}


	@Override
	public List<AirAssets> assetList(long floorId) {
		return this.airConditionMapper.assetList(floorId);
	}


	@Override
	public Result savePosition(AirAssets airAssets) {
		this.airConditionMapper.savePosition(airAssets);
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		return result;
	}

}
