package com.gmsz.om.common.utils;

import java.lang.reflect.Field;
import java.util.ResourceBundle;

import com.gmsz.om.common.constant.StateDefine;

public class ConfigProperties {
	
	public void readProperties () {
	      ResourceBundle bundle = ResourceBundle.getBundle("com.gmsz.om.common.utils.config");
	      StateDefine sd = new StateDefine();
	      String service_ip = bundle.getString("service.ip");
	      String service_port = bundle.getString("service.port");
	      setValue("SERVICE_IP", service_ip);
	      setValue("SERVICE_PORT", service_port);
	}
	
	public static void setValue(String name,String value) {
		StateDefine df = new StateDefine();
		try {
			Field f = df.getClass().getDeclaredField(name);
			f.setAccessible(true);
			f.set(df, value);
		} catch (NoSuchFieldException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		}
		
	}
	
	public static void main(String[] args) {
		new ConfigProperties().readProperties();
	}
	
	

}
