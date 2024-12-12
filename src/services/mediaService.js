const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/entertainment`;

const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

export { index };

const create = async (FormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(FormData),
    });
    return res.json();
  } catch (err) {
    console.log(err);
    return JSON.stringify({ message: err.message });
  }
};
export { create };
