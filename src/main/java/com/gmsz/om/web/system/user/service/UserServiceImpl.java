/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserServiceImpl.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.UserRole;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.common.dao.CommonMapper;
import com.gmsz.om.web.system.user.bean.OmUserWithRole;
import com.gmsz.om.web.system.user.bean.UserQueryForm;
import com.gmsz.om.web.system.user.dao.UserMapper;

/**
 * Class name:UserServiceImpl
 * Description: please write your description
 * @author LuHaosheng
 */
@Component
public class UserServiceImpl implements UserService {

	@Resource
	private UserMapper userMapper;
	
	@Resource
	private CommonMapper commonMapper;
	
	@Override
	public List<OmUserWithRole> getUsers(UserQueryForm userQueryForm) {
		
		return this.userMapper.queryUserList(userQueryForm);
	}

	@Override
	public long getUserCount(UserQueryForm userQueryForm) {
		return this.userMapper.queryUserCount(userQueryForm);
	}

	@Override
	public List<UserRole> getAllRoles() {
		return this.userMapper.queryAllRoles();
	}

	@Override
	@Transactional(rollbackFor=Exception.class)
	public Result modifyUser(OmUsers user) {
		int sameNameCount = this.userMapper.queryUserCountByName(user);
		
		Result result = new Result(StateDefine.FLAG_SUCCESS, true);
		if (sameNameCount > 0) {
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("用户名已经存在!");
		} else {
			int count = this.userMapper.updateUser(user);
			if (count <= 0) {
				result.setResultId(StateDefine.FLAG_FAIL_ERROR);
				result.setResultValue(false);
				result.setMessage("用户不存在或无法修改!");
			}
		}
		return result;
	}

	@Override
	public Result modifyPass(OmUsers user) {
		this.userMapper.updatePass(user);
		return new Result(StateDefine.FLAG_SUCCESS, true);
	}

	@Override
	public Result deleteUser(int userId) {
		this.userMapper.deleteUser(userId);
		return new Result(StateDefine.FLAG_SUCCESS, true);
	}

	@Override
	public Result addUser(OmUsers user) {
		user.setStatus(OmUsers.STATE_ACTIVE);
		int sameNameCount = this.userMapper.queryUserCountByName(user);
		
		Result result = new Result(StateDefine.FLAG_SUCCESS, true);
		if (sameNameCount > 0) {
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("用户名已经存在!");
		} else {
			this.userMapper.insertUser(user);
		}
		return result;
	}

	@Override
	public OmUserWithRole getUser(long userId) {
		return this.userMapper.queryUser(userId);
	}

	@Override
	public List<OmUserWithRole> getUsersByRole(long roleId) {
		// TODO Auto-generated method stub
		return this.userMapper.queryUsersByRole(roleId);
	}

}
