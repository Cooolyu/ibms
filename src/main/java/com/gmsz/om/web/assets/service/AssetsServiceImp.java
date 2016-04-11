package com.gmsz.om.web.assets.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsBrand;
import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.SnmpPropertis;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.assets.bean.AssetDictionary;
import com.gmsz.om.web.assets.bean.AssetList;
import com.gmsz.om.web.assets.bean.AssetProperties;
import com.gmsz.om.web.assets.bean.AssetQuery;
import com.gmsz.om.web.assets.bean.AssetsQueryForm;
import com.gmsz.om.web.assets.bean.AssetsResultForm;
import com.gmsz.om.web.assets.dao.AssetsMapper;

@Component
public class AssetsServiceImp implements AssetsService {

	@Resource
	private AssetsMapper assetsMapper;
	
	@Override
	public List<Long> findAssetsList(AssetsQueryForm queryForm) {	
		return this.assetsMapper.findAssetsListByForm(queryForm);
	}

	@Override
	public AssetsResultForm findAssetsInfo(Long id) {
		return this.assetsMapper.findAssetsInfo(id);
	}

	@Override
	public List<AssetsResultForm> findAssetsInfoList(AssetsQueryForm queryForm) {
		return this.assetsMapper.findAssetsInfoList(queryForm);
	}

	@Override
	public String getIconPath(AssetsQueryForm queryForm) {
		return this.assetsMapper.getIconPath(queryForm);
	}

	@Override
	public AssetsModel getModelById(Long id) {
		return this.assetsMapper.getModelById(id);
	}

	@Override
	public Long findFirstAssets(AssetsQueryForm queryForm) {		
		return this.assetsMapper.findFirstAssets(queryForm);
	}

	@Override
	public String findAssetsProp(AssetsQueryForm queryForm) {
		return this.assetsMapper.findAssetsProp(queryForm);
	}

	@Override
	public List<AssetList> assetList(AssetQuery assetQuery) {
		return this.assetsMapper.assetList(assetQuery);
	}

	@Override
	public long getAssetPages(AssetQuery assetQuery) {
		return this.assetsMapper.getAssetPages(assetQuery);
	}

	@Override
	public List<AssetsBrand> getAssetBrand() {
		return this.assetsMapper.getAssetBrand();
	}

	@Override
	public List<AssetsCategory> getAssetCategory() {
		return this.assetsMapper.getAssetCate();
	}

	@Override
	public List<AssetsModel> getAssetModel() {
		return this.assetsMapper.getAssetModel();
	}

	@Override
	public Result addAsset(Assets asset) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		AssetQuery assetQuery = new AssetQuery();
		assetQuery.setSerialNum(asset.getSerialNumber());
		System.out.println(this.assetsMapper.getAssetPages(assetQuery));
		if (this.assetsMapper.getAssetPages(assetQuery) > 0) {
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该编号已存在");
			return result;
		}else {
			this.assetsMapper.addAsset(asset);
			return result;
		}
	}

	@Override
	public AssetList assetDetails(long id) {
		return this.assetsMapper.assetDetails(id);
	}

	@Override
	public List<AssetProperties> assetProp(long assetId) {
		return this.assetsMapper.assetProperties(assetId);
	}

	@Override
	public List<AssetDictionary> propChild() {
		return this.assetsMapper.propChild();
	}

	@Override
	public List<AssetDictionary> monitorChild() {
		return this.assetsMapper.monitorChild();
	}

	@Override
	public List<SnmpPropertis> snmpChild(long assetId) {
		return this.assetsMapper.snmpChild(assetId);
	}

}
