<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<!-- Custom fonts for this template-->
<link href="/resources/vendor/fontawesome-free/css/all.min.css"
	rel="stylesheet" type="text/css">

<!-- Page level plugin CSS-->
<link href="/resources/vendor/datatables/dataTables.bootstrap4.css"
	rel="stylesheet">

<!-- Custom styles for this template-->
<link href="/resources/css/sb-admin.css" rel="stylesheet">
<title>Login</title>
</head>
<body class="bg-dark">
	<div class="card card-login mx-auto mt-5">
		<div class="card-header">Login</div>
		<div class="card-body">
			<form>
				<div class="form-group">
					<div class="form-label-group">
						<input type="email" id="inputEmail" class="form-control"
							placeholder="Email address" required="required"
							autofocus="autofocus"> <label for="inputEmail">Email
							address</label>
					</div>
				</div>
				<div class="form-group">
					<div class="form-label-group">
						<input type="password" id="inputPassword" class="form-control"
							placeholder="Password" required="required"> <label
							for="inputPassword">Password</label>
					</div>
				</div>
				<div class="form-group">
					<div class="checkbox">
						<label> <input type="checkbox" value="remember-me">
							Remember Password
						</label>
					</div>
				</div>
				<a class="btn btn-primary btn-block" href="https://kauth.kakao.com/oauth/authorize?
				client_id=e16764ac8ecc77d571c58088d37b119b&
				redirect_uri=http://localhost:8082/login/external/kakaoOauth&
				response_type=code">Login</a>
			</form>
			<div class="text-center">
				<a class="d-block small mt-3" href="register.html">Register an
					Account</a> <a class="d-block small" href="forgot-password.html">Forgot
					Password?</a>
			</div>
		</div>
	</div>

	<!--         <p class="small text-center text-muted my-5">
          <em>More table examples coming soon...</em>
        </p> -->

	</div>
	<!-- /.container-fluid -->

	<!-- Sticky Footer -->


	</div>
	<!-- /.content-wrapper -->

	</div>
	<!-- /#wrapper -->


	<%-- <%@ include file="../includes/content_footer.jsp"%> --%>

	<%@ include file="../includes/footconfig.jsp"%>

</body>
</html>