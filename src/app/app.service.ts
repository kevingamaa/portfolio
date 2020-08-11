import { Injectable } from '@angular/core';



export namespace KfApp { 
  export type Themes = 'indigo-light' | 'blue-dark' | 'gray-dark' | 'gray-light' | 'green-dark' | 'pink-dark' | 'red-light' | 'teal-light';

  export type config = {
    theme: Themes
  } 

}
@Injectable({
  providedIn: 'root'
})
export class AppService {
  public config: KfApp.config = {
    theme: 'indigo-light'
  };
  constructor() { }
  
  public useTheme(theme:  KfApp.Themes) {
    this.config.theme = theme;
  }
}
