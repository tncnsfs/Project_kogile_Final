package kogile.label.domain;

import lombok.Data;

@Data
public class LabelVO {
	private int label_no;
	private String label_text;
	private int color_no;
	private int pjt_no;
}