package kogile.checklist.service;

import java.util.List;

import kogile.checklist.domain.ChecklistVO;
import kogile.checklist.domain.ListVO;

public interface ChecklistService {
	
	public int register(ChecklistVO cvo);
	
	public int modify(ChecklistVO cvo);
	
	public int remove(int checklist_no);
	
	public List<ChecklistVO> getList(int p_no);
//	public List<ChecklistVO> getList();

	public int insertList(ListVO list);
	public List<ListVO> listList(int checklist_no);
	public int deleteList(int list_no);
	
}
