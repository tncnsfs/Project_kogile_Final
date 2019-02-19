package kogile.checklist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import kogile.checklist.domain.ChecklistVO;
import kogile.checklist.domain.Criteria;
import kogile.checklist.mapper.ChecklistMapper;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.extern.log4j.Log4j;


@Service
@Log4j
@AllArgsConstructor
public class ChecklistServiceImpl implements ChecklistService {

	@Setter(onMethod_= @Autowired)
	private ChecklistMapper mapper;
	
	@Override
	public int register(ChecklistVO cvo) {
		
		log.info("register..." + cvo);
		
		return mapper.insert(cvo);
	}
	
	@Override
	public ChecklistVO get(int checklist_no) {
		// TODO Auto-generated method stub
		
		log.info("get..." + checklist_no);
		
		return mapper.read(checklist_no);
	}

	@Override
	public int modify(ChecklistVO cvo) {
		
		log.info("modify..." + cvo);
		
		return mapper.update(cvo);
	}

	@Override
	public int remove(int checklist_no) {
		
		log.info("remove..." + checklist_no);
		
		return mapper.delete(checklist_no);
	}

	@Override
	public List<ChecklistVO> getList(Criteria cri, int p_no) {
		
		log.info("get Checklist List " + p_no );
		
		return mapper.getListWithPaging(cri, p_no);
	}


	
	

}
