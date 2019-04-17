<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>    
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
<%! String userdbName=null;
String userdbPsw=null;
String UserN=null;
%>
<%

 

String driverName = "com.mysql.jdbc.Driver";
String url = "jdbc:mysql://localhost:3306/aniket";
String user = "root";
String dbpsw = "root";

String sql = "select * from customer where username=? and password=?";

String username = request.getParameter("username");
String password = request.getParameter("password");
//String name = request.getParameter("name");

if((!(username.equals(null) || username.equals("")) && !(password.equals(null) || password.equals(""))) )
{
	try{
		Class.forName ("com.mysql.cj.jdbc.Driver").newInstance();
		java.sql.Connection con=DriverManager.getConnection("jdbc:mysql://localhost/aniket?" +"user=root&password=root");
		PreparedStatement ps = con.prepareStatement(sql);
		ps.setString(1, username);
		ps.setString(2, password);
		//ps.setString(3, name);
		ResultSet rs =  ps.executeQuery();
		if(rs.next())
		{			
			userdbName = rs.getString("username");
			userdbPsw = rs.getString("password");
			UserN = rs.getString("name");
			if(username.equals(userdbName) && password.equals(userdbPsw) )
				{
					session.setAttribute("username",userdbName);
					session.setAttribute("name", UserN);					
					response.sendRedirect("welcome.jsp");				
				}						   
		}
		else
			response.sendRedirect("error.jsp");
		rs.close();
		ps.close();				
		}
	catch(SQLException sqe)
	{
		out.println(sqe);
	}	
}
else
{
	%>
	
		<center><p style="color:red">Error In Login</p></center>
		<% 
	getServletContext().getRequestDispatcher("/home.jsp").include(request, response);
}

%>
</body>
</html>