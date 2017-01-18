import { Injectable } from '@angular/core';

import { LfApiService } from './lf-api.service';

@Injectable()
export class ProjectService {

  constructor(private lfApiService: LfApiService) {
    
  }

  getProjectList() {
    return this.lfApiService.project_list().map(response => {
      if (response.success) {
        localStorage.setItem('current_user_projects', response.data.entries);
      }
      return response.data;
    });
  }

  getWordList(id: string) {
    return this.lfApiService.lex_dbeDtoFull_by_id(id).map(response => {
      if (response.success) {
        localStorage.setItem('current_user_words', response.data.entries);
      }
      return response.data;
    });
  }

  selectProject(id: string){
    
  }
  
}