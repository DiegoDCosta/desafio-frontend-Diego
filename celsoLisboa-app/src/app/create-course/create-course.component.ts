import { Component, OnInit } from '@angular/core';
import { CreateCourseService } from './create-course.service';
import { CreateCourse } from './create-course';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit {

  constructor( private service: CreateCourseService) { }

    //recebe os dados de professores
    professor: CreateCourse[];
  ngOnInit() {
    this.service.getProfessores()
    .subscribe(
      dados => this.professor = dados
    );
  }

}