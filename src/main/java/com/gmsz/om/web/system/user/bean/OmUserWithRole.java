/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: OmUserWithRole.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.bean;

import com.gmsz.om.common.beans.OmUsers;

/**
 * Class name:OmUserWithRole
 * Description: please write your description
 * @author LuHaosheng
 */
public class OmUserWithRole extends OmUsers {

	private String roleName;
	private String statusStr;

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getStatusStr() {
		switch (super.getStatus()) {
			case 0 : this.statusStr = "正常"; break;
			case 1 : this.statusStr = "已删除";
		}
		return statusStr;
	}

	public void setStatusStr(String statusStr) {
		this.statusStr = statusStr;
	}
	
}
