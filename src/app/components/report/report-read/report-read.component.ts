import { Component, OnInit } from '@angular/core';
import { Report } from '../report.model';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-read',
  templateUrl: './report-read.component.html',
  styleUrls: ['./report-read.component.css']
})
export class ReportReadComponent implements OnInit {

  data: string
  report: Report[]
  yearMonth: string
  displayedColumns = ['faturamentoTotal', 'lucroImobiliaria', 'imoveisVendidos', 'imoveisEncalhados', 'faturamentoCorretor', 'valorPagoCorretor', 'corretorDoMes', 'data']

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {

    this.reportService.read().subscribe(report => { 
      this.report = report
      console.log(report)
    })

  }

  getReadData(): void {
    this.reportService.readData(this.data).subscribe(report => {
      this.report = report
      //console.log(this.data) 
      console.log(report)
    })
  }
}
