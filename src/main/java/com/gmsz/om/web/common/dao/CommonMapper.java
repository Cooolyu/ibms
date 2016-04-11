/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: CommonMapper.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年3月11日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.common.dao;

/**
 * Class name:CommonMapper
 * Description: please write your description
 * @author LuHaosheng
 */
public interface CommonMapper {

	/**
	 * Description: 根据用户ID查询用户角色
	 * @param userId
	 * @return
	 */
	public long queryUserRole(long userId);
}
