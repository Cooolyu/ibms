package com.gmsz.om.web.main.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.web.monitorStatus.bean.MonitorStatusQuery;
import com.gmsz.om.web.monitorStatus.dao.MonitorStatusMapper;

@Component
public class MainServiceImp implements MainService {
	
	@Resource
	private MonitorStatusMapper monitorStatusMapper;

	@Override
	public Map<String, Object> getDoorData() {
		Map<String,Object> data = new HashMap<String, Object>();
		int erro = this.getDoorErro(2L);
		int normal = this.getDoorNormal(2L);
		
		data.put("normal", normal);
		data.put("erro", erro);
		return data;
	}
	
	@Override
	public Map<String, Object> getCameraData() {
		Map<String,Object> data = new HashMap<String, Object>();
		int normal = this.getNormal(3L);
		int erro = this.getErro(3L);
		data.put("normal", normal);
		data.put("erro", erro);
		return data;
	}
	
	public int getNormal(Long categoryId) {
		MonitorStatusQuery queryForm = new MonitorStatusQuery();
		queryForm.setCategoryId(categoryId);
		queryForm.setCode("normal");
		return this.monitorStatusMapper.getStatusNum(queryForm);
	}
	
	public int getErro(Long categoryId) {
		MonitorStatusQuery queryForm = new MonitorStatusQuery();
		queryForm.setCategoryId(categoryId);
		queryForm.setCode("alarm");
		return this.monitorStatusMapper.getStatusNum(queryForm);
	}
	
	public int getDoorNormal(Long categoryId) {
		MonitorStatusQuery queryForm = new MonitorStatusQuery();
		queryForm.setCategoryId(categoryId);
		return this.monitorStatusMapper.getDoorNormalNum(queryForm);
	}
	
	public int getDoorErro(Long categoryId) {
		MonitorStatusQuery queryForm = new MonitorStatusQuery();
		queryForm.setCategoryId(categoryId);
		return this.monitorStatusMapper.getDoorErroNum(queryForm);
	}


}
