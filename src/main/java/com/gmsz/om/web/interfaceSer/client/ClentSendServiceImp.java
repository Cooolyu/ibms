package com.gmsz.om.web.interfaceSer.client;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.io.Writer;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.BufferedHttpEntity;
import org.apache.http.entity.ContentProducer;
import org.apache.http.entity.EntityTemplate;
import org.apache.http.impl.client.HttpClients;
import org.apache.log4j.Logger;
import org.springframework.stereotype.Component;

import com.gmsz.om.common.constant.StateDefine;

@Component
public class ClentSendServiceImp implements ClientSendService {

	private static final Logger sysLogger = Logger.getLogger(StateDefine.SYS_LOG);
	@Override
	public String getResponseStr(String url, String jsonRequest) {
		String responseStr;
		try {
			responseStr = this.postStream(url, jsonRequest);
		} catch (IOException e) {
			return "failure";
		}
		return responseStr;
	}
	
	private String postStream(String url, final String stream) throws IOException {
		sysLogger.info("*** Start PostHttp: Class: InformationSender, Method: postStream");

		String responseString = null;

		// HttpClient httpClient = new DefaultHttpClient();
		HttpClient httpClient = HttpClients.createDefault();;
		// 封装输入流  
		ContentProducer cp = new ContentProducer() {
			public void writeTo(OutputStream outstream) throws IOException {  
				Writer writer = new OutputStreamWriter(outstream, "UTF-8");  
				writer.write(stream);  
				writer.flush();  
			}  
		};
		HttpEntity requestEntity = new EntityTemplate(cp);
		HttpPost httppost = new HttpPost(url);
		InputStream in = null;
		try {
			httppost.setEntity(requestEntity);
			HttpResponse response = httpClient.execute(httppost);
			int statusCode = response.getStatusLine().getStatusCode();
			if (statusCode == HttpStatus.SC_OK) {
				HttpEntity entity = response.getEntity();
				if (entity != null) {  
					entity = new BufferedHttpEntity(entity);  
					in = entity.getContent();  
					byte[] read = new byte[1024];  
					byte[] all = new byte[0];  
					int num;
					while ((num = in.read(read)) > 0) {  
						byte[] temp = new byte[all.length + num];  
						System.arraycopy(all, 0, temp, 0, all.length);  
						System.arraycopy(read, 0, temp, all.length, num);  
						all = temp;  
					}  
					responseString = new String(all, "UTF-8");  
				}  
			}
		} finally {
			if (in != null) in.close();
			httppost.abort();
		}
		
		sysLogger.info("*** End PostHttp: Class: InformationSender, Method: postStream");

		return responseString;
	}

}
