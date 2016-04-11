package com.gmsz.om.web.assets.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.gmsz.om.common.beans.Assets;
import com.gmsz.om.common.beans.AssetsBrand;
import com.gmsz.om.common.beans.AssetsCategory;
import com.gmsz.om.common.beans.AssetsModel;
import com.gmsz.om.common.beans.Pagination;
import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.beans.SnmpPropertis;
import com.gmsz.om.web.assets.bean.AssetDictionary;
import com.gmsz.om.web.assets.bean.AssetList;
import com.gmsz.om.web.assets.bean.AssetProperties;
import com.gmsz.om.web.assets.bean.AssetQuery;
import com.gmsz.om.web.assets.bean.CusQuery;
import com.gmsz.om.web.assets.service.AssetsService;
import com.gmsz.om.web.common.service.CommonService;

@Controller
@RequestMapping(value="asset")
public class AssetController {
	
	@SuppressWarnings("deprecation")
	private static final Logger LOG = LoggerFactory.getLogger(AssetController.class);
	
	@Autowired
	private AssetsService assetsService;
	
	@Autowired
	private CommonService commonService;
	
	@RequestMapping(value="show")
	public ModelAndView toAsset(){
		ModelAndView mv = new ModelAndView("asset/assetList");
		return mv;
	}
	
	@RequestMapping(value = "assetList")
	@ResponseBody
	public List<AssetList> assetList(@ModelAttribute("assetQuery") AssetQuery assetQuery){
		List<AssetList> list = this.assetsService.assetList(assetQuery);
		return list;
	}
	
	@RequestMapping(value = "pagination")
	@ResponseBody
	public Pagination getAssetPages(@ModelAttribute("assetQuery") AssetQuery assetQuery){
		Long pages = this.assetsService.getAssetPages(assetQuery);
		commonService.setPages(assetQuery, pages);
		return assetQuery;
	}
	
	@RequestMapping(value = "getAssetBrand")
	@ResponseBody
	public List<AssetsBrand> getAssetBrand(){
		return assetsService.getAssetBrand();
	}
	
	@RequestMapping(value = "getAssetCate")
	@ResponseBody
	public List<AssetsCategory> getAssetCate(){
		return assetsService.getAssetCategory();
	}
	
	@RequestMapping(value = "getAssetModel")
	@ResponseBody
	public List<AssetsModel> getAssetModel(){
		return assetsService.getAssetModel();
	}
	
	@RequestMapping(value = "addAsset")
	@ResponseBody
	public Result addAsset(@ModelAttribute("asset") Assets asset){
		asset.setAddDate(new Date());
		return assetsService.addAsset(asset);
	}
	
	@RequestMapping(value = "assetDetails")
	@ResponseBody
	public AssetList assetDetails(@RequestParam long id){
//		System.out.println(assetsService.assetDetails(id).getPosition());
		return assetsService.assetDetails(id);
	}
	
	@RequestMapping(value = "assetProp")
	@ResponseBody
	public List<AssetProperties> assetProp(@RequestParam long assetId){
//		System.out.println(assetsService.assetProp(assetId).getName()+"---------");
		return assetsService.assetProp(assetId);
	}
	
	@RequestMapping(value = "monitorChild")
	@ResponseBody
	public List<AssetDictionary> monitorChild(){
		return assetsService.monitorChild();
	}
	
	@RequestMapping(value = "propChild")
	@ResponseBody
	public List<AssetDictionary> propChild(){
//		System.out.println("字典名:"+assetsService.propChild().get(0).getName());
		return assetsService.propChild();
	}
	
	@RequestMapping(value = "snmpChild")
	@ResponseBody
	public List<SnmpPropertis> snmpChild(@RequestParam("assetId") long assetId){
		LOG.info(assetsService.snmpChild(assetId).size()+"");
		return assetsService.snmpChild(assetId);
	}
	
	@RequestMapping(value = "assetCustomize")
	@ResponseBody
	public void assetCustomize(@ModelAttribute("cusQuery") CusQuery cusQuery){
		System.out.println(cusQuery.toString());
	}
}