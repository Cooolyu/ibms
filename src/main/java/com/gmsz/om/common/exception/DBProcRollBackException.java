/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: DBProcRollBackException.java
 * Modify record:
 * NO. |     Date       |    Version      |      Name         |      Content
 * 1   | 2014-6-23        |      1.0        |  GMSZ)ZhouYunlong  | original version
 *******************************************************************************
 */
package com.gmsz.om.common.exception;

/**
 * Class DBProcRollBackException
 * Description: 数据库操作失败回滚异常
 * @author ZhouYunlong
 */
public class DBProcRollBackException extends Exception{

	private static final long serialVersionUID = 2288651077575910307L;

	public DBProcRollBackException(String msg) {
		super(msg);
	}
}
