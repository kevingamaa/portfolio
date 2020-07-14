import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-skill-ne',
    templateUrl: './skill-ne.component.html',
    styleUrls: ['./skill-ne.component.scss']
})
export class SkillNeComponent implements OnInit {
    public neType: string = 'Adicionar';
    public form: FormGroup = this.fb.group({
        name: ['', Validators.required],
        icon: [''],
        learned_at: [''],
        level_percent: [0],
        view_name: [false]
    });
    public appearance = 'outline';
    constructor(
        private route: ActivatedRoute,
        private fb: FormBuilder
    ) { }

    ngOnInit(): void {

    }



    public getType() {
        if (this.route.snapshot.params.id) {
            this.neType = 'Editar'
        }
    }

}
