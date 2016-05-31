package com.gmsz.om.web.assets.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.gmsz.om.common.beans.AssetLocation;
import com.gmsz.om.common.beans.AssetProp;
import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsBrand;
import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.SnmpPropertis;
import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.web.assets.bean.AssetCusQuery;
import com.gmsz.om.web.assets.bean.AssetDicIdAndName;
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

	//添加事务，出异常回滚
	@Transactional(rollbackFor=Exception.class)
	public Result addAsset(Assets asset) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
//		AssetQuery assetQuery = new AssetQuery();
//		assetQuery.setSerialNum(asset.getSerialNumber());
		System.out.println(this.selectByName(asset) + "-----" + asset.getFloorId());
		if (this.selectByName(asset) > 0) {
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			result.setMessage("该名称已存在");
			return result;
		}else {
			this.assetsMapper.addAsset(asset);
//			asset.setId(this.selectAByName(asset).getId());
//			this.addDictionary(asset);
			AssetLocation assetLocation = new AssetLocation();
			assetLocation.setAssetId(this.selectAByName(asset).getId());
			assetLocation.setLocationX("0");
			assetLocation.setLocationY("0");
			this.addAssetLocation(assetLocation);
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

	@Override
	public void addAssetLocation(AssetLocation location) {
		this.assetsMapper.addLocation(location);
	}

	@Override
	public int selectByName(Assets assets) {
		return this.assetsMapper.selectByName(assets);
	}

	@Override
	public Assets selectAByName(Assets assets) {
		return this.assetsMapper.selectAByName(assets);
	}

	@Override
	@Transactional(rollbackFor=Exception.class)
	public Result delAsset(long assetId) {
		Result result = new Result(StateDefine.FLAG_SUCCESS , true);
		try {
			this.assetsMapper.delAsset(assetId);
			this.delLocation(assetId);
//			this.delDictionary(assetId);
			return result;  
		} catch (Exception e) {
			result.setMessage("删除失败");
			result.setResultId(StateDefine.FLAG_FAIL_ERROR);
			result.setResultValue(false);
			return result;
		}
	}

	@Override
	public List<Assets> getParameter(long assetId) {
		return this.assetsMapper.getParameter(assetId);
	}

	@Override
	public void addDictionary(Assets assets) {
		this.assetsMapper.addDictionary(assets);
	}

	@Override
	public void delLocation(long assetId) {
		this.assetsMapper.delLocation(assetId);
	}

	@Override
	public void delDictionary(long assetId) {
		this.assetsMapper.delDictionary(assetId);
	}

	@Override
	@Transactional(rollbackFor=Exception.class)
	public Result uiAssetCus(AssetCusQuery assetCusQuery) {
		Result result = new Result(StateDefine.FLAG_SUCCESS ,true);
		for(int i=0;i<assetCusQuery.getAssetProps().size();i++){
			//更新资产属性项
			if(assetCusQuery.getAssetProps().get(i).getId() != 0){
				this.assetsMapper.updateAssetProp(assetCusQuery.getAssetProps().get(i));
				this.assetsMapper.updateOpcmap(assetCusQuery.getAssetProps().get(i));
			}else{
				this.assetsMapper.insertAssetProp(assetCusQuery.getAssetProps().get(i));
				this.assetsMapper.insertOpcmap(assetCusQuery.getAssetProps().get(i));
			}
		}
		return result;
	}

	@Override
	public List<AssetDicIdAndName> dictionaryIdAndName(long assetId) {
		return this.assetsMapper.dictionaryIdAndName(assetId);
	}

	@Override
	public Assets findAssetById(long assetId) {
		return this.assetsMapper.findAssetById(assetId);
	}

	@Override
	public Result modifyAsset(Assets assets) {
		Result result = new Result(StateDefine.FLAG_SUCCESS,true);
		this.assetsMapper.modifyAsset(assets);
		return result;
	}


}
