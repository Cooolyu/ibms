package com.gmsz.om.common.beans;
/**
 * 
 * @author Jackyu
 * 资产位置
 */
public class AssetLocation {
	private long id;
	private long assetId;
	private String locationX;
	private String locationY;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public long getAssetId() {
		return assetId;
	}
	public void setAssetId(long assetId) {
		this.assetId = assetId;
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
