package com.gmsz.om.web.door.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.CheckinHistory;
import com.gmsz.om.common.beans.Dictionary;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.dictionary.dao.DictionaryMapper;
import com.gmsz.om.web.door.bean.DoorHistoryForm;
import com.gmsz.om.web.door.bean.DoorQueryForm;
import com.gmsz.om.web.door.dao.DoorMapper;
import com.gmsz.om.web.interfaceSer.client.ClientSendService;

@Component
public class DoorServiceImp implements DoorService {

	@Resource AssetsService assetsService;
	
	@Resource
	private ClientSendService sendService;
	
	@Resource
	private DictionaryMapper dictionaryMapper;
	
	@Resource
	private DoorMapper doorMapper;
	
	@Override
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm) {
		assetsQueryForm.setCategoryId(2L);
		//查找监控项
		Dictionary dic = this.dictionaryMapper.findDictionaryByCode("status");
		assetsQueryForm.setDictionaryId(dic.getId());
		List<AssetsResultForm> resList = this.assetsService.findAssetsInfoList(assetsQueryForm);		
		return resList;
	}

	@Override
	public List<CheckinHistory> getHistoryInfo(DoorQueryForm doorQuery) {
		if(!"".equals(doorQuery.getStartTime())) {
			doorQuery.setStartTime(doorQuery.getStartTime()+ " 00:00:00");
		}
		if(!"".equals(doorQuery.getEndTime())) {
			doorQuery.setEndTime(doorQuery.getEndTime()+ " 23:59:59");
		}
		return this.doorMapper.getDoorHistoryList(doorQuery);
	}
	
	@Override
	public Long countHistory(DoorQueryForm doorQuery) {
		if(!"".equals(doorQuery.getStartTime())) {
			doorQuery.setStartTime(doorQuery.getStartTime()+ " 00:00:00");
		}
		if(!"".equals(doorQuery.getEndTime())) {
			doorQuery.setEndTime(doorQuery.getEndTime()+ " 23:59:59");
		}
		return this.doorMapper.countHistory(doorQuery);
	}

}
