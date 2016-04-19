package com.gmsz.om.web.assets.service;

import java.util.List;

import com.gmsz.om.common.beans.AssetLocation;
import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsBrand;
import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.SnmpPropertis;
import com.gmsz.om.web.assets.bean.AssetCusQuery;
import com.gmsz.om.web.assets.bean.AssetDictionary;
import com.gmsz.om.web.assets.bean.AssetList;
import com.gmsz.om.web.assets.bean.AssetProperties;
import com.gmsz.om.web.assets.bean.AssetQuery;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;

public interface AssetsService {

	public List<Long> findAssetsList(AssetsQueryForm queryForm);

	public AssetsResultForm findAssetsInfo(Long id);

	public List<AssetsResultForm> findAssetsInfoList(AssetsQueryForm assetsQueryForm);

	public String getIconPath(AssetsQueryForm queryForm);

	public AssetsModel getModelById(Long id);

	public Long findFirstAssets(AssetsQueryForm queryForm);

	public String findAssetsProp(AssetsQueryForm queryForm);

	// ⬇️资产管理️
	public List<AssetList> assetList(AssetQuery assetQuery);

	public long getAssetPages(AssetQuery assetQuery);

	public List<AssetsBrand> getAssetBrand();

	public List<AssetsCategory> getAssetCategory();

	public List<AssetsModel> getAssetModel();

	public Result addAsset(Assets asset);
	
	public AssetList assetDetails(long id);
	
	public List<AssetProperties> assetProp(long assetId);
	
	public List<AssetDictionary> propChild();
	
	public List<AssetDictionary> monitorChild();
	
	public List<SnmpPropertis> snmpChild(long assetId);
	
	public void addAssetLocation(AssetLocation location);
	public int selectByName(Assets assets);
	public Assets selectAByName(Assets assets);
	
	public Result delAsset(long assetId);
	public List<Assets> getParameter(long assetId);
	
	public void addDictionary(Assets assets);
	public void delLocation(long assetId);
	public void delDictionary(long assetId);
	
	public Result uiAssetCus (AssetCusQuery assetCusQuery);
}
