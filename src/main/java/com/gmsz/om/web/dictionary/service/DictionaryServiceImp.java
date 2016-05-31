package com.gmsz.om.web.dictionary.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Dictionary;
import com.gmsz.om.web.dictionary.dao.DictionaryMapper;

@Component
public class DictionaryServiceImp implements DictionaryService{
	
	@Resource
	private DictionaryMapper dictionaryMapper;

	@Override
	public void insertPdict(Dictionary dictionary) {
		this.dictionaryMapper.insertPdict(dictionary);
	}

	@Override
	public void insertCdict(Dictionary dictionary) {
		this.dictionaryMapper.insertCdict(dictionary);
	}

	@Override
	public void updateCdict(Dictionary dictionary) {
		this.dictionaryMapper.updateCdict(dictionary);
	}

	@Override
	public List<Dictionary> pdictList() {
		return this.dictionaryMapper.pdictList();
	}

	@Override
	public List<Dictionary> cdictList(long pId) {
		return this.dictionaryMapper.cdictList(pId);
	}

}
