package com.gmsz.om.web.alarm.dao;

import java.util.List;

import com.gmsz.om.common.beans.TermAlarm;
import com.gmsz.om.web.alarm.bean.AlarmQuery;
import com.gmsz.om.web.alarm.bean.AlarmResultForm;

public interface AlarmMapper {
	
	public List<AlarmResultForm> getAlarmList(AlarmQuery queryForm);
	
	public Long getAlarmCount(AlarmQuery queryForm);
	
	public Long getAlarmNotice(AlarmQuery queryForm);
	
	public void deal(TermAlarm alarm);
}
