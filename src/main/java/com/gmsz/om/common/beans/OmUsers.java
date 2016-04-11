/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: OmUsers.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name          |      Content
 * 1   | 2013年10月31日        |      1.0        |  GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.beans;

/**
 * Class name:OmUsers
 * Description: please write your description
 * @author LuHaosheng
 */
public class OmUsers {

	private long id;
	private String username;
	private String password;
	private long roleId;
	private int status;
	private String phone;
	
	/** 用户可用*/
	public static final int STATE_ACTIVE = 0;
	/** 用户已删除*/
	public static final int STATE_DEL = 1;
	
	public static final int ROLE_ADMIN = 1;
	public static final int ROLE_MONITOR = 6;
	public static final int ROLE_OPERATOR = 3;
	public static final int ROLE_CLIENT = 4;
	public static final int ROLE_BOSS = 5;
	public static final long ROLE_ADMIN_ASSISTANT = 2;
	
	
	/**
	 * @return the phone
	 */
	public String getPhone() {
		return phone;
	}
	/**
	 * @param phone the phone to set
	 */
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getRoleId() {
		return roleId;
	}
	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
}
