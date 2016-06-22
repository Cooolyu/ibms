package com.gmsz.om.web.tad.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * @author Jackyu
 * 供配电
 */
@Controller
@RequestMapping(value="tad")
public class TadController {

	@RequestMapping(value="show")
	public ModelAndView show(){
		ModelAndView mv = new ModelAndView("/tad/tadShow");
		//添加sysModuleId
		mv.addObject("sysModuleId", "7");
		return mv; 
	}
}
