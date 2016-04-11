var assetListModule = angular.module('assetListModule', ['paginationService', 'anajaxService']);
assetListModule.controller('assetListController', function($scope, $http, pagination, anajax) {
	var assetQuery = {};
	assetQuery.serialNum = '';
	assetQuery.assetName = '';
	$scope.assetQuery = assetQuery;
	
	
	/**
	 * 查询楼栋列表
	 */
	var query = function(params) {
		var url = commonutil.actionPath + "/asset/assetList";
		anajax.doajax(url, params, function(data) {
			$scope.assets = data;
		});
	}
	

	
	/**
	 * 查询页码
	 */
	var page = function(params) {
		var purl = commonutil.actionPath + '/asset/pagination';
		anajax.doajax(purl, params, function(data) {
			pagination.setData(data);
			$scope.pagination = data;
		});
	};
	
	/**
	 * 上一页
	 */
	$scope.lastPage = function() {
		pagination.lastPage();
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 下一页
	 */
	$scope.nextPage = function() {
		pagination.nextPage();
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 跳转到指定页
	 */
	$scope.goPage = function(selNum) {
		pagination.goPage(selNum);
		query($scope.pagination);
		page($scope.pagination);
	};
	
	/**
	 * 展开修改页
	 */
	$scope.modifyBuild = {};
	$scope.goChange = function(index) {
		$scope.rightPart = 'modify';
		pageutil.showRightBarAn('楼栋管理');
		var modifyBuild = $scope.builds[index];
		angular.copy(modifyBuild, $scope.modifyBuild);
	};
	
	/**
	 * 展开添加页
	 */
	$scope.goAdd = function(index) {
		$scope.rightPart = 'add';
//		$scope.showRightBar = true;
		pageutil.showRightBarAn('资产录入');
		$scope.assetBrand = $scope.assetBrands[0];
		$scope.assetCate = $scope.assetCates[0];
		$scope.assetStatuss = [{id:1,name:"报废"},{id:2,name:"使用中"},{id:3,name:"备用"},{id:4,name:"维护中"}]
		$scope.assetStatus = $scope.assetStatuss[0];
		$scope.assetModel = $scope.assetModels[0];
	
	};
	
	/**
	 * 查询下拉框的值
	 */
	var selectValue = function(params) {
		var purl = commonutil.actionPath + '/asset/getAssetBrand';
		anajax.doajax(purl,params,function(data) {
			$scope.assetBrands = data;
		});
		purl = commonutil.actionPath + '/asset/getAssetCate';
		anajax.doajax(purl,params,function(data) {
			$scope.assetCates = data;
		});
		purl = commonutil.actionPath + '/asset/getAssetModel';
		anajax.doajax(purl,params,function(data) {
			$scope.assetModels = data;
		});
	}
	
	
	/**
	 * 添加页
	 */
	$scope.addAsset = {}
	$scope.doAdd = function($valid) {
		if ($scope.addAsset.name == null || $scope.addAsset.serialNumber == null || $scope.addAsset.number == null) {
			alert("必填选项不能为空！！")
			return;
		}
		var addAsset = {};
		addAsset.serialNumber = $scope.addAsset.serialNumber;
		addAsset.name = $scope.addAsset.name;
		addAsset.categoryId = $scope.assetCate.id;
		addAsset.brandId = $scope.assetBrand.id;
		addAsset.model = $scope.assetModel.id;
		addAsset.number = $scope.addAsset.number;
		addAsset.unit = $scope.addAsset.unit;
		addAsset.position = $scope.addAsset.position;
		addAsset.status = $scope.assetStatus.id;
		addAsset.lifeEndDate = $scope.addAsset.lifeEndDate;
//		alert(addAsset.lifeEndDate)
//		return;
		addAsset.memo = $scope.addAsset.memo;
		var purl = commonutil.actionPath + '/asset/addAsset';
		anajax.doajax(purl,addAsset,function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('修改成功');
				pageutil.hideRightBar();
				query(assetQuery);
			} else {
				alert(data.message);
			}
		});
	};
	
	/**
	 * 详情页
	 */
	$scope.assetDetails = {};
	$scope.goDetails = function(index) {
		$scope.rightPart = 'details';
//		$scope.showRightBar = true;
		pageutil.showRightBarAn('资产详情');
		var url = commonutil.actionPath + '/asset/assetDetails';
		anajax.doajax(url, {'id':$scope.assets[index].id}, function(data) {
			$scope.assetDetails = data;
		});
	}
/**---------------------------------------------------------资产自定义页----------------------------------------------**/
	/**
	 * 前往资产自定义页
	 */
	$scope.goCustomize = function (index , params) {

		$scope.rightPart = 'customize';
		pageutil.showRightBarAn('资产自定义')
		
		//获取资产自身的属性列表
		var purl = commonutil.actionPath + '/asset/assetProp';
		anajax.doajax(purl,{'assetId':$scope.assets[index].id},function(data) {
			$scope.assetProps = data;
		});
		
		//获取属性的列表
		purl = commonutil.actionPath + '/asset/propChild';
		anajax.doajax(purl,params,function(data) {
			$scope.propChilds = data;
			$scope.propChild = propAdd($scope.propChilds);
		});
		
		
		//获取监控项的列表
		purl = commonutil.actionPath + '/asset/monitorChild';
		anajax.doajax(purl,params,function(data) {
			$scope.monitorChilds = data;
			$scope.monitorChilds = addValMonitor($scope.monitorChilds);
		});	
		//获取snmp列表
		purl = commonutil.actionPath + '/asset/snmpChild';
		anajax.doajax(purl,{'assetId':$scope.assets[index].id},function(data) {
			$scope.snmpChilds = data;
			if ($scope.snmpChilds.length > 0) {
				$scope.show = true;
			}else {
				$scope.show = false;
			}
		});	
	
		
	}
	
	//添加资产属性
	$scope.addPropChild = function() {
		if ($scope.propChild.id == 0) {
			return;	
		}
		for(var i=0; i<$scope.assetProps.length; i++){
			if($scope.assetProps[i].name == $scope.propChild.name){
				alert("已添加，请重新选择")
				return;
			}
		}
		var assetProp = {assetsId:'',code:'',dictionaryId:$scope.propChild.id,id:'',name:$scope.propChild.name,orderNum:'',parentId:'',value:""};
		$scope.assetProps.push(assetProp);
	}
	
	//添加属性下拉框的值
	var propAdd = function(propList) {
		var prop = {id:0,name:"-----请选择------",code:'',parentId:'',orderNum:''};
		propList.unshift(prop)
		return propList[0];
	}
	
	//监控属性添加checked值；
	var addValMonitor = function(monitorChilds) {
		var monitorChild = "";
		for(var i=0; i<monitorChilds; i++){
			monitorChild.id = monitorChilds[i].id;
			monitorChild.name = monitorChilds[i].name;
			monitorChild.code = monitorChilds[i].code;
			monitorChild.parentId = monitorChilds[i].parentId;
			monitorChild.orderNum = monitorChilds[i].orderNum;
			monitorChild.checked = 'false';
			monitorChilds[i] = monitorChild;
		}
		return monitorChilds;
	}
	
	//复选框只能选中一个
    $scope.updateSelection = function(position, monitorChilds) {
        angular.forEach(monitorChilds, function(monitorChild, index) {
          if (position != index) 
        	  monitorChild.checked = false;
        });
        $scope.temp = "";
        $scope.temp = monitorChilds[position].id;
      }
    //snmp添加事件
    $scope.addSnmp = function() {
    	var snmpChild = {id:'',code:'',oid:'',ext:'',assetsId:'',status:'1'}
    	$scope.snmpChilds.push(snmpChild);
	}
   
    //资产自定义项提交事件
	$scope.doCustomize = function($vaild) {
		var cusQuery = {};
		alert($scope.monitorChilds)
//		var purl = commonutil.actionPath + '/asset/assetCustomize';
//		anajax.doajax(purl,cusQuery,function(data) {
//			alert("success")
//		});
	}
	
/**---------------------------------------------------------资产修改页---------------------------------------------------**/
    
	/**
	 * 修改页
	 */
	$scope.doChange = function($vaild){
		if($scope.modifyBuild.name == null || $scope.modifyBuild.name == ""){
			alert('楼栋名不能为空');			
		}else{
			//修改备注
			if($scope.modifyBuild.name == $scope.build.name){
				checkModifyName($scope.modifyBuild.name);
			}else{
				//修改楼名
				var url = commonutil.actionPath + "/building/getBuildingList";
				var select = {};
				select.selection = $scope.modifyBuild.name;
				anajax.doajax(url, select , function(data) {
					$scope.builds2 = data;
					if($scope.builds2.length >= 1){
						alert("该楼栋已经存在")
						$scope.builds2 = null;
					}else{
						checkModifyName($scope.modifyBuild.name);
					}
				});
				
			}		
		}
	}
	
	
	/**
	 * 验证修改的楼栋名
	 */
	var checkModifyName = function(buildname){
		$scope.modifyBuild.id = $scope.build.id;
		var url = commonutil.actionPath + '/building/updateBuild';
		anajax.doajax(url, $scope.modifyBuild, function(data) {
			if (data.resultValue == true) {
				pageutil.showTip('修改成功');
				pageutil.hideRightBar();
				query(buildQuery);
			} else {
				alert(data.message);
			}
		});
	}
	
	/**
	 * 验证楼名
	 */
	var checkBuildName = function(buildName) {
		var flag = true;
		if (buildName.length == 0) {
			alert('楼名不可为空!');
			flag = false;
		}
		return flag;
	};
	
	/**
	 * 执行删除操作
	 */
	$scope.doDel = function(index){
		if (confirm('您确定要删除吗?删除后将不可恢复!')) {
			var url = commonutil.actionPath + '/building/delBuild';
			anajax.doajax(url, {'buildId':$scope.builds[index].id}, function(data) {
				if (data.resultValue == true) {
					pageutil.showTip('删除楼宇成功');
					query(buildQuery);
				    page(buildQuery);
				} else {
					alert(data.message);
				}
			});
		}
	}
	
	
	query();
	page();
	selectValue();
	
	
	
	$scope.doQuery = function() {
		query(assetQuery);
	    page(assetQuery);
	}
   

	
});




//筛选
assetListModule.filter('status',function(){
	return function (input) {
		switch (input) {
		case 1:
			return '报废';
			break;
		case 2:
			return '使用中';
		case 3:
			return '备用';
		case 4:
			return '维护中';
		default:
			break;
		}
	}
});
//判断输入框是否为空
assetListModule.filter('isNone',function(){
	return function (input) {
		if(input==null || input=="" )
			return "无";
		else
			return input;
	}
});

