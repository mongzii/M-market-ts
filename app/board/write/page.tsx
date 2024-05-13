export default function Write() {
  return (
    <div className="p-20">
      <h4>글작성</h4>
      <form action="/api/post/new" method="POST">
        <input name="title" placeholder="제목을입력하세요" />
        <input name="content" placeholder="내용을입력하세요" />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
