
package com.gmsz.om.web.building.controller;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Building;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.web.building.bean.BuildQuery;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.common.service.CommonService;

@Controller
@RequestMapping(value="building")
public class BuildingController {
	
	private static final Logger LOG = LoggerFactory.getLogger(BuildingController.class);
	
	@Resource
	private BuildingService buildingService;
	
	@Resource
	private CommonService commonService;
	
	@RequestMapping(value="show")
	public ModelAndView showBuild(){
		ModelAndView mv = new ModelAndView("build/buildList");
		return mv;
		
	}
	
	
	@RequestMapping(value="getBuilding")
	@ResponseBody
	public Building getBuilding(@ModelAttribute("building")Building building){
		return this.buildingService.getBuilding(building.getId());
	}
	
	@RequestMapping(value="getAllBuilding")
	@ResponseBody
	public List<Building> getAllBuilding(){
		return this.buildingService.findAllBuildings();
	}
	
	@RequestMapping(value="getBuildingList")
	@ResponseBody
	public List<Building> getBuildingList(@ModelAttribute("buildQuery") BuildQuery buildQuery){
//		LOG.info("print list_______________"+buildQuery.getSelection()+">>>>>>>>>>>>>>>>"+this.buildingService.buildList(buildQuery).size());
		return this.buildingService.buildList(buildQuery);
	}
	
	@RequestMapping(value="pagination")
	@ResponseBody
	public Pagination getBuildPages(@ModelAttribute("queryForm") BuildQuery queryForm){
		Long count = this.buildingService.buildPages(queryForm);
		commonService.setPages(queryForm, count);
		return queryForm;
	}
	
	@RequestMapping(value="addBuild")
	@ResponseBody
	public Result addBuild(@ModelAttribute("build") Building build){
		return this.buildingService.addBuild(build);
	}
	
	@RequestMapping(value="delBuild")
	@ResponseBody
	public Result delBuild(@RequestParam(value="buildId") int buildId){
		return this.buildingService.delBuild(buildId);
	}
	
	@RequestMapping(value="updateBuild")
	@ResponseBody
	public Result update(@ModelAttribute("build")Building build){
//		System.out.println(build.getName());
		return this.buildingService.updateBuild(build);
	}
}
