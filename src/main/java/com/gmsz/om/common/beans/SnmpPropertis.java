package com.gmsz.om.common.beans;
/**
 * @author Jackyu
 * 2016年3月28日
 * TODO snmp记录项
 */
public class SnmpPropertis {
	
	private long id;
	private String code;	//snmp监控项的名称，和dictionary表中的code相对应
	private String oid;		//snmp的OID ，可运算
	private String ext;		//上传数据的后缀
	private long assetsId;
	private int status;		//状态 0:不可用  1:可用

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getOid() {
		return oid;
	}

	public void setOid(String oid) {
		this.oid = oid;
	}

	public String getExt() {
		return ext;
	}

	public void setExt(String ext) {
		this.ext = ext;
	}

	public long getAssetsId() {
		return assetsId;
	}

	public void setAssetsId(long assetsId) {
		this.assetsId = assetsId;
	}

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}
	
	
}
