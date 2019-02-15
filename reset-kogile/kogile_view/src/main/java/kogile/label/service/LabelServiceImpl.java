package kogile.label.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kogile.label.domain.LabelVO;
import kogile.label.mapper.LabelMapper;
import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class LabelServiceImpl implements LabelService {

	private LabelMapper mapper;
	
	@Override
	public List<LabelVO> listLabel(int pjt_no) {
		List<LabelVO> list = mapper.listLabel(pjt_no); 
		return list;
	}

}
