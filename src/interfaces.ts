export interface INews {
    title: string
    text: string
    author: string
    keywords: Array<string>
    date: number
    link: string
};

export interface IUsers {
    nickname: string
    firstName: string
    lastNane: string
    email: string
    password: string
    isAdmin: boolean
}

export interface ICurrencies {
    Cur_Abbreviation: string
    Cur_ID: number
    Cur_Name: string
    Cur_OfficialRate: number
    Cur_Scale: number
    Date: string
}
