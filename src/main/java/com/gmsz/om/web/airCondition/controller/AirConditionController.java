package com.gmsz.om.web.airCondition.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.airCondition.beans.AirAssets;
import com.gmsz.om.web.airCondition.service.AirConditionService;

/**
 * 
 * @author Jackyu
 * 暖通空调管理
 *
 */
@Controller
@RequestMapping(value="airCdt")
public class AirConditionController {
	
	@SuppressWarnings("unused")
	private static final Logger LOG = LoggerFactory.getLogger(AirConditionController.class);
	
	@Autowired
	private AirConditionService airConditionService;
	
	
	@RequestMapping(value="show")
	public ModelAndView showBuild(){
		ModelAndView mv = new ModelAndView("airCondition/airConditionShow");
		return mv;
	}
	
	//查询楼栋
	@RequestMapping(value = "buildList")
	@ResponseBody
	public List<Building> buildList(){
		LOG.info(airConditionService.buildList().size()+"");
		return airConditionService.buildList();
	}
	
	//查询相关的楼层
	@RequestMapping(value = "floorList")
	@ResponseBody
	public List<Floor> floorList(@RequestParam("buildId") long buildId){
		LOG.info(airConditionService.floorList(buildId).size()+"----"+buildId);
		return airConditionService.floorList(buildId);
	}
	
	//查询相关楼层的资产
	@RequestMapping(value = "assetList")
	@ResponseBody
	public List<AirAssets> assetList(@RequestParam("floorId") long floorId){
		LOG.info(airConditionService.assetList(floorId).size()+"-----"+floorId);
		return airConditionService.assetList(floorId);
	}
	
	//保存图标坐标
	@RequestMapping(value = "savePosition")
	@ResponseBody
	public Result savePosition(@RequestParam("assetId") long assetId,
							   @RequestParam("locationX") String locationX,
							   @RequestParam("locationY") String locationY){
		AirAssets airAssets = new AirAssets();
		airAssets.setAssetId(assetId);
		airAssets.setLocationX(locationX);
		airAssets.setLocationY(locationY);
		return airConditionService.savePosition(airAssets);
	}
	
}
	
