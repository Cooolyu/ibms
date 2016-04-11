package com.gmsz.om.web.monitorStatus.dao;

import com.gmsz.om.web.monitorStatus.bean.MonitorStatusQuery;

public interface MonitorStatusMapper {
	
	public int getStatusNum(MonitorStatusQuery queryForm);
	
	public int getDoorNormalNum(MonitorStatusQuery queryForm);
	
	public int getDoorErroNum(MonitorStatusQuery queryForm);

}
