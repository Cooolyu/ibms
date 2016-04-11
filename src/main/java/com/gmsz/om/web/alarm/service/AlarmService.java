package com.gmsz.om.web.alarm.service;

import java.util.List;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.TermAlarm;
import com.gmsz.om.web.alarm.bean.AlarmQuery;
import com.gmsz.om.web.alarm.bean.AlarmResultForm;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;

public interface AlarmService {
	
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm);
	
	public List<AlarmResultForm> getAlarmList(AlarmQuery queryForm);
	
	public Long getAlarmCount(AlarmQuery queryForm);
	
	public void deal(TermAlarm alarm);
	
	public Result bufang(String value);

}
