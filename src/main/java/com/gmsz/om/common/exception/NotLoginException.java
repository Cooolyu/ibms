/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: NotLoginException.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-9-4        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.exception;

/**
 * Class name:NotLoginException
 * Description: If the user is not login, when you want to get the user id from request, this exception will thrown
 * @author LuHaosheng
 */
public class NotLoginException extends Exception {
	private static final long serialVersionUID = -799511367340055073L;

	public NotLoginException() {
		super("User Not Login");
	}
}
