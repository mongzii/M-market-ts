//회원가입페이지

export default function Member() {
  return (
    <div>
      <h2>회원가입</h2>
      <form method="POST" action="/api/auth/signup">
        <input name="name" type="text" placeholder="이름" />
        <input name="email" type="text" placeholder="email" />
        <input name="password" type="password" placeholder="비밀번호" />
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
