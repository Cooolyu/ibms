/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserController.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.UserRole;
import com.gmsz.om.common.exception.NoPermissionException;
import com.gmsz.om.common.exception.NotLoginException;
import com.gmsz.om.common.utils.UserUtil;
import com.gmsz.om.web.common.controller.CommonController;
import com.gmsz.om.web.common.service.CommonService;
import com.gmsz.om.web.system.user.bean.OmUserWithRole;
import com.gmsz.om.web.system.user.bean.UserQueryForm;
import com.gmsz.om.web.system.user.constant.UserStateDefine;
import com.gmsz.om.web.system.user.service.UserService;
import com.gmsz.om.web.system.user.validate.IsAdmin;

/**
 * Class name:UserController
 * Description: 用户管理
 * @author LuHaosheng
 */

public class UserController extends CommonController {
	
	@Resource
	private UserService userService;
	
	@Resource
	private CommonService commonService;
	
	@Resource
	private IsAdmin isAdmin;
	

	public String goList() {
		return UserStateDefine.PAGE_SYS + "/userlist";
	}
	

	public List<OmUserWithRole> userList(@ModelAttribute(value="userQueryForm")UserQueryForm userQueryForm) {
		List<OmUserWithRole> userList = this.userService.getUsers(userQueryForm);
		return userList;
	}
	

	public Pagination userPagination(@ModelAttribute(value="userQueryForm")UserQueryForm userQueryForm) {
		long count = this.userService.getUserCount(userQueryForm);
		commonService.setPages(userQueryForm, count);
		return userQueryForm;
	}
	

	public Result domodify(@ModelAttribute(value="userModifyForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		long loginUserId = -1;
		loginUserId = UserUtil.getInstance().getUserId(request);
//		this.isAdmin.permission(loginUserId);
		return this.userService.modifyUser(user);
	}
	

	public List<UserRole> allRoles() {
		return this.userService.getAllRoles();
	}
	

	public Result rsetPass(@ModelAttribute(value="userModifyForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		long loginUserId = -1;
		loginUserId = UserUtil.getInstance().getUserId(request);
//		this.isAdmin.permission(loginUserId);
		return this.userService.modifyPass(user);
	}
	

	public Result delUser(@RequestParam(value="userId") int userId,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		long loginUserId = -1;
		loginUserId = UserUtil.getInstance().getUserId(request);
//		this.isAdmin.permission(loginUserId);
		return this.userService.deleteUser(userId);
	}
	

	public Result doAdd(@ModelAttribute(value="userAddForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		long loginUserId = -1;
		loginUserId = UserUtil.getInstance().getUserId(request);
//		this.isAdmin.permission(loginUserId);
		return this.userService.addUser(user);
	}


	public String getUserInfo(HttpServletRequest request) throws NotLoginException {
		long userId = UserUtil.getInstance().getUserId(request);
		OmUserWithRole user = this.userService.getUser(userId);
		return user.getRoleName() + ": " + user.getUsername();
	}
}
