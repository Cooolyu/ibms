/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: IsAdmin.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name           |      Content
 * 1   | 2014年5月8日        |   $Revision$  |  GMSZ)LuHaosheng  | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.validate;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.common.dao.CommonMapper;
import com.gmsz.om.web.common.validate.ValidateService;

/**
 * Class name:IsAdmin
 * Description: please write your description
 * @author LuHaosheng
 */
@Component
public class IsAdmin extends ValidateService<Long> {

	@Resource
	private CommonMapper commonMapper;
	
	@Override
	protected Result dovalidate(Long... t) {
		Result result = new Result(StateDefine.FLAG_SUCCESS, true);
		long userId = t[0];
		long roleId = this.commonMapper.queryUserRole(userId);
		if(roleId!=OmUsers.ROLE_ADMIN_ASSISTANT){
			result = new Result(StateDefine.FLAG_FAIL_ERROR, false,"当前登录用户无权执行此操作");
		}
		return result;
	}

}
