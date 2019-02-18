package kogile.test.checklist;


import java.util.List;
import java.util.stream.IntStream;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import kogile.checklist.domain.ChecklistVO;
import kogile.checklist.domain.Criteria;
import kogile.checklist.mapper.ChecklistMapper;
import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@Log4j
public class ChecklistMapperTests {
	
	private Long[] cknoArr = {1l,2l,3l,4l,5l};
	private int[] pnoArr1 = {1,2,3,4,5};

	@Setter(onMethod_=@Autowired)
	private ChecklistMapper mapper;
	
	
	@Test
	public void testMapper(){
		
		log.info(mapper);
	}
	
/*	@Test
	public void testCreate(){
		
		IntStream.rangeClosed(1, 10).forEach( i-> {
			
			ChecklistVO cvo = new ChecklistVO();
			
			cvo.setChecklist_no(cknoArr[i/5]);
			cvo.setCheck_title("checklistTest" + i);
			cvo.setP_no(2);
			
			mapper.insert(cvo);
		});
	}*/
	
	
/*	@Test
	public void testRead(){
		
		Long targetChecklist_no = 5l;
		
		ChecklistVO cvo = mapper.read(targetChecklist_no);
		
		log.info(cvo);
	}*/
	
/*	@Test
	public void testDelete(){
		
		Long targetChecklist_no = 26l;
		
		mapper.delete(targetChecklist_no);
		
				
	}*/
	
/*	@Test
	public void testUpdate(){
		
		Long targetChecklist_no = 10l;
		
		ChecklistVO cvo = mapper.read(targetChecklist_no);
		
		cvo.setCheck_title("Update Checklist");
		
		int count = mapper.update(cvo);
		
		log.info("Update Count" + count);
	}*/
	
	
	@Test
	public void testList(){
		
		Criteria cri = new Criteria();
		List<ChecklistVO> cvos = mapper.getListWithPaging(cri, pnoArr1[1]);
		
		cvos.forEach(checklist -> log.info(checklist));
		
	}
	
	
	
	
}
