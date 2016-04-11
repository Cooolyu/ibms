package com.gmsz.om.web.camera.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.web.alarm.contant.AlarmStateDefine;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.camera.contant.CameraStateDefine;
import com.gmsz.om.web.camera.service.CameraService;
import com.gmsz.om.web.floor.service.FloorService;


@Controller
@RequestMapping(value="camera")
public class CameraController {

	@Resource
	private FloorService floorService;
	
	@Resource
	private BuildingService buildingService;
	
	@Resource
	private AssetsService assetsService;
	
	@Resource
	private CameraService cameraService;
	
	@RequestMapping(value="show/{buildId}")
	public ModelAndView show(@PathVariable("buildId")Long buildId,@ModelAttribute("assetsQueryForm")AssetsQueryForm assetsQueryForm) {
		ModelAndView mv = new ModelAndView(CameraStateDefine.SHOW);
		assetsQueryForm.setCategoryId(3L);
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
		return this.cameraService.findInfoList(assetsQueryForm);
	}
	
	@RequestMapping(value="getParam")
	@ResponseBody
	public long getParam(@ModelAttribute("assetsQueryForm")AssetsQueryForm assetsQueryForm) {
		String res = this.cameraService.getParam(assetsQueryForm);
		if(res != null)
			return Long.parseLong(res);
		return 0;
	}
}
