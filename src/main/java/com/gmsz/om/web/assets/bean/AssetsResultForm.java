package com.gmsz.om.web.assets.bean;

public class AssetsResultForm {
	
	private Long id;
	private String imgUrl;
	private String locationX;
	private String locationY;
	private Long buildingStatus;
	private String assetsStatus;
	private String name;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
	public String getLocationX() {
		return locationX;
	}
	public void setLocationX(String locationX) {
		this.locationX = locationX;
	}
	public String getLocationY() {
		return locationY;
	}
	public void setLocationY(String locationY) {
		this.locationY = locationY;
	}
	public Long getBuildingStatus() {
		return buildingStatus;
	}
	public void setBuildingStatus(Long buildingStatus) {
		this.buildingStatus = buildingStatus;
	}
	public String getAssetsStatus() {
		return assetsStatus;
	}
	public void setAssetsStatus(String assetsStatus) {
		this.assetsStatus = assetsStatus;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	

}
