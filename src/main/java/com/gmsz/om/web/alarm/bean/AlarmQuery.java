package com.gmsz.om.web.alarm.bean;

import com.gmsz.om.common.beans.Pagination;

public class AlarmQuery extends Pagination{
	
	public String startTime;
	
	public String endTime;
	
	public long status;

	public String getStartTime() {
		return startTime;
	}

	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}

	public String getEndTime() {
		return endTime;
	}

	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}

	public long getStatus() {
		return status;
	}

	public void setStatus(long status) {
		this.status = status;
	}
	
	

}
