package com.gmsz.om.web.main.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONObject;

import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.web.main.constant.MainStateDefine;
import com.gmsz.om.web.main.service.MainService;

@Controller
@RequestMapping(value="main")
public class MainController {
	
	@Resource
	private MainService mainService;
	
	@RequestMapping(value="index")
	public ModelAndView index(HttpServletRequest request){
		ModelAndView mv = new ModelAndView(MainStateDefine.INDEX);
		return mv;
	}
	
	@RequestMapping(value="door")
	@ResponseBody
	public Map<String,Object> getdoorData(){
		return this.mainService.getDoorData();
	}
	
	@RequestMapping(value="camera")
	@ResponseBody
	public  Map<String,Object> getCameraData(){
		return this.mainService.getCameraData();
	}
}
