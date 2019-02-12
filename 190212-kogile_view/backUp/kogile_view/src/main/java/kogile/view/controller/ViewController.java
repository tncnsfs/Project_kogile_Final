package kogile.view.controller;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.extern.log4j.Log4j;

@Controller
@RequestMapping("/kogile/*")
@Log4j
public class ViewController {
	
	private HttpSession session;
	
	@GetMapping("/login")
	public void login() {
		
	};
	
	@RequestMapping("/startPage")
	public void start() {
		
	}
	
	@GetMapping("/main")
	public void main() {

	}
	
	@GetMapping("/main_configure")
	public void configure() {
		
	}
	

}
