const db = require('../db')

module.exports.getAllArticles = async ()=>{

    const rows = await db.query("SELECT * FROM articles")
    .catch(err=> console.log(err))
    
    return (rows[0])
}

module.exports.addArticles = async (obj)=>{
    
    const rowsAffected = await db.query("INSERT INTO articles (id, title, content, updatedAt, publishedBy) VALUES (?,?, ?, ?, ?)",
    [obj.id, obj.title, obj.content, obj.updatedAt, obj.publishedBy])

    return (rowsAffected)
}
