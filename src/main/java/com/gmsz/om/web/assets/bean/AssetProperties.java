package com.gmsz.om.web.assets.bean;

/**
 * 
 * @author Jackyu
 * 2016年3月28日
 * TODO 资产属性关联表
 */
public class AssetProperties extends AssetDictionary{
	private long id;
	private String value;
	private long assetsId;
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

	public long getAssetsId() {
		return assetsId;
	}

	public void setAssetsId(long assetsId) {
		this.assetsId = assetsId;
	}

	public long getDictionaryId() {
		return dictionaryId;
	}

	public void setDictionaryId(long dictionaryId) {
		this.dictionaryId = dictionaryId;
	}

}
