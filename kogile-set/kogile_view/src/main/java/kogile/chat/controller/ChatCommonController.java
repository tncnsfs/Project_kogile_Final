package kogile.chat.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j;

@Controller
@Log4j

public class ChatCommonController {
	@GetMapping("/Chatting")
	public String Redirect(){
		return "chat/ChatModal";
	}
}
