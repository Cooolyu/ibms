package com.gmsz.om.common.utils;

import java.io.File;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;

import org.springframework.web.multipart.MultipartFile;

public class FileSave {
	
	public static void saveFile(MultipartFile image ,String url){
        try {
            InputStream inputStream = image.getInputStream();  
            OutputStream outputStream = new FileOutputStream(url+"/page/images/" 
                    + image.getOriginalFilename());  
            byte[] buffer = image.getBytes();  
            int bytesum = 0;  
            int byteread = 0;  
            while ((byteread = inputStream.read(buffer)) != -1) {  
                bytesum += byteread;  
                outputStream.write(buffer, 0, byteread);  
                outputStream.flush();  
            }  
            outputStream.close();  
            inputStream.close();
		} catch (Exception e) {
			System.out.println("出错了"+e.getMessage());
		}
	}

}
