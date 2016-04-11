/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: LoginMapper.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name          |      Content
 * 1   | 2013年10月31日        |      1.0        |  GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.login.dao;

import com.gmsz.om.common.beans.OmUsers;

/**
 * Class name:LoginMapper
 * Description: please write your description
 * @author LuHaosheng
 */
public interface LoginMapper {

	public OmUsers queryUser(OmUsers user);
	
	public OmUsers queryUserByName(String username);
}
