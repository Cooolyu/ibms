package com.gmsz.om.web.door.bean;

import com.gmsz.om.common.beans.Pagination;

public class DoorQueryForm extends Pagination{
	
	public DoorQueryForm() {
		this.setCount(10);
	}
	
	private Long id;
	
	private Long assetsId;
	
	private String startTime;
	
	private String endTime;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

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

	public Long getAssetsId() {
		return assetsId;
	}

	public void setAssetsId(Long assetsId) {
		this.assetsId = assetsId;
	}

}
