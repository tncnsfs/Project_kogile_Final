<%@page import="kosta.Blog"%>
<%@page import="java.util.List"%>
<%@page import="net.sf.json.JSONArray"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
    <%!
    List<Blog> list;
    %>
    
    
	<%
	String title = request.getParameter("title");
	String writer = request.getParameter("writer");
	String contents = request.getParameter("contents");
	
	
	if(list == null){
//		System.out.println("1");
		list = new ArrayList<Blog>();
//		System.out.println("2");
		if(title != null){
			list.add(new Blog(title, writer, contents));
//			System.out.println("3");
		}
	}else if(title != null){
//		System.out.println("4");
		list.add(new Blog(title, writer, contents));
	}
	
//	System.out.println("5");
		
	if(list != null && list.size() != 0){
		String json = JSONArray.fromObject(list).toString();
		out.print(json);
	}
	
	System.out.println("ok");
	%>