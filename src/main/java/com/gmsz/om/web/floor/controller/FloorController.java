package com.gmsz.om.web.floor.controller;

import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.Floor;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.common.utils.FileSave;
import com.gmsz.om.web.building.service.BuildingService;
import com.gmsz.om.web.common.service.CommonService;
import com.gmsz.om.web.floor.bean.FloorQuery;
import com.gmsz.om.web.floor.service.FloorService;

@Controller
@RequestMapping(value = "floor")
public class FloorController {

	@Resource
	private FloorService floorService;
	
	@Resource
	private BuildingService buildService;
	
	@Resource
	private CommonService commonService;
	
//	@RequestMapping(value="findFloors")
//	@ResponseBody
//	public List<Floor> findFloorList(@RequestParam("buildId")Long buildId) {
//		return this.findFloorList(buildId);
//	}
	
	@RequestMapping(value="/show/{buildId}")
	public ModelAndView show (@PathVariable long buildId){
//		System.out.println("前台正在调用"+buildId);
		ModelAndView mv = new ModelAndView("floor/floorList");
		mv.addObject("buildName", this.buildService.getBuilding(buildId).getName());
		mv.addObject("id", buildId);
//		System.out.println("~~~~"+this.floorService.findFloorByBuildId(buildId).size());
		return mv;
	}
	
	@RequestMapping(value = "/getFloorList")
	@ResponseBody
	public List<Floor> getFloorList (@ModelAttribute(value="floorQuery") FloorQuery floorQuery){
		System.out.println("----------------"+floorQuery.getBuildId());
		return this.floorService.findFloorByBuildId(floorQuery);
	}
	
	@RequestMapping(value = "floorPages")
	@ResponseBody
	public Pagination floorPages (@ModelAttribute(value="floorQuery") FloorQuery floorQuery){
		Long count = this.floorService.floorPages(floorQuery);
		commonService.setPages(floorQuery, count);
		return floorQuery;
	}
	
	@RequestMapping(value="delFloor")
	@ResponseBody
	public Result delFloorByFloorId (@RequestParam(value="floorId") long floorId){
		return this.floorService.delFloorByFloorId(floorId);
	}
	
	@RequestMapping(value="addFloor")
	@ResponseBody
	public Result addFloor (@ModelAttribute(value="floor") Floor floor){
		floor.setStatus(1L);
		System.out.println(floor.getName()+floor.getBuildingId()+"-------");
		return this.floorService.addFloor(floor);
	}
	
	@RequestMapping(value="modifyFloor")
	@ResponseBody
	public Result modifyFloor(
			@RequestParam(value="file",required=false)MultipartFile image,
			@RequestParam(value="id")long id,
			@RequestParam(value="buildingId")long buildingId,
			@RequestParam(value="floorName")String floorName,
			@RequestParam(value="modifyFloorName")String modifyFloorName,
			HttpServletRequest request ){
		String url = request.getSession().getServletContext().getRealPath("");
		Floor floor = new Floor();
		floor.setId(id);
		floor.setBuildingId(buildingId);
		// 获得原始文件名  
        String fileName = image.getOriginalFilename();
        if(fileName != null && fileName != "")
        floor.setImgUrl("images/"+fileName);
		if(floorName.equals(modifyFloorName) ){
			FileSave.saveFile(image, url);
			return floorService.modifyFloor(floor);
		}else{
			floor.setName(modifyFloorName);
			Result result = floorService.modifyFloor(floor);
			System.out.println(result.getResultId());
			if(result.getResultId() == StateDefine.FLAG_FAIL_ERROR){
				return result;
			}else {
				FileSave.saveFile(image, url);
				return result;
			}
		}
	}
	
	@RequestMapping(value = "selAssetCate")
	@ResponseBody
	public List<AssetsCategory> selAssetCate(){
		return this.floorService.selAssetCate();
	}
	
	@RequestMapping(value = "floorListDueSys")
	@ResponseBody
	public List<Floor> floorListDueSys(@ModelAttribute("floorQuery") FloorQuery floorQuery){
		return this.floorService.floorListDueSys(floorQuery);
	}
	
}