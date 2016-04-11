<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/page/jsp/common/commonvariable.jsp"%>
<input type="hidden" id="start" name="start" value="${pagination.start}"/>
<input type="hidden" id="count" name="count" value="${pagination.count}"/>
<input type="hidden" id="currentPage" name="currentPage" value="${pagination.currentPage}"/>
<input type="hidden" id="pages" value="${pagination.pages}"/>
<div class="text-center" id="pagination">
<c:if test="${pagination.pages == null || pagination.pages == 0 }">
	没有符合条件的内容
</c:if>
<c:if test="${pagination.pages > 0}">
	<ul class="pagination">
		<li <c:if test="${pagination.currentPage==1}">class="disabled"</c:if>><a href="javascript:void(0);" onclick="pagination.lastPage();">&laquo;</a></li>
		<c:forEach var="j" begin="${pagination.currentPage > 5 ? pagination.currentPage-5 : 1}" end="${pagination.currentPage + 5 <pagination.pages ? pagination.currentPage + 5 : pagination.pages}" step="1">
		<li <c:if test="${pagination.currentPage==j}">class="active"</c:if>><a href="javascript:void(0);" onclick="pagination.gotoPage(${j})">${j}</a></li>
		</c:forEach>
		<li <c:if test="${pagination.currentPage==pagination.pages}">class="disabled"</c:if>><a href="javascript:void(0);" onclick="pagination.nextPage();">&raquo;</a></li>
	</ul>
</c:if>
</div>
<script type="text/javascript">
var pagination = pagination || {};

pagination.setDefault = function() {
	$('#start').val(0);
	$('#count').val(30);
	$('#currentPage').val(1);
};

pagination.nextPage = function() {
	
	if (-$('#pages').val() >= -$('#currentPage').val()) return;
	
	$('#start').val(-(-$('#start').val()-$('#count').val()));
	$('#currentPage').val(-(-1-$('#currentPage').val()));
	
	$("#pagination").parent("form").submit();
	//$('#userQueryForm').submit();
};

pagination.lastPage = function() {
	if ($('#currentPage').val() == 1) return;
	
	$('#start').val($('#start').val()-$('#count').val());
	$('#currentPage').val($('#currentPage').val()-1);
	$("#pagination").parent("form").submit();
	//$('#userQueryForm').submit();
};

pagination.gotoPage = function(page) {
	if (page == $('#currentPage').val()) return;
	
	$('#start').val((page-1) * $('#count').val());
	$('#currentPage').val(page);
	$("#pagination").parent("form").submit();
	//$('#userQueryForm').submit();
};
</script>