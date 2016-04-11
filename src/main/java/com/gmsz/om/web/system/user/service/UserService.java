/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserService.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.service;

import java.util.List;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.UserRole;
import com.gmsz.om.web.system.user.bean.OmUserWithRole;
import com.gmsz.om.web.system.user.bean.UserQueryForm;

/**
 * Class name:UserService
 * Description: please write your description
 * @author LuHaosheng
 */
public interface UserService {

	/**
	 * Description: 查询列表
	 * @param userQueryForm
	 * @return
	 */
	public List<OmUserWithRole> getUsers(UserQueryForm userQueryForm);
	
	/**
	 * Description: 获取一个用户
	 * @param userId
	 * @return
	 */
	public OmUserWithRole getUser(long userId);
	
	/**
	 * 根据角色查询用户列表
	 * @param roleId
	 * @return
	 */
	public List<OmUserWithRole> getUsersByRole(long roleId);
	
	/**
	 * Description: 查询数量
	 * @param userQueryForm
	 * @return
	 */
	public long getUserCount(UserQueryForm userQueryForm);
	
	/**
	 * Description: 获取所有角色
	 * @return
	 */
	public List<UserRole> getAllRoles();
	
	/**
	 * Description: 修改用户
	 * @param user
	 * @param loginUserId
	 * @return
	 */
	public Result modifyUser(OmUsers user);
	
	/**
	 * Description: 重新设置密码
	 * @param user
	 * @param loginUserId
	 * @return
	 */
	public Result modifyPass(OmUsers user);
	
	/**
	 * Description: 删除用户
	 * @param userId
	 * @param loginUserId
	 * @return
	 */
	public Result deleteUser(int userId);
	
	/**
	 * Description: 添加用户
	 * @param user
	 * @param loginUserId
	 * @return
	 */
	public Result addUser(OmUsers user);
}
