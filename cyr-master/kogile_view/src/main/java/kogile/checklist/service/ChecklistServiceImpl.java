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
	
	
	// 입력하기 
	@Override
	public int register(ChecklistVO cvo) {
		
		log.info("register..." + cvo);
		
		return mapper.insert(cvo);
	}
	
	
	// 조회하기 
	@Override
	public ChecklistVO get(Long checklist_no) {
		// TODO Auto-generated method stub
		
		log.info("get..." + checklist_no);
		
		return mapper.read(checklist_no);
	}

	
	// 수정하기 
	@Override
	public int modify(ChecklistVO cvo) {
		
		log.info("modify..." + cvo);
		
		return mapper.update(cvo);
	}

	
	// 삭제하기 
	@Override
	public int remove(Long checklist_no) {
		
		log.info("remove..." + checklist_no);
		
		return mapper.delete(checklist_no);
	}

	
	// 전체조회
	@Override
	public List<ChecklistVO> getList(Criteria cri, int p_no) {
		
		log.info("get Checklist List " + p_no );
		
		return mapper.getListWithPaging(cri, p_no);
	}


	
	

}
