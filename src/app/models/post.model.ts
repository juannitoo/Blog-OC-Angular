export class Post {
  constructor (
    public index: number,
    public title: string,
    public content: string,
    public created_at: Date,
    public loveIts: number
  ) { }
}
