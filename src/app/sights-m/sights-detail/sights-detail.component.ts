import {Component, Input, OnInit} from '@angular/core';
import {SightseeingPoint} from '../../models/sightseeing-point';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sights-detail',
  templateUrl: './sights-detail.component.html',
  styleUrls: ['./sights-detail.component.scss']
})
export class SightsDetailComponent implements OnInit {
  @Input() modal: any;
  @Input() currentSight!: SightseeingPoint;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
