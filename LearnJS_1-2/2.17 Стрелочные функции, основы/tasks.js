function ask(question, yes, no) {
  if (question) yes();
  else no();
}

ask(
  false,
  () => console.log("Вы согласились."),
  () => console.log("Вы отменили выполнение.")
);
