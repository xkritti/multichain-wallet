const WEB_BACKEND = "http://localhost:4000";

export const signup = async (data: { email: string; password: string }) => {
  const bodyData = {
    email: data.email,
    password: data.password,
  };
  try {
    const url = `${WEB_BACKEND}/singup`;

    let headerData = {
      "Content-Type": "application/json",
    };
    let fetchOption: any = {
      method: "POST",
      headers: headerData,
      body: JSON.stringify(bodyData),
    };

    try {
      const resp = await fetch(url, fetchOption);
      const result = await resp.json();
      return result.data;
    } catch (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};

