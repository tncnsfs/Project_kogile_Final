package kogile.user.service;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kogile.user.domain.UserVO;
import kogile.user.mapper.UserMapper;
import lombok.Data;
import lombok.Setter;

@Service
@Data
public class UserServiceInpl implements UserService {

	@Setter(onMethod_ = { @Autowired })
	private UserMapper mapper;

	@Override
	public void interMemRegister(Map<String, String> userInfo) {
		String encrypedPw = Sha256Hash.sha256(userInfo.get("password"));
		userInfo.replace("password", encrypedPw);

		mapper.register(userInfo);
	}

	// �α���
	@Override
	public void interMemLogin(Map<String, String> userInfo, HttpServletRequest request,
			HttpServletResponse response) {
		String encrypedPw = Sha256Hash.sha256(userInfo.get("password"));
		userInfo.replace("password", encrypedPw);

		UserVO user = null;
		System.out.println(userInfo);

		try {
			String email = userInfo.get("email");
			if (mapper.isMemberEmail(email).equals("F")) { // NULL�̸� F, NULL�̾ƴϸ� T
				System.out.println("ID�� �������� �ʽ��ϴ�.");
				throw new NullPointerException();
			}

			//ID�� ��ġ������, ��й�ȣ�� Ʋ�����
			user = mapper.interMemLogin(userInfo);
			
			int total_m_no = mapper.getTotalMNoFromInterMem(user.getIntermemNo());
			user.setTotal_m_no(total_m_no);
			user.setInterMem(true);
			System.out.println(user);

			HttpSession session = request.getSession();
			session.setAttribute("user", user);
		} catch (NullPointerException e) {
			e.printStackTrace();
			response.setStatus(404);
			System.out.println("������ ã�� �� �����ϴ�!");
		}
	}

	/*
	 * �̹� ���Ե� �̸����̸� T ������ F
	 */
	@Override
	public String isMemberEmail(String email) {
		return mapper.isMemberEmail(email).toString();
	}

}
