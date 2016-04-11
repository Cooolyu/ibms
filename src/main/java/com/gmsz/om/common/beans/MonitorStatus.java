package com.gmsz.om.common.beans;

public class MonitorStatus {
	
	private long id;
	
	private long assetsId;
	
	private long dictionaryId;
	
	private String curStatus;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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

	public String getCurStatus() {
		return curStatus;
	}

	public void setCurStatus(String curStatus) {
		this.curStatus = curStatus;
	}
	
	

}
