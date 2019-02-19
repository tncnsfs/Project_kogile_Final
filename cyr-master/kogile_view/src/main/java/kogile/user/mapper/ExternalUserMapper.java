package kogile.user.mapper;

import java.util.Map;

import org.apache.ibatis.annotations.Select;

import kogile.user.domain.UserVO;

public interface ExternalUserMapper {
	// ���ǿ� ȸ������ �־��ٶ� isInterMem false�� �־���� ��.
	public void exterMemRegister(UserVO user);

	// �ܺ���üID�ѹ��� �ܺο������� �̸��� �����ؼ� Totalȸ���ѹ� ������.
	public int getTotalMNoFromExterMem(Map<String, Object> test);

	// ���Ե� �ܺ�ȸ������ ��ȸ�Ѵ�.
	public String isKogileMember(Map<String, Object> interlinked_infoes);

	// ȸ�������� �����´�.
	public UserVO getExterMemInfo(Map<String, Object> interlinked_infoes);

	// accessToken�� ������Ʈ �Ѵ�.
	public void updateAccessToken(Map<String, Object> interlinked_infoes);

	@Select("select ACCESS_TOKEN from EXTERNAL_M_INFO where interlinked_info_type = #{interlinked_info_type} AND interlinked_info = #{interlinked_info}")
	public String getAccessToken(Map<String, Object> interlinked_infoes);
}
