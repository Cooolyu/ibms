package com.gmsz.om.common.beans;

public class AssetsModel {
 
	private Long id;
	
	private String name;
	
	private Long categoryId;
	
	private String clickAct;
	
	private String statusAct;
	
	private Long groupId;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Long getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}

	public String getClickAct() {
		return clickAct;
	}

	public void setClickAct(String clickAct) {
		this.clickAct = clickAct;
	}

	public String getStatusAct() {
		return statusAct;
	}

	public void setStatusAct(String statusAct) {
		this.statusAct = statusAct;
	}

	public Long getGroupId() {
		return groupId;
	}

	public void setGroupId(Long groupId) {
		this.groupId = groupId;
	}
	
	
}
