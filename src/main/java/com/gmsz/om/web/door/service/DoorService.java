package com.gmsz.om.web.door.service;

import java.util.List;

import com.gmsz.om.common.beans.CheckinHistory;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.door.bean.DoorHistoryForm;
import com.gmsz.om.web.door.bean.DoorQueryForm;

public interface DoorService {
	
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm);
	
	public List<CheckinHistory> getHistoryInfo(DoorQueryForm doorQuery);
	
	public Long countHistory(DoorQueryForm doorQuery);

}
