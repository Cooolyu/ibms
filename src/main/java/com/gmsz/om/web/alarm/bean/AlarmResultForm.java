package com.gmsz.om.web.alarm.bean;

import java.util.Date;

public class AlarmResultForm {
	
	public long id;
	
	public long assetsId;
	
	public Date alarmTime;
	
	public String assetsName;
	
	public String assetsLocation;
	
	public long status;
	
	public String memo;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public long getAssetsId() {
		return assetsId;
	}

	public void setAssetsId(long assetsId) {
		this.assetsId = assetsId;
	}

	public String getAssetsName() {
		return assetsName;
	}

	public void setAssetsName(String assetsName) {
		this.assetsName = assetsName;
	}

	public String getAssetsLocation() {
		return assetsLocation;
	}

	public void setAssetsLocation(String assetsLocation) {
		this.assetsLocation = assetsLocation;
	}

	public long getStatus() {
		return status;
	}

	public void setStatus(long status) {
		this.status = status;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}
	
	

}
