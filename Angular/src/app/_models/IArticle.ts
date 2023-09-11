




export class IArticle{

    constructor(

       public id:number,
       public title:string,
       public content:string,   
       public updatedAt:Date,
       public publishedBy :string,
    ){}

}