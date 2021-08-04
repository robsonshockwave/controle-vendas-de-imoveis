import { Component, OnInit } from '@angular/core';
import { Report } from '../report.model';
import { ReportService } from '../report.service';

@Component({
  selector: 'app-report-read',
  templateUrl: './report-read.component.html',
  styleUrls: ['./report-read.component.css']
})
export class ReportReadComponent implements OnInit {

  teste: any
  coco: []
  report: Report[]
  yearMonth: string
  displayedColumns = ['faturamento', 'lucro', 'qtdImoveisVendidos', 'qtdImoveisEncalhados', 'listaFaturamentoCorretores', 'periodo', 'listaPagamento', 'funcionarioMes']

  constructor(private reportService: ReportService) { }

  ngOnInit(): void {
    /*
    this.reportService.read().subscribe(report => { 
      this.report = report
      console.log(report)
    })
    */
  }

  getReadData(): void {
    this.reportService.readData(this.coco).subscribe(reporttt => {
      this.report = reporttt
      // console.log(this.data) 
      console.log(reporttt)
    })
  }
}

