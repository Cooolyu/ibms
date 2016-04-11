package com.gmsz.om.web.camera.service;

import java.util.List;

import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;

public interface CameraService {
	
	public List<AssetsResultForm> findInfoList(AssetsQueryForm assetsQueryForm);
	
	public String getParam(AssetsQueryForm queryForm);
	
}
