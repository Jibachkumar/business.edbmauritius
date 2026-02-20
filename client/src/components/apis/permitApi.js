const API_URL = import.meta.env.VITE_API_URL;

const fetchPermit = async(id) => {
    try {
        const response = await fetch(`${API_URL}/api/v1/permits/search-permit/${id}`)
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}

export { fetchPermit }