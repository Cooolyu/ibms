/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2013
 * FileName: ValidateService.java
 * Modify record:
 * NO. |     Date       |    Version      |      Name         |      Content
 * 1   | 2013-4-27        |      1.0        |  GMSZ)LuHaosheng  | original version
 *******************************************************************************
 */
package com.gmsz.om.web.common.validate;

import com.gmsz.om.common.beans.Result;
import com.gmsz.om.common.exception.NoPermissionException;
import com.gmsz.om.common.exception.ParameterErrorException;

/**
 * Class name:ValidateService
 * Description: please write your description
 * @author LuHaosheng
 */
public abstract class ValidateService<T> {

	@SuppressWarnings("unchecked")
	public void permission(T... t) throws NoPermissionException {
		if (!this.dovalidate(t).isResultValue()) {
			throw new NoPermissionException();
		}
	}
	
	@SuppressWarnings("unchecked")
	public void validate(T... t) throws ParameterErrorException {
		Result result = this.dovalidate(t);
		if (!result.isResultValue()) {
			throw new ParameterErrorException(result.getMessage());
		}
	}
	
	@SuppressWarnings("unchecked")
	protected abstract Result dovalidate(T...t);
}
