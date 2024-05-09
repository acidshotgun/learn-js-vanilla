async function loadJson(url) {
  try {
    const data = await fetch(url);

    if (data.status == 200) {
      const json = await data.json();
      return json;
    } else {
      throw new Error(data.status);
    }
  } catch (error) {
    // console.log(error);
    // Поч не работает
    throw error;
  }
}

loadJson("no-such-user.json") // (3)
  .catch((e) => console.log(e)); // Error: 404
