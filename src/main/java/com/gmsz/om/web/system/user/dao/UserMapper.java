/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserMapper.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.dao;

import java.util.List;
import java.util.Map;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.UserRole;
import com.gmsz.om.web.system.user.bean.OmUserWithRole;
import com.gmsz.om.web.system.user.bean.UserQueryForm;

/**
 * Class name:UserMapper
 * Description: please write your description
 * @author LuHaosheng
 */
public interface UserMapper {

	/**
	 * Description: 查询列表
	 * @param queryForm
	 * @return
	 */
	public List<OmUserWithRole> queryUserList(UserQueryForm queryForm);
	
	/**
	 * Description: 根据ID查询用户
	 * @param userId
	 * @return
	 */
	public OmUserWithRole queryUser(long userId);
	
	/**
	 * 根据用户角色查询用户列表
	 * @param roleId
	 * @return
	 */
	public List<OmUserWithRole> queryUsersByRole(long roleId);
	
	/**
	 * Description: 查询符合条件的个数
	 * @param queryForm
	 * @return
	 */
	public long queryUserCount(UserQueryForm queryForm);
	
	/**
	 * Description: 查询所有角色
	 * @return
	 */
	public List<UserRole> queryAllRoles();
	
	/**
	 * Description: 修改用户
	 * @param user
	 * @return
	 */
	public int updateUser(OmUsers user);
	
	/**
	 * Description: 修改密码
	 * @param user
	 * @return
	 */
	public int updatePass(OmUsers user);
	
	/**
	 * Description: 修改用户的状态
	 * @param userId
	 * @return
	 */
	public int updateUserStatus(int userId);
	
	/**
	 * Description: 插入用户
	 * @param user
	 * @return
	 */
	public int insertUser(OmUsers user);
	
	/**
	 * Description: 根据用户名查询用户数,用于判断是否重名
	 * @param username
	 * @return
	 */
	public int queryUserCountByName(OmUsers user);
	
	/**
	 * 根据运维点查询主要负责人
	 * @param pointId
	 * @return
	 */
	public Map queryMainUserByPointId(Long pointId);
	
	public int deleteUser(int id);
}
