package kogile.reply.service;

import java.util.List;

import kogile.invite.domain.InviteVO;
import kogile.project.domain.UserVO;
import kogile.reply.domain.ReplyVO;
import kogile.reply.domain.TagVO;

public interface ReplyService {
	
	public int registerReply (ReplyVO vo);
	
	public int removeReply (int r_no);
	
	public int modifyReply (ReplyVO vo);
	
	public List<ReplyVO> replyList (int p_no);
	
	public InviteVO writer_info (int total_m_no);
	
	public int registerTag (TagVO vo);
	
	public List<TagVO> tagList(int pjt_no);
}
