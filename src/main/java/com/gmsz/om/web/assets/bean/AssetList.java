package com.gmsz.om.web.assets.bean;

import com.gmsz.om.common.beans.Assets;

public class AssetList extends Assets {

	private String brandName;
	private String modelName;
	private String cateName;

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}

	public String getModelName() {
		return modelName;
	}

	public void setModelName(String modelName) {
		this.modelName = modelName;
	}

	public String getCateName() {
		return cateName;
	}

	public void setCateName(String cateName) {
		this.cateName = cateName;
	}

}
