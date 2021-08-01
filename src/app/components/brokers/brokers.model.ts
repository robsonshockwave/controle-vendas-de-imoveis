export interface Brokers {
    id?: number
    nomeCorretor: string
    creci: string
    tipo: string
    salario?: number | null
    dataAdmissao?: Date | null
    percentualComissao?: number | null
}