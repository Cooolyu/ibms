package com.gmsz.om.web.alarm.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import org.apache.hadoop.io.nativeio.NativeIO.POSIX.Stat;
import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Dictionary;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.TermAlarm;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.alarm.bean.AlarmQuery;
import com.gmsz.om.web.alarm.bean.AlarmResultForm;
import com.gmsz.om.web.alarm.dao.AlarmMapper;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.dictionary.dao.DictionaryMapper;
import com.gmsz.om.web.interfaceSer.client.ClientSendService;

@Component
public class AlarmServiceImp implements AlarmService {
	@Resource 
	private AssetsService assetsService;
	
	@Resource
	private AlarmMapper alarmMapper;
	
	@Resource
	private ClientSendService sendService;
	
	@Resource
	private BuildingService buildingService;
	
	@Resource
	private DictionaryMapper dictionaryMapper;
	
	@Override
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm) {
		assetsQueryForm.setCategoryId(1L);
		//查找监控项
		Dictionary dic = this.dictionaryMapper.findDictionaryByCode("status");
		assetsQueryForm.setDictionaryId(dic.getId());
		List<AssetsResultForm> resList = this.assetsService.findAssetsInfoList(assetsQueryForm);		
		return resList;
	}

	@Override
	public List<AlarmResultForm> getAlarmList(AlarmQuery queryForm) {
		return this.alarmMapper.getAlarmList(queryForm);
	}

	@Override
	public Long getAlarmCount(AlarmQuery queryForm) {
		return this.alarmMapper.getAlarmCount(queryForm);
	}

	@Override
	public void deal(TermAlarm alarm) {
		this.alarmMapper.deal(alarm);	
	}

	@Override
	public Result bufang(String value) {
		Result result = new Result(StateDefine.FLAG_SUCCESS, true);
		AssetsQueryForm queryForm = new AssetsQueryForm();
		queryForm.setCategoryId(1L);
		Long assetsId = this.assetsService.findFirstAssets(queryForm);
		JSONObject json = new JSONObject();
		json.put("option", value);
		json.put("assetsId", assetsId);
		String requestString = json.toString();
		String responseStr = this.sendService.getResponseStr("http://"+StateDefine.SERVICE_IP+":"+StateDefine.SERVICE_PORT+"/omf/do/alarm/bufang", requestString);
		return result;
	}
	
	public Long getAlarmNotice(AlarmQuery queryForm) {
		return this.alarmMapper.getAlarmNotice(queryForm);
	}

}
