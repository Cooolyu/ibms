/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: CommonServiceImpl.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2014年3月11日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.web.common.service;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.web.common.dao.CommonMapper;

/**
 * Class name:CommonServiceImpl
 * Description: please write your description
 * @author LuHaosheng
 */
@Component
public class CommonServiceImpl implements CommonService {

	@Resource
	private CommonMapper commonMapper;
	
	@Override
	public long getUserRole(long userId) {
		return this.commonMapper.queryUserRole(userId);
	}

	@Override
	public void setPages(Pagination pagination, long totalCount) {
		int pages = 0;
		if (totalCount > 0) {
			if (totalCount % pagination.getCount() == 0) 
				pages = (int)(totalCount / pagination.getCount());
			else
				pages = (int)(totalCount / pagination.getCount()) + 1;
		}
		pagination.setPages(pages);
	}

}
