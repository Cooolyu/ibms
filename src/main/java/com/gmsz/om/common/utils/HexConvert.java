/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: HexConvert.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-5-3        |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.utils;

/**
 * Class name:HexConvert
 * Description: Hex Convert
 * @author LuHaosheng
 */
public class HexConvert {

	/**
	 * Description: Bytes to hexadecimal
	 * @param bytes
	 * @return
	 */
	public static String byte2hex(byte[] bytes) {
		StringBuilder resultStr = new StringBuilder("");
		for (byte b : bytes) {
			String onebyte = Integer.toHexString(b & 0xFF);
			if (onebyte.length() == 1)
				resultStr.append("0").append(onebyte);
			else
				resultStr.append(onebyte);
		}
		return resultStr.toString();
	}
	
	/**
	 * Description: Hexadecimal to bytes
	 * @param hexStr
	 * @return
	 */
	public static byte[] hex2byte(String hexStr) {
		byte[] bytes = new byte[hexStr.length()/2];
		
		for (int i = 0; i < hexStr.length(); i+=2) {
			byte b = (byte)Integer.parseInt(hexStr.substring(i, i+2), 16);
			bytes[i/2] = b;
		}
		
		return bytes;
	}
}
