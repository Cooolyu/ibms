package com.gmsz.om.web.building.bean;

import com.gmsz.om.common.beans.Pagination;

public class BuildQuery extends Pagination{
	
	private String selection;

	public String getSelection() {
		return selection;
	}

	public void setSelection(String selection) {
		this.selection = selection;
	}

}
