package com.gmsz.om.common.beans;

public class AssetsCategory {
	private long id;
	private String name;
	private int categorystatus;
	private Integer sysModuleId;
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
	public int getCategorystatus() {
		return categorystatus;
	}
	public void setCategorystatus(int categorystatus) {
		this.categorystatus = categorystatus;
	}
	public Integer getSysModuleId() {
		return sysModuleId;
	}
	public void setSysModuleId(Integer sysModuleId) {
		this.sysModuleId = sysModuleId;
	}
	public Integer getEqpttypeid() {
		return eqpttypeid;
	}
	public void setEqpttypeid(Integer eqpttypeid) {
		this.eqpttypeid = eqpttypeid;
	}
	
	
}
