const API_URL = process.env.REACT_APP_API_URL;

export const serviceCreateUser = async (user) => {
  try {
    const response = await fetch(`${API_URL}/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceUserById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const serviceUpdateUser = async (id, user) => {
  try {
    const response = await fetch(`${API_URL}/api/users/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
