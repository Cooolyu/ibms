package com.gmsz.om.web.visualization.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.web.visualization.beans.Visual;
import com.gmsz.om.web.visualization.service.VisualService;

@Controller
@RequestMapping(value="visShow")
public class VisShowController {
	
	@Autowired
	private VisualService visualService;
	
	@RequestMapping(value="show")
	public ModelAndView show(){
		ModelAndView mv = new ModelAndView("/visShow/showList");
		return mv;
	}
	
	@RequestMapping(value="airCount")
	@ResponseBody
	public Visual airCount(@RequestParam("sysId") int sysId){
		return visualService.airCount(sysId);
	}

}
