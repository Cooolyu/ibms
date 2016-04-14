package com.gmsz.om.common.beans;

public class Floor {
	private Long id;
	private String name;
	private String imgUrl;
	private Long sysModuleId;
	private Long buildingId;
	private long status;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public Long getSysModuleId() {
		return sysModuleId;
	}
	public void setSysModuleId(Long sysModuleId) {
		this.sysModuleId = sysModuleId;
	}
	public Long getBuildingId() {
		return buildingId;
	}
	public void setBuildingId(Long buildingId) {
		this.buildingId = buildingId;
	}
	public long getStatus() {
		return status;
	}
	public void setStatus(long status) {
		this.status = status;
	}
	
	
}
