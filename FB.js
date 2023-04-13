let app = document.getElementById("app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  deleteSpeed: 45,
});

typewriter
  .pauseFor(1000)
  .typeString("這是一個開獎網站<br><strong>每天更新並且提供最新消息</strong>")
  .pauseFor(1000)
  .deleteChars(30)
  .typeString("測試第二組文章<br><strong>是用JS實行並運作</strong>")
  .pauseFor(1000)
  .deleteChars(30)
  .typeString("測試第三組文章<br><strong>也是用JS實行</strong>")
  .pauseFor(1000)
  .deleteChars(30)
  .start();
