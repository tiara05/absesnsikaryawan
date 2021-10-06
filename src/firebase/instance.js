import axios from "axios";

export default axios.create({
    baseURL: "https://absensi-e2899-default-rtdb.firebaseio.com/"
})