import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { exp, courses, skills, langs } from './data';
import * as jsPDF from 'jspdf';
import domtoimage from 'dom-to-image';
import { AppService } from 'src/app/app.service';


@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
    public experiencies: any[] = exp;

    public languages: any[] = langs
    public skills: any[] = skills;
    public courses: any[] = courses;
    public themes: any = ['indigo-light', 'blue-dark', 'gray-dark', 'gray-light', 'green-dark', 'pink-dark', 'red-light', 'teal-light'];
    constructor(
        public app: AppService
    ) { }

    ngOnInit() {

    }


    public getSkill(filter: { field: string, operator?: '>=' | '<=' | '==', value: string | string[], orderBy?: string }) {
        if (!filter.operator) {
            filter.operator = '==';
        }
        if (typeof filter.value == 'string') {
            filter.value = [filter.value];
        }
        let skills: any[] = this.skills.filter(skill => {
            for (let value of filter.value) {
                let field = String(skill[filter.field]).toLowerCase().trim();
                value = String(value).toLowerCase().trim();
                if (eval(`'${field}' ${filter.operator} '${value}'`)) {
                    return skill;
                }
            }
        });

        if (filter.orderBy) {
            skills = skills.sort((a, b) => {
                if (a[filter.orderBy] < b[filter.orderBy]) {
                    return 1;
                }
                if (a[filter.orderBy] > b[filter.orderBy]) {
                    return -1;
                }
                return 0;
            })
        }

        return skills;
    }



    public getLevel(level) {

        if (level <= 50) {
            return 'Basic';
        } else if (level > 50 && level <= 70) {
            return 'Intermediate';

        } else if (level > 70 && level <= 80) {
            return 'Advanced';

        } else if (level > 80) {
            return 'Expert';
        }
    }


    public download(el: HTMLElement) {

        domtoimage.toPng(el).then((resume) => {
            const doc = new jsPDF('p', 'pt','a4',true);
            doc.addImage(resume, 'PNG', 0, 0, null, null, '','FAST');
            doc.save(`fullstack-developer-resume(kevin).pdf`);
        }).catch((error) => {
            console.log(error)
        });
    }
}
