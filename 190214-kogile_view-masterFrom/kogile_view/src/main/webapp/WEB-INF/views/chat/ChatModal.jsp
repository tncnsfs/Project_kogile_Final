<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=EUC-KR">
<link
	href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
	rel="stylesheet" id="bootstrap-css">
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script
	src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>


<title>Insert title here</title>
<style type="text/css">
@CHARSET "EUC-KR";

.mytext {
	border: 0;
	padding: 10px;
	background: whitesmoke;
}

.text {
	width: 75%;
	display: flex;
	flex-direction: column;
}

.text>p:first-of-type {
	width: 100%;
	margin-top: 0;
	margin-bottom: auto;
	line-height: 13px;
	font-size: 12px;
}

.text>p:last-of-type {
	width: 100%;
	text-align: right;
	color: silver;
	margin-bottom: -7px;
	margin-top: auto;
}

.text-l {
	float: left;
	padding-right: 10px;
}

.text-r {
	float: right;
	padding-left: 10px;
}

.avatar {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25%;
	float: left;
	padding-right: 10px;
}

.macro {
	margin-top: 5px;
	width: 85%;
	border-radius: 5px;
	padding: 5px;
	display: flex;
}

.msj-rta {
	float: right;
	background: whitesmoke;
}

.msj {
	float: left;
	background: white;
}

.frame {
	background: #e0e0de;
	height: 450px;
	overflow: hidden;
	padding: 0;
}

.frame>div:last-of-type {
	position: absolute;
	bottom: 0;
	width: 100%;
	display: flex;
}

body>div>div>div:nth-child(2)>span {
	background: whitesmoke;
	padding: 10px;
	font-size: 21px;
	border-radius: 50%;
}

body>div>div>div.msj-rta.macro {
	margin: auto;
	margin-left: 1%;
}

ul {
	width: 100%;
	list-style-type: none;
	padding: 18px;
	position: absolute;
	bottom: 47px;
	display: flex;
	flex-direction: column;
	top: 0;
	overflow-y: scroll;
}

.msj:before {
	width: 0;
	height: 0;
	content: "";
	top: -5px;
	left: -14px;
	position: relative;
	border-style: solid;
	border-width: 0 13px 13px 0;
	border-color: transparent #ffffff transparent transparent;
}

.msj-rta:after {
	width: 0;
	height: 0;
	content: "";
	top: -5px;
	left: 14px;
	position: relative;
	border-style: solid;
	border-width: 13px 13px 0 0;
	border-color: whitesmoke transparent transparent transparent;
}

input:focus {
	outline: none;
}

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
	color: #d4d4d4;
}

::-moz-placeholder { /* Firefox 19+ */
	color: #d4d4d4;
}

:-ms-input-placeholder { /* IE 10+ */
	color: #d4d4d4;
}

:-moz-placeholder { /* Firefox 18- */
	color: #d4d4d4;
}
</style>
<script type="text/javascript">
/**
 * ä�� ���� Ajax ���.
 */
var chatService = (function() {
	var url = {
		"initChatCtn" : "/chat/initChatCtn/",
		"recievechat" : "/chat/recievechat",
		"sendchat" : "/chat/sendchat"
	};
	
	//pjt_no ��� ������? �ϴ� ���Ƿ� �־����.

	function initChatCtn(pjt_no, callback, error) {
		$.ajax({
			type : 'get',
			url : url.initChatCtn + pjt_no,
			success : function(result, status, xhr) {
				if(callback){
					callback(result);
				}
			},
			error : function() {
				if(error) {
					error(er);
				}
			}
		})
	}
	
	//���� �ð����� ��û�� ��������. �׸��� �ݹ鿡�� �ֱ� ä�ù�ȣ ������Ʈ �ؾ���.
	//�����ʹ� pjt_no�� �ֽ� ä�ù�ȣ.
	function recievechat(userInfo, callback, error) {
		$.ajax({
			type : 'post',
			url : url.recievechat,
			data : JSON.stringify(userInfo),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error : function(error) {
				error(er);
			}
		})
	}
	
	//��ư Ŭ���Ҷ� �̺�Ʈ ������.
	function sendchat(chat, callback, error) {
		$.ajax({
			type : 'post',
			url : url.sendchat,
			data : JSON.stringify(chat),
			contentType : "application/json; charset=utf-8",
			success : function(result, status, xhr){
				if(callback){
					callback(result);
				}
			},
			error : function(error) {
				error(er);
			}
		})
	}

	return {
		"initChatCtn" : initChatCtn,
		"recievechat" : recievechat,
		"sendchat" : sendchat
	};
})();
</script>

