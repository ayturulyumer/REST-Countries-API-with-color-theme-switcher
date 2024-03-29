export const request = async (method, url) => {
    const response = await fetch(url, {
      method,
    });
  
    if (!response.ok) {
      const result = await response.json();
      throw result;
    }
    const result = await response.json();
    return result;
  };
  
  export const get = request.bind(null, "GET");
  export const post = request.bind(null, "POST");
  export const put = request.bind(null, "PUT");
  export const del = request.bind(null, "DELETE");
  export const patch = request.bind(null, "PATCH");