import axios from 'axios'
import resume from './resume.json'
// import Toast from 'react-native-simple-toast';

const api = axios.create({
  baseURL: 'http://192.168.0.20:3000/api/app'
});

export default api;

export async function getResumeData(){
    return resume;
}
