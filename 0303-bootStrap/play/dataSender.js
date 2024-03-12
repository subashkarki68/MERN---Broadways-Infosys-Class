const port = "3010";
const host = `http://localhost:${port}/api/v1`;
const sendDataUsingJSON = async () => {
  //TODO: Complete this
};

const sendDataWithMultipart = async () => {
  const rawFormData = document.getElementById("upload");
  const formData = new FormData(rawFormData);
  //   console.log(rawFormData);
  const result = await fetch(`${host}/users/register`, {
    method: "post",
    body: FormData,
  });
  //TODO: COMPLETE this
};

const sendData = async () => {
  try {
    const rawFormData = document.getElementById("upload");
    const formData = new FormData(rawFormData);
    console.log(formData);
    const { data } = await axios.post(`${host}/users/register`, formData);
    console.log(data);
  } catch (error) {
    console.error("Error during sendData:", error);
  }
};
