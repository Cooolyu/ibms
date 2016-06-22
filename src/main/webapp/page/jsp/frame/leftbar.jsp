<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<button class="lay-left-up main_up" onclick="leftbar.showUp()"></button>
<div class="lay-left-bar">



	<%-- <div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='alarm'}"> com-active</c:if>" href="<%=actionPath %>/alarm/show/${param.buildId}?floorId=${param.floorId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='alarmlist'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='alarmlist'}">icon_off_04.png
			</c:if>" />
		<span class="lay-left-menu-text">报警系统</span></a>
		
	</div>

		<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='door'}"> com-active</c:if>" href="<%=actionPath %>/door/show/${param.buildId}?floorId=${param.floorId}">
			<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='overview'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='overview'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">门禁系统</span></a>
		
	</div>


		<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='camera'}"> com-active</c:if>" href="<%=actionPath %>/camera/show/${param.buildId}?floorId=${param.floorId}">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='overview'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='overview'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">监控系统</span></a>
		
	</div> --%>
	
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.subMenu=='visShow'}"> com-active</c:if>" href="<%=actionPath %>/visShow/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.subMenu=='visShow'}">icon_on_06.png
			</c:if>
			<c:if
				test="${param.subMenu!='visShow'}">icon_off_06.png
			</c:if>" />
			<span class="lay-left-menu-text">数据可视化</span></a>
		
	</div>
	
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.subMenu=='airCdtShow'}"> com-active</c:if>" href="<%=actionPath %>/airCdt/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='airCdtShow'}">icon_off_02.png
			</c:if>
			<c:if
				test="${param.module!='airCdtShow'}">icon_off_02.png
			</c:if>" />
			<span class="lay-left-menu-text">设备信息</span></a>
		
	</div>
	
	<div class="lay-left-item">
		<a class="lay-left-menu <c:if test="${param.subMenu=='building'}"> com-active</c:if>" href="<%=actionPath %>/building/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.subMenu=='building'}">icon_on_09.png
			</c:if>
			<c:if
				test="${param.subMenu!='building'}">icon_off_09.png
			</c:if>" />
			<span class="lay-left-menu-text">配置管理</span></a>
		
	</div>
	

	
	<%-- <div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='airCdtShow'}"> com-active</c:if>" href="<%=actionPath %>/airCdt/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='airCdtShow'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='airCdtShow'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">暖通空调</span></a>
		
	</div>
	
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='sswShow'}"> com-active</c:if>" href="<%=actionPath %>/ssw/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='sswShow'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='sswShow'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">给水排水</span></a>
		
	</div>
	
	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='tadShow'}"> com-active</c:if>" href="<%=actionPath %>/tad/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='tadShow'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='tadShow'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">变配电</span></a>
		
	</div> --%>
	
	
	
	
	
	
<%-- 	<div class="lay-left-item">
		<a class="lay-left-menu<c:if test="${param.module=='dictionary'}"> com-active</c:if>" href="<%=actionPath %>/dictionary/show">
				<img class="lay-left-menu-img" src="<%=pagePath%>/css/image/
			<c:if
				test="${param.module=='dictionary'}">icon_on_04.png
			</c:if>
			<c:if
				test="${param.module!='dictionary'}">icon_off_04.png
			</c:if>" />
			<span class="lay-left-menu-text">设置</span></a>
		
	</div> --%>	
	
</div>
<button class="lay-left-down main_down" onclick="leftbar.showDown()"></button>
<script type="text/javascript">

</script>
<script type="text/javascript" src="<%=pagePath%>/js/frame/leftbar.js"></script>