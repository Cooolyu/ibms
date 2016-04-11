/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserRole.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.beans;

/**
 * Class name:UserRole
 * Description: please write your description
 * @author LuHaosheng
 */
public class UserRole {
	public static final long ROLE_ADMIN = 1;
	public static final long ROLE_MONITOR = 6;
	public static final long ROLE_ACTOR = 3;
	public static final long ROLE_CUSTOMER = 4;
	public static final long ROLE_BOSS = 5;
	public static final long ROLE_ADMIN_ASSISTANT = 2;
	
	private long id;
	private String roleName;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getRoleName() {
		return roleName;
	}
	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}
}
