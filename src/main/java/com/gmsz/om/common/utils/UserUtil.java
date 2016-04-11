/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: UserUtil.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-9-4        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.utils;

import java.io.IOException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.ShortBufferException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.log4j.Logger;

import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.common.exception.NotLoginException;

/**
 * Class name:UserUtil
 * Description: User Util Class
 * @author LuHaosheng
 */
public class UserUtil {

	private static UserUtil userUtil = null;
	
	private static final Logger sysLogger = Logger.getLogger(StateDefine.SYS_LOG);
	
	private UserUtil() {
		
	}
	
	public synchronized static UserUtil getInstance() {
		if (userUtil == null) userUtil = new UserUtil();
		return userUtil;
	}
	
	/**
	 * Description: 从请求中获取登录人ID
	 * @param request
	 * @return
	 * @throws NotLoginException 
	 * @throws IOException 
	 * @throws ClassNotFoundException 
	 * @throws NoSuchPaddingException 
	 * @throws NoSuchAlgorithmException 
	 * @throws BadPaddingException 
	 * @throws IllegalBlockSizeException 
	 * @throws ShortBufferException 
	 * @throws InvalidKeyException 
	 */
	public long getUserId(HttpServletRequest request) throws NotLoginException {
		long userId = -999;
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().compareTo("omuser") == 0) {
					String encryptUserId = cookie.getValue();
					String decryptUserId = "";
					try {
						decryptUserId = AES.getInstance().decrypt(encryptUserId);
					} catch (InvalidKeyException|ShortBufferException|IllegalBlockSizeException| 
							BadPaddingException|NoSuchAlgorithmException|NoSuchPaddingException| 
							ClassNotFoundException|IOException ex) {
						sysLogger.error("*** Error occurred: ", ex);
						throw new NotLoginException();
					}
					try {
						userId = Long.parseLong(decryptUserId);
					} catch (NumberFormatException e) {
						sysLogger.error("*** Error occurred: ", e);
						throw new NotLoginException();
					}
					break;
				}
			}
		}
		if (userId == -999) throw new NotLoginException();
		
		return userId;
	}
	
	
	/**
	 * Description: 判断用户是否已经登录
	 * @param request
	 * @return
	 */
	public boolean isUserLogin(HttpServletRequest request) {
		boolean flag = false;
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().compareTo("omuser") == 0) {
					flag = true;
					break;
				}
			}
		}
		return flag;
	}
}
