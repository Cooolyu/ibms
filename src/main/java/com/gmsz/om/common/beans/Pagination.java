/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2014
 * FileName: Pagination.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name           |      Content
 * 1   | 2014年4月22日        |   $Revision$  |  GMSZ)LuHaosheng  | original version
 *******************************************************************************
 */
package com.gmsz.om.common.beans;

/**
 * Class name:Pagination
 * Description: 分页Bean
 * @author LuHaosheng
 */
public class Pagination {
	/** * 查询从第几个开始 */
	private int start = 0;
	/** * 每页多少个 */
	private int count = 10;
	/** * 总共多少页 */
	private int pages = 0;
	/** * 当前第几页 */
	private int currentPage = 1;
	
	public int getStart() {
		return start;
	}
	public void setStart(int start) {
		this.start = start;
	}
	public int getCount() {
		return count;
	}
	public void setCount(int count) {
		this.count = count;
	}
	public int getCurrentPage() {
		return currentPage;
	}
	public void setCurrentPage(int currentPage) {
		this.currentPage = currentPage;
	}
	public int getPages() {
		return pages;
	}
	public void setPages(int pages) {
		this.pages = pages;
	}
}
