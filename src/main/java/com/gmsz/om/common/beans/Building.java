package com.gmsz.om.common.beans;

import java.util.HashMap;
import java.util.Map;

public class Building {
	//布防状态
	public static final Long BUFANG = 1L;
	//未布防状态
	public static final Long NOT_BUFANG = 2L;
	public static final Map<Long,String> statusMap = new HashMap<Long,String>(){
		private static final long serialVersionUID = 1L;
	{
	    put(BUFANG, "布防");
	    put(NOT_BUFANG, "未布防");
	}};
	
	private Long id;
	private String name;
	private String memo;
	private Long status;
	private Long pointId;
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
	public String getMemo() {
		return memo;
	}
	public void setMemo(String memo) {
		this.memo = memo;
	}
	public Long getStatus() {
		return status;
	}
	public void setStatus(Long status) {
		this.status = status;
	}
	public Long getPointId() {
		return pointId;
	}
	public void setPointId(Long pointId) {
		this.pointId = pointId;
	}
	
	
}
