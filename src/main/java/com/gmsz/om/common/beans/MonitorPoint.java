/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: MonitorPoint.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2013年11月8日        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.beans;

import java.util.Date;

/**
 * Class name:MonitorPoint
 * Description: 运维点
 * @author LuHaosheng
 */
public class MonitorPoint {
	private long id;
	/** 名称 */
	private String name;
	/** 地址 */
	private String address;
	/** 经度 */
	private float longitude;
	/** 纬度 */
	private float latitude;
	/** 业主姓名 */
	private String ownerName;
	/** 业主电话 */
	private String ownerPhone;
	/** 业主邮箱 */
	private String ownerMail;
	/** 运维联系人姓名 */
	private String supportName;
	/** 运维联系人电话 */
	private String supportPhone;
	/** 运维联系人邮箱 */
	private String supportMail;
	/** 服务开始日期 */
	private Date serviceStartDate;
	/** 服务结束日期 */
	private Date serviceEndDate;
	/** 服务年限 */
	private int serviceYear;
	/** 服务状态 */
	private int serviceStatus;
	/** 服务器IP地址 */
	private String serverIp;
	/** 服务器端口号 */
	private Integer serverPort;
	private double expNum;
	
	private long statusNum;
	
	private long mainUser;
	private String otherMaintains;
	
	private String projectNo;//项目编号
	private Date startWorkDate;//开工日期
	private Date completeDate;//竣工日期
	private Date transferDate;//移交日期
	private String summary;//项目简介
	
	
	


	/**
	 * @return the statusNum
	 */
	public long getStatusNum() {
		return statusNum;
	}

	/**
	 * @param statusNum the statusNum to set
	 */
	public void setStatusNum(long statusNum) {
		this.statusNum = statusNum;
	}

	/**
	 * @return the expNum
	 */
	public double getExpNum() {
		return expNum;
	}

	/**
	 * @param expNum the expNum to set
	 */
	public void setExpNum(double expNum) {
		this.expNum = expNum;
	}

	/**
	 * @return the mainUser
	 */
	public long getMainUser() {
		return mainUser;
	}

	/**
	 * @param mainUser the mainUser to set
	 */
	public void setMainUser(long mainUser) {
		this.mainUser = mainUser;
	}

	/**
	 * @return the otherMaintains
	 */
	public String getOtherMaintains() {
		return otherMaintains;
	}

	/**
	 * @param otherMaintains the otherMaintains to set
	 */
	public void setOtherMaintains(String otherMaintains) {
		this.otherMaintains = otherMaintains;
	}

	public static int STATUS_ACTIVE = 0;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public float getLongitude() {
		return longitude;
	}

	public void setLongitude(float longitude) {
		this.longitude = longitude;
	}

	public float getLatitude() {
		return latitude;
	}

	public void setLatitude(float latitude) {
		this.latitude = latitude;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getOwnerPhone() {
		return ownerPhone;
	}

	public void setOwnerPhone(String ownerPhone) {
		this.ownerPhone = ownerPhone;
	}

	public String getOwnerMail() {
		return ownerMail;
	}

	public void setOwnerMail(String ownerMail) {
		this.ownerMail = ownerMail;
	}

	public String getSupportName() {
		return supportName;
	}

	public void setSupportName(String supportName) {
		this.supportName = supportName;
	}

	public String getSupportPhone() {
		return supportPhone;
	}

	public void setSupportPhone(String supportPhone) {
		this.supportPhone = supportPhone;
	}

	public String getSupportMail() {
		return supportMail;
	}

	public void setSupportMail(String supportMail) {
		this.supportMail = supportMail;
	}

	public Date getServiceStartDate() {
		return serviceStartDate;
	}

	public void setServiceStartDate(Date serviceStartDate) {
		this.serviceStartDate = serviceStartDate;
	}

	public int getServiceYear() {
		return serviceYear;
	}

	public int getServiceStatus() {
		return serviceStatus;
	}

	public void setServiceStatus(int serviceStatus) {
		this.serviceStatus = serviceStatus;
	}

	public void setServiceYear(int serviceYear) {
		this.serviceYear = serviceYear;
	}

	public String getServerIp() {
		return serverIp;
	}

	public void setServerIp(String serverIp) {
		this.serverIp = serverIp;
	}

	

	public Integer getServerPort() {
		return serverPort;
	}

	public void setServerPort(Integer serverPort) {
		this.serverPort = serverPort;
	}

	public Date getServiceEndDate() {
		return serviceEndDate;
	}

	public void setServiceEndDate(Date serviceEndDate) {
		this.serviceEndDate = serviceEndDate;
	}

	public String getProjectNo() {
		return projectNo;
	}

	public void setProjectNo(String projectNo) {
		this.projectNo = projectNo;
	}

	public Date getStartWorkDate() {
		return startWorkDate;
	}

	public void setStartWorkDate(Date startWorkDate) {
		this.startWorkDate = startWorkDate;
	}

	public Date getCompleteDate() {
		return completeDate;
	}

	public void setCompleteDate(Date completeDate) {
		this.completeDate = completeDate;
	}

	public Date getTransferDate() {
		return transferDate;
	}

	public void setTransferDate(Date transferDate) {
		this.transferDate = transferDate;
	}

	public String getSummary() {
		return summary;
	}

	public void setSummary(String summary) {
		this.summary = summary;
	}
	
	
}
