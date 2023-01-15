import axios from 'axios';

let API_URL = 'http://localhost:8090/news/';

class newService {
  createTransaction(transaction){
    return axios.post(API_URL + 'tag', JSON.stringify(transaction),
  {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }

  filterTransactions(userId){
    return axios.get(API_URL + 'user/'+ userId,
  {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }

  filterStudents(courseId){
    return axios.get(API_URL + 'course/' + courseId,
  {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }

  findAllCourses(){
    return axios.get(API_URL + 'all',
    {headers: {'Content-Type':'application/json; charset=UTF-8'}});
  }
}
export default new newService();