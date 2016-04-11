package com.gmsz.om.web.door.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;






import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.CheckinHistory;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.common.service.CommonService;
import com.gmsz.om.web.door.bean.DoorHistoryForm;
import com.gmsz.om.web.door.bean.DoorQueryForm;
import com.gmsz.om.web.door.contant.DoorStateDefine;
import com.gmsz.om.web.door.service.DoorService;
import com.gmsz.om.web.floor.service.FloorService;
import com.gmsz.om.web.system.user.bean.UserQueryForm;

@Controller
@RequestMapping(value="door")
public class DoorController {
	
	@Resource
	private FloorService floorService;
	
	@Resource
	private BuildingService buildingService;
	
	@Resource
	private AssetsService assetsService;
	
	@Resource
	private DoorService doorService;
	
	@Resource
	private CommonService commonService;
	
	@RequestMapping(value="show/{buildId}")
	public ModelAndView show(@PathVariable("buildId")Long buildId,@ModelAttribute("assetsQueryForm")AssetsQueryForm assetsQueryForm) {
		ModelAndView mv = new ModelAndView(DoorStateDefine.SHOW);
		assetsQueryForm.setCategoryId(2L);
		List<Building> buildList = buildingService.findAllBuildings();
		if(assetsQueryForm.getFloorId() == null) {
			assetsQueryForm.setFloorId(1L);
		}
		List<Floor> floorList = floorService.getFloorList(buildId);
		Building building = buildingService.getBuilding(buildId);
		Floor floor = floorService.getFloor(assetsQueryForm.getFloorId());
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
		return this.doorService.findInfoList(assetsQueryForm);
	}
	
	@RequestMapping(value="history")
	@ResponseBody
	public List<CheckinHistory> getHistoryInfo(@ModelAttribute("doorQuery")DoorQueryForm doorQuery) {
		return this.doorService.getHistoryInfo(doorQuery);
	}
	
	@RequestMapping(value="count")
	@ResponseBody
	public Pagination userPagination(@ModelAttribute("doorQuery")DoorQueryForm doorQuery) {
		long count = this.doorService.countHistory(doorQuery);
		commonService.setPages(doorQuery, count);
		return doorQuery;
	}

}
