/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: NoPermission.java
 * Modify record:
 * NO. |     Date       |    Version      |      Name         |      Content
 * 1   | 2013-4-27        |      1.0        |  GMSZ)LuHaosheng  | original version
 *******************************************************************************
 */
package com.gmsz.om.common.exception;

/**
 * Class name:NoPermission
 * Description: please write your description
 * @author LuHaosheng
 */
public class NoPermissionException extends Exception {

	private static final long serialVersionUID = 1791549945790849944L;

	public NoPermissionException() {
		super("User dos not have permission");
	}
}
