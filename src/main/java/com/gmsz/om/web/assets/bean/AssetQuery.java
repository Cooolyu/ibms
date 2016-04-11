package com.gmsz.om.web.assets.bean;

import com.gmsz.om.common.beans.Pagination;

public class AssetQuery extends Pagination{
	
	private String serialNum;
	private String assetName;
	
	
	public String getSerialNum() {
		return serialNum;
	}
	public void setSerialNum(String serialNum) {
		this.serialNum = serialNum;
	}
	public String getAssetName() {
		return assetName;
	}
	public void setAssetName(String assetName) {
		this.assetName = assetName;
	}
	
	
}
