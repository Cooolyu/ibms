/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: LoginServiceImpl.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name          |      Content
 * 1   | 2013年10月31日        |      1.0        |  GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.login.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.login.bean.LoginResult;
import com.gmsz.om.web.login.dao.LoginMapper;

/**
 * Class name:LoginServiceImpl
 * Description: please write your description
 * @author LuHaosheng
 */
@Component
public class LoginServiceImpl implements LoginService {

	@Resource
	private LoginMapper loginMapper;
	
	@Override
	public LoginResult login(OmUsers user) {
		OmUsers omuser = this.loginMapper.queryUser(user);
//		Result result = new Result(StateDefine.FLAG_SUCCESS, true);
		LoginResult loginResult = new LoginResult(StateDefine.FLAG_SUCCESS, true);
		if (omuser == null) {
//			result = new Result(StateDefine.FLAG_FAIL_FORBIDDEN, false, "用户名或密码错误");
			loginResult = new LoginResult(StateDefine.FLAG_FAIL_FORBIDDEN, false, "用户名或密码错误");
		} else {
			user.setId(omuser.getId());
			loginResult.setRoleId(omuser.getRoleId());
		}
		return loginResult;
	}
	
	@Override
	public OmUsers queryUserByName(String username){
		OmUsers omuser = this.loginMapper.queryUserByName(username);
		return omuser;
	}

}
