package com.gmsz.om.web.visualization.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping(value="visShow")
public class VisShowController {
	
	@RequestMapping(value="show")
	public ModelAndView show(){
		ModelAndView mv = new ModelAndView("/visShow/showList");
		return mv;
	}

}
