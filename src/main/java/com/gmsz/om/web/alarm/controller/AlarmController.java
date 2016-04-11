package com.gmsz.om.web.alarm.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.TermAlarm;
import com.gmsz.om.web.alarm.bean.AlarmQuery;
import com.gmsz.om.web.alarm.bean.AlarmResultForm;
import com.gmsz.om.web.alarm.contant.AlarmStateDefine;
import com.gmsz.om.web.alarm.service.AlarmService;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.common.service.CommonService;
import com.gmsz.om.web.floor.service.FloorService;
import com.gmsz.om.web.main.constant.MainStateDefine;

@Controller
@RequestMapping(value="alarm")
public class AlarmController {

	@Resource
	private FloorService floorService;
	
	@Resource
	private BuildingService buildingService;
	
	@Resource
	private AssetsService assetsService;
	
	@Resource
	private AlarmService alarmService;
	
	@Resource
	private CommonService commonService;
	
	@RequestMapping(value="show/{buildId}")
	public ModelAndView show(@PathVariable("buildId")Long buildId,@ModelAttribute("assetsQueryForm")AssetsQueryForm assetsQueryForm) {
		ModelAndView mv = new ModelAndView(AlarmStateDefine.SHOW);
		assetsQueryForm.setCategoryId(1L);
		assetsQueryForm.setBuildingId(buildId);
		List<Building> buildList = buildingService.findAllBuildings();
		Floor floor = new Floor();
		if(assetsQueryForm.getFloorId() == null) {
			floor = floorService.findMinFloor(buildId);
			if(floor != null) {
				assetsQueryForm.setFloorId(floor.getId());
			}
		}else {
			floor = floorService.getFloor(assetsQueryForm.getFloorId());
		}
		List<Floor> floorList = floorService.getFloorList(buildId);
		Building building = buildingService.getBuilding(buildId);
		mv.addObject("buildList", buildList);
		mv.addObject("floorList", floorList);
		mv.addObject("building", building);
		mv.addObject("floor", floor);
		mv.addObject("assetsQueryForm", assetsQueryForm);
		return mv;
	}
	
	@RequestMapping(value="getInfo")
	@ResponseBody
	public List<AssetsResultForm> getAssetsInfo(@ModelAttribute("assetsQueryForm")AssetsQueryForm assetsQueryForm) {
		return this.alarmService.findInfoList(assetsQueryForm);
	}
	
	@RequestMapping(value="list")
	public String alarmList() {
		return AlarmStateDefine.LIST;
	}
	
	@RequestMapping(value="alarmList")
	@ResponseBody
	public List<AlarmResultForm> getAlarmList(@ModelAttribute("queryForm")AlarmQuery queryForm) {
		List<AlarmResultForm> alarmList = this.alarmService.getAlarmList(queryForm);
		return alarmList;
	}
	
	@RequestMapping(value = "pagination")
	@ResponseBody
	public Pagination getPagination(@ModelAttribute("queryForm")AlarmQuery queryForm) {
		Long count = this.alarmService.getAlarmCount(queryForm);
		commonService.setPages(queryForm, count);
		return queryForm;
	}
	
	@RequestMapping(value = "deal")
	@ResponseBody
	public void deal(@ModelAttribute("alarmForm")AlarmResultForm alarmForm) {
		TermAlarm alarm = new TermAlarm();
		alarm.setId(alarmForm.getId());
		alarm.setStatus(TermAlarm.STATUS_OVER);
		alarm.setContent(alarmForm.getMemo());
		this.alarmService.deal(alarm);
	}
	
	@RequestMapping(value = "bufang")
	@ResponseBody
	public Result bufang(@RequestParam("option")String option) {
		return this.alarmService.bufang(option);
	}
	
	@RequestMapping(value = "notice")
	@ResponseBody
	public Long getAlarmNotice() {
		AlarmQuery query = new AlarmQuery();
		query.setStatus(TermAlarm.STATUS_WAITING_FOR_MAINTAIN);
		Long count = this.alarmService.getAlarmCount(query);
		return count;
	}
}
