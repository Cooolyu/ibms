package com.gmsz.om.web.floor.bean;

import com.gmsz.om.common.beans.Pagination;

public class FloorQuery extends Pagination {
	
	private String selection;
	private long buildId;
	
	
	public String getSelection() {
		return selection;
	}
	public void setSelection(String selection) {
		this.selection = selection;
	}
	public long getBuildId() {
		return buildId;
	}
	public void setBuildId(long buildId) {
		this.buildId = buildId;
	}

	
	
	

}
