package kogile.project.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import kogile.project.domain.ProjectVO;
import kogile.project.domain.UserVO;
import kogile.project.service.ProjectService;
import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller
@Log4j
@AllArgsConstructor
@RequestMapping("/kogile/project/*")
public class ProjectController2 {
	
	private ProjectService service;
	
	private HttpSession session;
	
	@PostMapping("/modify")
	public String modify(ProjectVO project) {
		service.modify(project);
		int pjt_no = (int)session.getAttribute("pjt_no");
		return "redirect:/kogile/project/config?pjt_no="+pjt_no;
	}
	
	@PostMapping("/delete")
	public String delete() {
		int pjt_no = (int)session.getAttribute("pjt_no");
		service.delete(pjt_no);
		return "redirect:/kogile/startPage";
	}
	
	@GetMapping("/config")
	public void config(int pjt_no, Model model) {
		ProjectVO project = service.project_info(pjt_no);
		model.addAttribute("project", project);
		int total_m_no = (int)session.getAttribute("total_m_no");
		UserVO master = service.master_info(total_m_no);
		model.addAttribute("master", master);
	}
}