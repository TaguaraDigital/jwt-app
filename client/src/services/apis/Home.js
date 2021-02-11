const HomeFinder = {};
// const URL = "https://ywf-backend-express.herokuapp.com/api/v1/restaurants/"
const URL = "http://localhost:3500/dashboard/"


HomeFinder.home = async (user) => {
    const response = await fetch(URL, {
        method: "GET",
        headers: { token: localStorage.token},
    })
    return await response.json()
}

export default HomeFinder;