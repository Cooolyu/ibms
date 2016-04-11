/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: LoginFilter.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-9-18        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.common.utils.UserUtil;

/**
 * Class name:LoginFilter
 * Description: Check if user is login
 * @author LuHaosheng
 */
public class LoginFilter implements Filter {
	
	private static final Logger sysLogger = Logger.getLogger(StateDefine.SYS_LOG);

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res, 
			FilterChain chain) throws IOException, ServletException {

		HttpServletRequest request = (HttpServletRequest)req;
		
		// URI
		String uri = request.getRequestURI().toUpperCase();

		sysLogger.info("*** URI: " + uri);
		
		// 访问登陆login
		if (uri.indexOf("LOGIN") != -1) {
			chain.doFilter(req, res);
			return;
		}
		
		// 未登录时也可以访问错误页面
		if (uri.indexOf("ERRORCODE") != -1) {
			chain.doFilter(req, res);
			return;
		}
		
		
		if (UserUtil.getInstance().isUserLogin(request) == true) {
			chain.doFilter(req, res);
			return;
		} else {
			if (uri.indexOf("DO") > 0 || uri.indexOf(".JSP") > 0) {
				sysLogger.error("*** Error occurred: Not login access uri==>" + uri);
				HttpServletResponse response = (HttpServletResponse)res;
				response.sendError(401);
				return;
			} else {
				chain.doFilter(req, res);
			}
		}
		
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}

}