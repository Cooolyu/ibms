package com.gmsz.om.web.door.dao;

import java.util.List;

import com.gmsz.om.common.beans.CheckinHistory;
import com.gmsz.om.web.door.bean.DoorQueryForm;

public interface DoorMapper {
	
	public List<CheckinHistory> getDoorHistoryList(DoorQueryForm doorQuery);
	
	public Long countHistory(DoorQueryForm doorQuery);

}
