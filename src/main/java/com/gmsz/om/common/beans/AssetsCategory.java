package com.gmsz.om.common.beans;

public class AssetsCategory {
	private long id;
	private String name;
	private long categorystatus;
	private long sysModuleId;
	private Integer eqpttypeid;
	
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getCategorystatus() {
		return categorystatus;
	}
	public void setCategorystatus(long categorystatus) {
		this.categorystatus = categorystatus;
	}
	public long getSysModuleId() {
		return sysModuleId;
	}
	public void setSysModuleId(long sysModuleId) {
		this.sysModuleId = sysModuleId;
	}
	public Integer getEqpttypeid() {
		return eqpttypeid;
	}
	public void setEqpttypeid(Integer eqpttypeid) {
		this.eqpttypeid = eqpttypeid;
	}
	
	
}
