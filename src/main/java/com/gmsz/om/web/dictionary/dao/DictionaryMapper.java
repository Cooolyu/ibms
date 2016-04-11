package com.gmsz.om.web.dictionary.dao;

import com.gmsz.om.common.beans.Dictionary;

public interface DictionaryMapper {
	
	public Dictionary findDictionaryByCode(String code);
}
