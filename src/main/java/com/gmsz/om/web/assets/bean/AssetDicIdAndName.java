package com.gmsz.om.web.assets.bean;
/**
 * 
 * @author Jackyu
 * 字典对应的id , name ,code
 */
public class AssetDicIdAndName {
	
	private long dictionaryId;
	private String name;
	private String code;
	public long getDictionaryId() {
		return dictionaryId;
	}
	public void setDictionaryId(long dictionaryId) {
		this.dictionaryId = dictionaryId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	
}
