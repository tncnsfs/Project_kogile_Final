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
	
	
	@Setter(onMethod_=@Autowired)
	private ChecklistMapper ckmapper;
	
	

	
	@Test
	public void testMapper(){
		log.info(ckmapper);
	}
	
	
	@Test
	public void testInsert() {
		
		IntStream.rangeClosed(1, 10).forEach(i -> {
			
			ChecklistVO cvo = new ChecklistVO();
			
			cvo.setCheck_title("댓글테스트 " + i);
			cvo.setP_no(cknoArr[i %5]);
			
			ckmapper.insert(cvo);
		});
	}
	
	
	@Test
	public void testRead() {
		
		Long CheckNo = 3l;
		
		ChecklistVO cvo = ckmapper.read(CheckNo);
				
		
		log.info(cvo);
	}
	
	@Test
	public void testDelete() {
		
		Long CheckNo = 199l;
		log.info("Delete count: " + ckmapper.delete(197l));
	}
	
	
	@Test
	public void testUpdate() {
		
		// 있는 값으로 테스트 하기 
		Long CheckNo = 187l;
		
		ChecklistVO cvo = ckmapper.read(CheckNo);
		
		
//		cvo.setCheck_title("샛별");
		cvo.setCheck_title("새별");
		
		int count = ckmapper.update(cvo);
		
		log.info("Update Count: " + count);
	}
	
	
	
	@Test
	public void testList(){
		Criteria cri = new Criteria();
		
		List<ChecklistVO> checklis = ckmapper.getListWithPaging(cri, cknoArr[0]);
		
		checklis.forEach(lis -> log.info(lis));
	}
	
	/*-------------------------------------------------*/
	
	
	
}
