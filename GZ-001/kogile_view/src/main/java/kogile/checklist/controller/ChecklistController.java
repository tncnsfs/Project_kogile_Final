package kogile.checklist.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kogile.checklist.domain.ChecklistVO;
import kogile.checklist.service.ChecklistService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@RequestMapping("/checklist/*")
@AllArgsConstructor
public class ChecklistController {

	
	private ChecklistService service;
	
	@GetMapping("/list")
	public void list(Model model){
		
		log.info("list");
		
		model.addAttribute("list", service.getList());
		
	}
	
	@PostMapping("/register")
	public String register(ChecklistVO cvo, RedirectAttributes rttr){
		
		log.info("register:" + cvo);
		
		service.register(cvo);
		
		rttr.addFlashAttribute("result", cvo.getChecklist_no());
		
		return "redirect:/checklist/list";
		
	}
	
	
}
