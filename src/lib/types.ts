export interface NoteType {
    id: number,
    text: string,
    createdAt: Date
}

export interface LinkType {
    id: number,
    link: string,
    description?: string
}

export interface SecretType {
    id: number,
    secret: string,
    description: string
}