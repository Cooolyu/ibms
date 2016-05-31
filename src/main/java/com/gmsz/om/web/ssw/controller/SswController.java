package com.gmsz.om.web.ssw.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

/** 
 * @author Jackyu
 * 给水排水
 */
@Controller
@RequestMapping(value="ssw")
public class SswController {

	@RequestMapping(value="show")
	public ModelAndView show(){
		ModelAndView mv = new ModelAndView("/ssw/sswShow");
		//添加sysModuleId
		mv.addObject("sysModuleId", "6");
		return mv; 
	}
}
