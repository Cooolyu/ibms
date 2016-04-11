package com.gmsz.om.web.camera.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Dictionary;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.dictionary.dao.DictionaryMapper;

@Component
public class CameraServiceImp implements CameraService {

	@Resource 
	private AssetsService assetsService;
	
	@Resource
	private DictionaryMapper dictionaryMapper;
	
	@Override
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm) {
		assetsQueryForm.setCategoryId(3L);
		//查找监控项
		Dictionary dic = this.dictionaryMapper.findDictionaryByCode("status");
		assetsQueryForm.setDictionaryId(dic.getId());
		List<AssetsResultForm> resList = this.assetsService.findAssetsInfoList(assetsQueryForm);	
		return resList;
	}

	@Override
	public String getParam(AssetsQueryForm queryForm) {
		Dictionary dic = this.dictionaryMapper.findDictionaryByCode("cameraCode");
		queryForm.setDictionaryId(dic.getId());
		return this.assetsService.findAssetsProp(queryForm);
	}
	
	
}
