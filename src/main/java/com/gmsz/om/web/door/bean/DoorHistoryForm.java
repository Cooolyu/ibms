package com.gmsz.om.web.door.bean;

import java.util.Date;

public class DoorHistoryForm {
	private String id;
	
	private Date checkTime;
	
	private String userName;
	
	private String assetsName;

	private String assetsLocation;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Date getCheckTime() {
		return checkTime;
	}

	public void setCheckTime(Date checkTime) {
		this.checkTime = checkTime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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
	
	
	
	

}
