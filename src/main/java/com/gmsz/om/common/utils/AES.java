/*
 *******************************************************************************
 * All rights Reserved, Copyright (C) www.gm-sz.com 2012
 * FileName: AES.java
 * Modify record:
 * NO. |     Date       |    Version      |    Name         |      Content
 * 1   | 2012-5-3       |      1.0        | GMSZ)LuHaosheng | original version
 *******************************************************************************
 */
package com.gmsz.om.common.utils;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.OutputStream;
import java.security.InvalidKeyException;
import java.security.Key;
import java.security.NoSuchAlgorithmException;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.ShortBufferException;

import com.gmsz.om.common.constant.StateDefine;
import com.gmsz.om.common.init.InitServlet;

/**
 * Class name:AES
 * Description: AES encrypt
 * @author LuHaosheng
 */
public class AES {
	
	private static AES aes = null;
	
	private AES() {
		
	}
	
	public synchronized static AES getInstance() {
		if (aes == null) aes = new AES();
		return aes;
	}
	
	/**
	 * Description: 解密字符串,返回解密后的明文字符串
	 * @param enStr
	 * @return
	 * @throws InvalidKeyException
	 * @throws ShortBufferException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public String decrypt(String enStr) throws InvalidKeyException, ShortBufferException, IllegalBlockSizeException, 
	BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException, IOException, ClassNotFoundException {
		ByteArrayInputStream in = new ByteArrayInputStream(HexConvert.hex2byte(enStr));
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		this.decrypt(in, out);
		return out.toString();
	}
	
	/**
	 * Description: 加密字符串,返回加密后的16进制码
	 * @param deStr
	 * @return
	 * @throws InvalidKeyException
	 * @throws ShortBufferException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public String encrypt(String deStr) throws InvalidKeyException, ShortBufferException, IllegalBlockSizeException, 
	BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException, IOException, ClassNotFoundException {
		ByteArrayInputStream in = new ByteArrayInputStream(deStr.getBytes());
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		this.encrypt(in, out);
		return HexConvert.byte2hex(out.toByteArray());
	}
	
	/**
	 * Description: 解密,参数是输入,输出流
	 * @param in
	 * @param out
	 * @throws InvalidKeyException
	 * @throws ShortBufferException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public void decrypt(InputStream in, OutputStream out) throws InvalidKeyException, ShortBufferException, 
	IllegalBlockSizeException, BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException, 
	IOException, ClassNotFoundException {  
		this.crypt(in, out, Cipher.DECRYPT_MODE);  
	}

	/**
	 * Description: 加密,参数是输入输出流
	 * @param in
	 * @param out
	 * @throws InvalidKeyException
	 * @throws ShortBufferException
	 * @throws IllegalBlockSizeException
	 * @throws BadPaddingException
	 * @throws NoSuchAlgorithmException
	 * @throws NoSuchPaddingException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	public void encrypt(InputStream in, OutputStream out) throws InvalidKeyException, ShortBufferException, 
	IllegalBlockSizeException, BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException, 
	IOException, ClassNotFoundException {  
		this.crypt(in, out, Cipher.ENCRYPT_MODE);  
	}

	private void crypt(InputStream in, OutputStream out, int mode) throws IOException, ShortBufferException, 
	IllegalBlockSizeException, BadPaddingException, NoSuchAlgorithmException, 
	NoSuchPaddingException, InvalidKeyException, ClassNotFoundException {

		Key key = this.getKey();

		Cipher cipher = Cipher.getInstance("AES");  
		cipher.init(mode, key);  

		int blockSize = cipher.getBlockSize();  
		int outputSize = cipher.getOutputSize(blockSize);  
		byte[] inBytes = new byte[blockSize];  
		byte[] outBytes = new byte[outputSize];  

		int inLength = 0;  
		boolean more = true;  
		while (more) {  
			inLength = in.read(inBytes);  
			if (inLength == blockSize) {  
				int outLength = cipher.update(inBytes, 0, blockSize, outBytes);  
				out.write(outBytes, 0, outLength);  
			} else {  
				more = false;  
			}  
		}  
		if (inLength > 0)  
			outBytes = cipher.doFinal(inBytes, 0, inLength);  
		else  
			outBytes = cipher.doFinal();  
		out.write(outBytes);  
		out.flush();  
	}

	/**
	 * Description: 读取密钥
	 * @return
	 * @throws FileNotFoundException
	 * @throws IOException
	 * @throws ClassNotFoundException
	 */
	private Key getKey() throws FileNotFoundException, IOException, ClassNotFoundException {
//		String path = Thread.currentThread().getContextClassLoader().getResource("") 
		String path = InitServlet.getContextPath() + "WEB-INF" + StateDefine.FILE_SEPARATOR + "classes" + StateDefine.FILE_SEPARATOR
				+ "com" + StateDefine.FILE_SEPARATOR + "gmsz" + StateDefine.FILE_SEPARATOR
				+ "om" + StateDefine.FILE_SEPARATOR + "common" + StateDefine.FILE_SEPARATOR
				+ "utils" + StateDefine.FILE_SEPARATOR + "keygen";
		ObjectInputStream ois = null;
		Key key = null;
		try {
//			ois = new ObjectInputStream(new FileInputStream(path.substring(6)));
			ois = new ObjectInputStream(new FileInputStream(path));
			key = (Key)ois.readObject();
		} catch(Exception e) {
			e.printStackTrace();
		} finally {
			ois.close();
		}
		return key;
	}
}
