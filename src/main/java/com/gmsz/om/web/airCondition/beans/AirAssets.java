package com.gmsz.om.web.airCondition.beans;
/**
 * 
 * @author Jackyu
 * 冷暖空调资产项
 */
public class AirAssets {
	
	private long assetId;
	private String name;
	private String locationX;
	private String locationY;
	public long getAssetId() {
		return assetId;
	}
	public void setAssetId(long assetId) {
		this.assetId = assetId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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

}
