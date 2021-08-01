export interface Payment {
    id?: number
    nomeCorretor: string
    tipoCorretor: string
    dataAdmissao?: Date | null
    valorRecebido?: number | null
}