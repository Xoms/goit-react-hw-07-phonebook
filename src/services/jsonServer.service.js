import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:9000/contacts';

class jsonServerApi {

    addContact(newContact) {
        return axios.post('/', newContact);
    }

    delContact(id) {
        return axios.delete(`/${id}`)
    }
    getContacts(){
        return axios.get('/'); 
    }
}

export default new jsonServerApi();