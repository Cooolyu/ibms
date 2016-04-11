/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: InitServlet.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-4-20      |     1.0         | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.init;

import java.sql.Driver;
import java.sql.DriverManager;
import java.util.Enumeration;

import javax.servlet.ServletConfig;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.logicalcobwebs.proxool.ProxoolFacade;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.common.utils.ConfigProperties;


/**
 * Class name:InitServlet
 * Description: 系统启动时初始化
 * @author LuHaosheng
 */
public class InitServlet extends HttpServlet {
	
	private static final long serialVersionUID = -6508795707315478861L;

	private static final Logger sysLogger = Logger.getLogger(StateDefine.SYS_LOG);
	
	private static String contextPath = null;

	private static WebApplicationContext webApplicationContext;

	@Override
	public void init(ServletConfig config) throws ServletException {
		super.init(config);
		
		String prefix = config.getServletContext().getRealPath("/");
		contextPath = prefix;
		// Log4J
		String log4jFile = config.getInitParameter("log4j");
		String log4jConfigPath = prefix + log4jFile;
		PropertyConfigurator.configure(log4jConfigPath);
		sysLogger.info("*** Start init: --Class: InitServlet  --Method: init");
		
		ServletContext context = config.getServletContext();
		InitServlet.webApplicationContext = WebApplicationContextUtils.getWebApplicationContext(context);
		
		new ConfigProperties().readProperties();
//		AssetsTimerSchedule schedule = new AssetsTimerSchedule();
//		schedule.startTimerSchedule();
	}
	
	@Override
	public void destroy() {
		sysLogger.info("*** Start destroy: --Class: InitServlet  --Method: destroy");
		super.destroy();
		
		
		try {
			sysLogger.info("*** Start deregister driver: --Class: InitServlet  --Method: destroy");
	        Enumeration<Driver> drivers = DriverManager.getDrivers();
	        while(drivers.hasMoreElements()) {
	            DriverManager.deregisterDriver(drivers.nextElement());
	        }
	        sysLogger.info("*** End deregister driver: --Class: InitServlet  --Method: destroy");
	    } catch(Throwable ex) {
	    	sysLogger.error("*** Error occurred: ", ex);
	    }
		
		ProxoolFacade.shutdown();
		sysLogger.info("*** End destroy: --Class: InitServlet  --Method: destroy");
	}
	
	public static String getContextPath() {
		return contextPath;
	}
	
	public static WebApplicationContext getWebApplicationContext() {
		return webApplicationContext;
	}
	
}
