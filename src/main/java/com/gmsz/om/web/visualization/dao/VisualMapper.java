package com.gmsz.om.web.visualization.dao;

import java.util.List;

public interface VisualMapper {

	//统计楼层
	List<Long>countFloor(long sysId);
	//统计设备
	int countStopAsset(long floorId);
	int countRunAsset(long floorId);
	int countRerunAsset(long floorId);
}
