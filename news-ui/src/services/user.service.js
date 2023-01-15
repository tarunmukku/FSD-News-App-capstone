import axios from 'axios';
import {BehaviorSubject} from 'rxjs';

const API_URL = 'http://localhost:8090/user/';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
class UserService {
  get currentUserValue(){
    return currentUserSubject.value;
  }

  get currentUser(){
    return currentUserSubject.asObservable();
  }

  login(user){
    const headers = {
      authorization:'Basic ' + btoa(user.username + ':' + user.password),
      'Access-Control-Allow-Origin': '*'
    };
    return axios.get(API_URL + 'login', {headers: headers}).then(response => {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      currentUserSubject.next(response.data);
    });
  }
  loginUser(username,password){
    const headers = {
      authorization:'Basic ' + btoa(username + ':' + password),
      'Access-Control-Allow-Origin': '*'
    };
    return axios.get(API_URL + 'login', {headers: headers}).then(response => {
      localStorage.setItem('currentUser', JSON.stringify(response.data));
      currentUserSubject.next(response.data);
    });
  }

  logOut(){
    return axios.post(API_URL + 'logout', {}).then(response => {
      localStorage.removeItem('currentUser');
      currentUserSubject.next(null);
    })
  }

  register(user){
    const headers = {
        'Content-Type':'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      };

    return axios.post(API_URL + 'registration', JSON.stringify(user),
    {headers: headers});
  }

}

export default new UserService();