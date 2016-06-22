package com.gmsz.om.web.visualization.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Component;

import com.gmsz.om.web.visualization.beans.Visual;
import com.gmsz.om.web.visualization.dao.VisualMapper;

@Component
public class VisualServiceImpl implements VisualService {

	@Resource
	private VisualMapper visualMapper;
	
	public Visual airCount(int sysId) {
		int stopcount=0,runcount=0,reruncount=0;
		Visual visual = new Visual();
		List<Long> list = this.visualMapper.countFloor(sysId);
		for (int i = 0; i < list.size(); i++) {
			stopcount+=this.visualMapper.countStopAsset(list.get(i));
			runcount+=this.visualMapper.countRunAsset(list.get(i));
			reruncount+=this.visualMapper.countRerunAsset(list.get(i));
		}
		visual.setStop(stopcount);
		visual.setRun(runcount);
		visual.setRerun(reruncount);
		return visual;
	}

}
