<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome</title>
<style type="text/css">
#logout {
  position: relative;
  float: right;
  
}
body{
background-color: aquamarine;
}
</style>
</head>
<body>
<p id="logout"><a href="logout.jsp">Logout</a>
<p>Welcome, <%=session.getAttribute("name")%></p>
<form class="zoom" name="myForm" action="Shipping.html" method="GET">
   <table>
   <th>Products</th><br>
   <tr>
   <td class="p1"><a href="information/secondImage.html"><img src="picture/pic2.jpg" alt="headphone"style="float:right;width:142px;height:152px;"></a></td>
   <td class="p2"><a href="information/firstImage.html"><img src="picture/pic1.jfif" alt="headphone"style="float:right;width:142px;height:152px;"></a></td>
   <td class="p3"><a href="information/thirdImage.html"><img src="picture/pic3.jfif" alt="headphone"style="float:right;width:142px;height:152px;"></a></td>
   <td class="p4"><a href="information/fourthImage.html"><img src="picture/pic4.jfif" alt="headphone"style="float:right;width:142px;height:152px;"></a></td>
   <td class="p5"><a href="information/fifthImage.html"><img src="picture/pic5.jpg" alt="headphone"style="float:right;width:142px;height:152px;"></a></td>

   </tr>
  
   </table><br>
   <button class="button">Continue</button> 
     </form>
</body>
</html>