package com.gmsz.om.common.beans;

public class AssetProp {
	
	private long id;
	private String value;
	private long assetId;
	private long dictionaryId;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	public long getAssetId() {
		return assetId;
	}
	public void setAssetId(long assetId) {
		this.assetId = assetId;
	}
	public long getDictionaryId() {
		return dictionaryId;
	}
	public void setDictionaryId(long dictionaryId) {
		this.dictionaryId = dictionaryId;
	}
	
	

}
