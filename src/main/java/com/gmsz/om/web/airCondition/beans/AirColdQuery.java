package com.gmsz.om.web.airCondition.beans;
/**
 * @author Jackyu
 * 冷机的各项参数
 */
public class AirColdQuery {
	
	private long assetId;
	private String status;	//设备状态
	private double runTime;	//累计运行时间
	private String runStatus;	//运行状态
	private long waterTemp;	//供水温度
	private long waterPressure;//供水压力
	private	long coldTemp;	//冷凝温度
	private long backwaterTemp;	//回水温度
	private 	long backwaterTemmp;	//回水压力
	private long evPressure;		//蒸发压力
	
	
	public long getAssetId() {
		return assetId;
	}
	public void setAssetId(long assetId) {
		this.assetId = assetId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public double getRunTime() {
		return runTime;
	}
	public void setRunTime(double runTime) {
		this.runTime = runTime;
	}
	public String getRunStatus() {
		return runStatus;
	}
	public void setRunStatus(String runStatus) {
		this.runStatus = runStatus;
	}
	public long getWaterTemp() {
		return waterTemp;
	}
	public void setWaterTemp(long waterTemp) {
		this.waterTemp = waterTemp;
	}
	public long getWaterPressure() {
		return waterPressure;
	}
	public void setWaterPressure(long waterPressure) {
		this.waterPressure = waterPressure;
	}
	public long getColdTemp() {
		return coldTemp;
	}
	public void setColdTemp(long coldTemp) {
		this.coldTemp = coldTemp;
	}
	public long getBackwaterTemp() {
		return backwaterTemp;
	}
	public void setBackwaterTemp(long backwaterTemp) {
		this.backwaterTemp = backwaterTemp;
	}
	public long getBackwaterTemmp() {
		return backwaterTemmp;
	}
	public void setBackwaterTemmp(long backwaterTemmp) {
		this.backwaterTemmp = backwaterTemmp;
	}
	public long getEvPressure() {
		return evPressure;
	}
	public void setEvPressure(long evPressure) {
		this.evPressure = evPressure;
	}
	
}
