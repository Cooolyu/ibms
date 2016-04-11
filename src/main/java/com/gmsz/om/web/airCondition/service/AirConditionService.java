package com.gmsz.om.web.airCondition.service;

import java.util.List;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.airCondition.beans.AirAssets;

public interface AirConditionService {
	
	List<Building> buildList();
	List<Floor> floorList(long buildId);
	List<AirAssets> assetList(long floorId);

	Result savePosition(AirAssets airAssets);
}
