import Link from 'next/link'

export default async function RootLayout({ children }) {
    return (
		<form>
        <div className="wrap">
			<div className="login1">
				<h1>
					<img src="images/logo.jpg" alt="milan information system"/>
				</h1>
				<div className="loginBox">
					<input type="text" name="userid" placeholder="아이디"/>
					<input type="password" name="userpass" placeholder="비밀번호"/>
					<div>
						<input type="checkbox" className="save" id="" name="" value=""/>
						<label for="saveId">아이디 저장</label>

						<input type="checkbox" className="save" id="" name="" value=""/>
						<label for="savePw">비밀번호 저장</label>
					</div>
					<a href="">회원가입</a>
					<Link href="/"><button type="button" className="btnLogin">로그인</button></Link>
				</div>
			</div>
		</div>
	</form>
        )
    }