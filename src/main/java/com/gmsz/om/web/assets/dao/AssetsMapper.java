package com.gmsz.om.web.assets.dao;

import java.util.List;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsBrand;
import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.SnmpPropertis;
import com.gmsz.om.web.assets.bean.AssetDictionary;
import com.gmsz.om.web.assets.bean.AssetList;
import com.gmsz.om.web.assets.bean.AssetProperties;
import com.gmsz.om.web.assets.bean.AssetQuery;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;

public interface AssetsMapper {

	public List<Long> findAssetsListByForm(AssetsQueryForm queryForm);

	public AssetsResultForm findAssetsInfo(Long id);

	public List<AssetsResultForm> findAssetsInfoList(AssetsQueryForm assetsQueryForm);

	public String getIconPath(AssetsQueryForm queryForm);

	public AssetsModel getModelById(Long id);

	public Long findFirstAssets(AssetsQueryForm queryForm);

	public String findAssetsProp(AssetsQueryForm queryForm);

	public List<AssetList> assetList(AssetQuery assetQuery);

	public long getAssetPages(AssetQuery assetQuery);

	public List<AssetsBrand> getAssetBrand();

	public List<AssetsCategory> getAssetCate();

	public List<AssetsModel> getAssetModel();

	public void addAsset(Assets asset);
	
	public AssetList assetDetails(long id);
	
	//根据id查询资产的属性
	public List<AssetProperties> assetProperties(long assetId);
	//查询监控项下的所有子项
	public List<AssetDictionary> monitorChild();
	//查询属性项下所有的子项
	public List<AssetDictionary> propChild();
	//查询snmp子项
	public List<SnmpPropertis> snmpChild(long assetId);

}
