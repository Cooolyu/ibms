/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserQueryForm.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.bean;

import com.gmsz.om.common.beans.Pagination;

/**
 * Class name:UserQueryForm
 * Description: please write your description
 * @author LuHaosheng
 */
public class UserQueryForm extends Pagination {

	private String userName = "";
	private long point;
	private int maintainUser=-1;
	
	
	/**
	 * @return the point
	 */
	public long getPoint() {
		return point;
	}
	/**
	 * @param point the point to set
	 */
	public void setPoint(long point) {
		this.point = point;
	}
	/**
	 * @return the maintainUser
	 */
	public int getMaintainUser() {
		return maintainUser;
	}
	/**
	 * @param maintainUser the maintainUser to set
	 */
	public void setMaintainUser(int maintainUser) {
		this.maintainUser = maintainUser;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
}
