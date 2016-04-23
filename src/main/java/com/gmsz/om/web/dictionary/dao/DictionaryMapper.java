package com.gmsz.om.web.dictionary.dao;

import java.util.List;

import com.gmsz.om.common.beans.Dictionary;

public interface DictionaryMapper {
	
	public Dictionary findDictionaryByCode(String code);
	
	//添加父字典
	void insertPdict(Dictionary dictionary);
	//添加子字典
	void insertCdict(Dictionary dictionary);
	//修改子字典
	void updateCdict(Dictionary dictionary);
	//获取父资产
	List<Dictionary> pdictList();
	//获取子资产
	List<Dictionary> cdictList(long pId);
}
