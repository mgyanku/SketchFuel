import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PromptService {
  api = "http://localhost:3000/";

  constructor(private http: HttpClient) {}

  getRandom() {
    return this.http.get(`${this.api}prompts/random`);
  }

  getAll() {
    return this.http.get(`${this.api}prompts/all`);
  }
}
