/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: CommonController.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-10-22        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.common.controller;

import java.io.IOException;

import javassist.NotFoundException;

import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.ExceptionHandler;

import com.gmsz.om.common.exception.NoPermissionException;
import com.gmsz.om.common.exception.NotLoginException;

/**
 * Class name:CommonController
 * Description: Common Controller
 * @author LuHaosheng
 */

public class CommonController {

	/**
	 * Description: 用户未登录
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@ExceptionHandler(NotLoginException.class)
	public void noLogin(HttpServletResponse response) throws IOException {
//		String page = null;
//		page = DeviceUtil.getInstance().getPageStart(request) + "notlogin";
//		return page;
		response.sendError(401);
	}
	
	/**
	 * Description: 发生异常
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@ExceptionHandler(Exception.class)
	public void serverError(HttpServletResponse response, Exception e) throws IOException {
//		String page = null;
//		page = DeviceUtil.getInstance().getPageStart(request) + "error";
//		return page;
//		e.printStackTrace();
		response.sendError(500);
	}
	
	/**
	 * Description: 没有权限操作
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@ExceptionHandler(NoPermissionException.class)
	public void handlerNoPermissionException(HttpServletResponse response) throws IOException {
//		String page = null;
//		page = DeviceUtil.getInstance().getPageStart(request) + "nopermission";
//		return page;
		response.sendError(403);
	}
	
	/**
	 * Description: 资源未找到
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@ExceptionHandler(NotFoundException.class)
	public void handlerNotFoundException(HttpServletResponse response) throws IOException {
//		String page = null;
//		page = DeviceUtil.getInstance().getPageStart(request) + "nofound";
//		return page;
		response.sendError(404);
	}
}
