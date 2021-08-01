export interface Report {
    id?: number
    faturamentoTotal: number
    lucroImboliaria: number
    imoveisVendidos: number
    imoveisEncalhados: number
    faturamentoCorretor: []
    valorPagoCorretor: []
    corretorDoMes: string
    data: Date
}