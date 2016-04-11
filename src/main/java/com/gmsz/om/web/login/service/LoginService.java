/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: LoginService.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name          |      Content
 * 1   | 2013年10月31日       |      1.0        |  GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.login.service;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.web.login.bean.LoginResult;

/**
 * Class name:LoginService
 * Description: Login service interface
 * @author LuHaosheng
 */
public interface LoginService {

	/**
	 * Description: 登录验证用户
	 * @param user
	 * @return
	 */
	public LoginResult login(OmUsers user);
	
	public OmUsers queryUserByName(String username);
}