<script type="text/javascript">

	function ChatVO(chatContents, pjt_no, total_m_no, writer) {
		this.chatContents = chatContents;
		this.pjt_no = pjt_no;
		this.total_m_no = total_m_no;
		this.writer = writer;
		}

	//���� �Ķ���ͷ� �ǳ׹޽��ϴ�.
	var MyChatInfo = {
		"pjt_no" : 1,
		"name" : "Ȳ����",
		"total_m_no" : 2,
		"chat_no" : 1
		};	
	
	//����1ȸ ��� ä�ø���Ʈ�� �� �����´�.
	printChat();
	chatService.initChatCtn(MyChatInfo.pjt_no);
	//���������� ä�ø���Ʈ�� ������Ʈ �Ѵ�.
	setInterval(function() {
		printChat();
	}, 1000);
	//Ajax��û�� ������, ȭ�鿡 �ѷ��ش�.
	function printChat() {
		chatService.recievechat(window.MyChatInfo, function(chatList){
			
			//���ο� ä�ó��븸 �ҷ����� ���ؼ� ���������� ������ ä�óѹ��� ������Ʈ �Ѵ�.
			if(chatList.length > 0) {
				window.MyChatInfo.chat_no = chatList[chatList.length - 1].chat_no;
				chatList.forEach(function (chat, index, array) {
					
					var who;
					// total_m_no�� ��ä������ Ȯ���Ѵ�.
					if(chat.total_m_no == window.MyChatInfo.total_m_no){
						who = "me"; 
					}else{
						who = "other";
					}
					insertChat(who, chat);
				});
			}

		});
	}
	
	$(function() {

		$(".mytext").on("keydown", function(e) {
			if (e.which == 13) {
				var text = $(this).val();
				if (text !== "") {
					//var member_info = "<%=(String) session.getAttribute("memberInfo")%>";

							var chat = new ChatVO(text,
									window.MyChatInfo.pjt_no,
									window.MyChatInfo.total_m_no,
									window.MyChatInfo.name);
							chatService.sendchat(chat);
							$(this).val('');
						}
					}
				});

		//��ư�� �Է��ϸ� ���� ������ �̺�Ʈ�� �߻��Ѵ�.
		$('body > div > div > div:nth-child(2) > span').click(function() {
			$(".mytext").trigger({
				type : 'keydown',
				which : 13,
				keyCode : 13
			});
		})
	})
</script>
<script type="text/javascript">
	function insertChat(who, ChatVo) {

		var control = "";
		//���������� ä�� �ѷ��ִ� �ڵ�.
		if (who == "other") {
			control = '<li style="width:100%">' + '<div class="msj macro">'
					+ '<div class="text text-l">' + '<p><b>' + ChatVo.writer
					+ '</b></p>' + '<p>' + ChatVo.chatContents + '</p>'
					+ '<p><small>' + ChatVo.regdate + '</small></p>' + '</div>'
					+ '</div>' + '</li>';
		} else {
			control = '<li style="width:100%;">' + '<div class="msj-rta macro">'
					+ '<div class="text text-r">' + '<p><b>' + ChatVo.writer
					+ '</b></p>' + '<p>' + ChatVo.chatContents + '</p>' +
					'<p><small>' + ChatVo.regdate + '</small></p>' + '</div>'
					+ '</div>' + '</li>';
		}

		//��Ͽ� append
		$("ul").append(control).scrollTop($("ul").prop('scrollHeight'));

	}

	//ȭ�� ����
	function resetChat() {
		$("ul").empty();
	}
	resetChat();
	//-- Clear Chat

	//�����ð����� Ajax��û�� ������ ���ο� �޽����� �ִ��� Ȯ���Ѵ�.
</script>
</head>
<body>
	<div class="col-sm-3 col-sm-offset-4 frame">
		<ul id="chatScreen"></ul>
		<div>
			<div class="msj-rta macro">
				<div class="text text-r" style="background: whitesmoke !important">
					<input class="mytext" id="chatInput" placeholder="Type a message" />
				</div>

			</div>
			<div id="sendDiv" style="padding: 10px;">
				<span class="glyphicon glyphicon-share-alt"></span>
			</div>
		</div>
	</div>
</body>
</html>