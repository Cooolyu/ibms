package com.gmsz.om.web.airCondition.dao;

import java.util.List;

import com.gmsz.om.common.beans.AssetProp;
import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.airCondition.beans.AirAssets;
import com.gmsz.om.web.airCondition.beans.Icon;

public interface AirConditionMapper {
	
	//获取楼栋
	List<Building> buildList();
	List<Floor> floorList(Floor floor);
	List<AirAssets> assetList(long floorId);
	//保存图标坐标
	void savePosition (AirAssets airAssets);
	List<AssetProp> assetPropList(long assetId);
	
	List<Icon> iconList(long assetId);
}
