package kogile.post.service;

import java.util.List;

import kogile.post.domain.PostVO;
import kogile.project.domain.CardVO;

public interface PostService {
	public List<PostVO> list_post(int pjt_no);

	public List<CardVO> list_card(int pjt_no);

	public int modifyDescription(PostVO vo);

	public PostVO showDescription(int p_no);

	// Post 삽입
	public void insertPost(PostVO post);

	// Post 읽기
	public PostVO detailPost(int p_no);

	// Post 수정
	public int updateDate(PostVO post);

	// Post 삭제
	public int deletePost(int p_no);

	// Date 삽입
//	public int updateDate(PostVO post);

	// Date 읽기
	public PostVO detailDate(int p_no);

}
