/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: LoginController.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name          |      Content
 * 1   | 2013年10月30日       |      1.0        |  GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.login.controller;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.annotation.Resource;
import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.ShortBufferException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.gmsz.om.common.beans.OmUsers;
import com.gmsz.om.common.utils.AES;
import com.gmsz.om.web.login.bean.LoginResult;
import com.gmsz.om.web.login.service.LoginService;

/**
 * Class name:LoginController
 * Description: 登录
 * @author LuHaosheng
 */
@Controller
public class LoginController {
	
	@Resource
	private LoginService loginService;

	@RequestMapping(value = "login")
	@ResponseBody
	public LoginResult login(@ModelAttribute OmUsers user, HttpServletResponse response, HttpServletRequest request) throws InvalidKeyException, ShortBufferException, IllegalBlockSizeException, BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException, ClassNotFoundException, IOException {
//		Result result = this.loginService.login(user);
		LoginResult loginResult = this.loginService.login(user);
		if (loginResult.isResultValue() == true) {
			Cookie cookie = new Cookie("omuser", AES.getInstance().encrypt(Long.toString(user.getId())));
			cookie.setMaxAge(-1);
			cookie.setPath(request.getContextPath());
			response.addCookie(cookie);
		}
		return loginResult;
	}
	
	@RequestMapping(value = "logout")
	public String logout(HttpServletRequest request, HttpServletResponse response) {
	    Cookie[] cookies = request.getCookies();  
	    if (cookies != null && cookies.length > 0) {  
	        for (Cookie cookie : cookies) {  
	            String name = cookie.getName();  
	            // 找到需要删除的Cookie  
	            if (name.compareTo("omuser") == 0) {
	                // 设置生存期为0  
	                cookie.setMaxAge(0);
	                cookie.setPath(request.getContextPath());
	                // 设回Response中生效  
	                response.addCookie(cookie);
	            }  
	        }  
	    }  
		return "login";
	}
}
