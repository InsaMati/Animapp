import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos, IAnimapp } from './interfaces/animapp';

@Injectable({
  providedIn: 'root',
})
export class AnimappService {
  constructor(private http: HttpClient) {}

  apiKey: string = 'z7IsSRGLECQmstf0zBMfGJxM4o903ksY';
  resultados: Datos[] = [];

  buscarGif(query: string) {
    this.http
      .get<IAnimapp>(
        `https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`
      )
      .subscribe((response) => {
        this.resultados = response.data;
      });
  }
}
