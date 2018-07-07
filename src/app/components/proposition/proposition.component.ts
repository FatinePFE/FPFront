import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProposalControllerService } from 'app/api/proposalController.service';
import { Proposal } from 'app/model/proposal';


@Component({
  selector: 'app-proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PropositionComponent implements OnInit {
  public proposals: Proposal[];

  constructor(private proposalService: ProposalControllerService) {
  }

  public search():void {
    this.proposalService.findAllUsingGET().subscribe(proposals => this.proposals = proposals);
  }

  ngOnInit() {
    this.search();
  }

}
