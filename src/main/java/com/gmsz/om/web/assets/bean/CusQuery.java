package com.gmsz.om.web.assets.bean;

import java.util.List;

import com.gmsz.om.common.beans.SnmpPropertis;

/**
 * 
 * @author Jackyu
 * 2016年3月28日
 * TODO 资产自定义项上传参数
 */
public class CusQuery {
	
	// 资产自定义属性数组
	private List<AssetProperties> assetProp;
	// 资产监控项
	private AssetDictionary monitorChild;
	// SNMP数组
	private List<SnmpPropertis> snmpList;

	public List<AssetProperties> getAssetProp() {
		return assetProp;
	}

	public void setAssetProp(List<AssetProperties> assetProp) {
		this.assetProp = assetProp;
	}

	public AssetDictionary getMonitorChild() {
		return monitorChild;
	}

	public void setMonitorChild(AssetDictionary monitorChild) {
		this.monitorChild = monitorChild;
	}

	public List<SnmpPropertis> getSnmpList() {
		return snmpList;
	}

	public void setSnmpList(List<SnmpPropertis> snmpList) {
		this.snmpList = snmpList;
	}

	@Override
	public String toString() {
		return "CusQuery [assetProp=" + assetProp + ", monitorChild=" + monitorChild + ", snmpList=" + snmpList + "]";
	}

}
