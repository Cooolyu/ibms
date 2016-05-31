package com.gmsz.om.web.dictionary.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Dictionary;
import com.gmsz.om.web.dictionary.service.DictionaryService;

@Controller
@RequestMapping(value="dictionary")
public class DictionaryController {
	
	@Resource
	private DictionaryService dictionaryService;
	
	
	@RequestMapping(value="show")
	public ModelAndView show(){
		ModelAndView mv = new ModelAndView("dictionary/dictionary");
		return mv;
	}
	
	@RequestMapping(value="insertPdict")
	public void insertPdict(Dictionary dictionary){
		this.dictionaryService.insertPdict(dictionary);
	}

	@RequestMapping(value="insertCdict")
	public void insertCdict(Dictionary dictionary){
		this.dictionaryService.insertCdict(dictionary);
	}
	
	@RequestMapping(value="updateCdict")
	public void updateCdict(Dictionary dictionary){
		this.dictionaryService.updateCdict(dictionary);
	}
	
	
	@RequestMapping(value="pdictList")
	@ResponseBody
	public List<Dictionary> pdictList(){
		return this.dictionaryService.pdictList();
	}

	@RequestMapping(value="cdictList")
	@ResponseBody
	public List<Dictionary> cdictList(long pId){
		return this.dictionaryService.cdictList(pId);
	}
}
