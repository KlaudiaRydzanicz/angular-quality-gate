import {Component, OnInit} from '@angular/core';
import {SightseeingPoint} from '../models/sightseeing-point';
import {SightsService} from '../services/sights.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {SightsDetailComponent} from "../sights-m/sights-detail/sights-detail.component";

@Component({
  selector: 'app-sights-list',
  templateUrl: './sights-list.component.html',
  styleUrls: ['./sights-list.component.scss']
})
export class SightsListComponent implements OnInit {

  sights: SightseeingPoint[];

  constructor(private sightsService: SightsService, private router: Router, private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.sightsService.getSights().subscribe(sights => {
      this.sights = sights;
    });
  }
  editObject(sight: SightseeingPoint): void {
    this.router.navigateByUrl(`/edit/${sight.id}`).catch(console.error);
  }

  newObject(): void {
    this.router.navigateByUrl(`/add`).catch(console.error);
  }
  open(currentSight: SightseeingPoint): void {
    const modalRef = this.modalService.open(SightsDetailComponent, {ariaLabelledBy: 'modal-basic-title'});
    modalRef.componentInstance.currentSight = currentSight;
  }
}
