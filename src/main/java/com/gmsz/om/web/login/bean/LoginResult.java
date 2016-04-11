/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: loginResult.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年8月28日        |  1.0  |  GMSZ)HuangJuan   | original version
 *******************************************************************************
 */
package com.gmsz.om.web.login.bean;

import com.gmsz.om.common.beans.Result;

/**
 * Class name:loginResult
 * Description: 用来返回用户角色，控制前台登录之后显示界面
 * @author HuangJuan
 */
public class LoginResult extends Result{
	private static final long serialVersionUID = -21847663015618288L;
	private long roleId;
	public LoginResult(long roleId, int resultId,boolean resultValue,String message) {
		super(resultId,resultValue,message);
		this.roleId = roleId;
	}
	public LoginResult(int resultId, boolean resultValue) {
		super(resultId,resultValue);
	}
	
	public LoginResult(int resultId, boolean resultValue, String message) {
		super(resultId,resultValue,message);
	}
	public long getRoleId() {
		return roleId;
	}
	public void setRoleId(long roleId) {
		this.roleId = roleId;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
}
