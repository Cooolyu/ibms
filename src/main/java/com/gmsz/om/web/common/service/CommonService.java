/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: CommonService.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年3月11日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.common.service;

import com.gmsz.om.common.beans.Pagination;

/**
 * Class name:CommonService
 * Description: please write your description
 * @author LuHaosheng
 */
public interface CommonService {

	/**
	 * Description: 根据用户ID获得用户角色
	 * @param userId
	 * @return
	 */
	public long getUserRole(long userId);
	
	/**
	 * Description: 设置分页总页数
	 * @param pagination 分页Bean
	 * @param totalCount 查询总条数
	 */
	public void setPages(Pagination pagination, long totalCount);
}
