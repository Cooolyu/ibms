
/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: UserController.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年2月27日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.system.user.controller.formal;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.UserRole;
import com.gmsz.om.common.exception.NoPermissionException;
import com.gmsz.om.common.exception.NotLoginException;
import com.gmsz.om.web.common.service.CommonService;
import com.gmsz.om.web.system.user.bean.OmUserWithRole;
import com.gmsz.om.web.system.user.bean.UserQueryForm;
import com.gmsz.om.web.system.user.controller.UserController;
import com.gmsz.om.web.system.user.service.UserService;
import com.gmsz.om.web.system.user.validate.IsAdmin;

/**
 * Class name:UserController
 * Description: 用户管理
 * @author LuHaosheng
 */
@Controller
@RequestMapping(value = "system/user")
public class FormalUserController extends UserController {
	
	@Resource
	private UserService userService;
	
	@Resource
	private CommonService commonService;
	
	@Resource
	private IsAdmin isAdmin;
	
	@RequestMapping(value = "list")
	public String goList() {
		return super.goList();
	}
	
	@RequestMapping(value = "list/query")
	@ResponseBody
	public List<OmUserWithRole> userList(@ModelAttribute(value="userQueryForm")UserQueryForm userQueryForm) {
		return super.userList(userQueryForm);
	}
	
	@RequestMapping(value = "pagination")
	@ResponseBody
	public Pagination userPagination(@ModelAttribute(value="userQueryForm")UserQueryForm userQueryForm) {
		return super.userPagination(userQueryForm);
	}
	
	@RequestMapping(value = "modify")
	@ResponseBody
	public Result domodify(@ModelAttribute(value="userModifyForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
	
		return super.domodify(user, request);
	}
	
	@RequestMapping(value = "allroles")
	@ResponseBody
	public List<UserRole> allRoles() {
		return super.allRoles();
	}
	
	@RequestMapping(value = "modify/pass")
	@ResponseBody
	public Result rsetPass(@ModelAttribute(value="userModifyForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		return super.rsetPass(user, request);
	}
	
	@RequestMapping(value = "del")
	@ResponseBody
	public Result delUser(@RequestParam(value="userId") int userId,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		return super.delUser(userId, request);
	}
	
	@RequestMapping(value = "add")
	@ResponseBody
	public Result doAdd(@ModelAttribute(value="userAddForm")OmUsers user,HttpServletRequest request) 
			throws NotLoginException, NoPermissionException {
		return super.doAdd(user, request);
	}

	@RequestMapping(value = "name")
	@ResponseBody
	public String getUserInfo(HttpServletRequest request) throws NotLoginException {
		return super.getUserInfo(request);
	}
	
}

