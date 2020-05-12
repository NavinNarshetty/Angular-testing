import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  getDetails(){
    const result = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('Data')
      }, 1000);
    })
    return result
  }
}
