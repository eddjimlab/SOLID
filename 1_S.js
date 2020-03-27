//Single Responsibility Principle
//Здесь один класс отвечает за обработку новости
//А второй за вывод или отображение этой новости
class News {
    constructor(title, text) {
        this.title = title
        this.text = text
        this.modified = false
    }

    update(text) {
        this.text = text
        this.update = true
    }

}

class Print {
    constructor(news) {
        this.news = news
    }

    toHtml() {
        return `
        <div>
            <h1>${this.news.title}</h1>
            <p>${this.news.text}</p>
        </div>
        `
    }
    toJson(){
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: true
        }, null, 2)
    }
    toXml(){
        return `
        <news>
            <title>${this.news.title}</title>
            <text>${this.news.text}</text>
        </news>
        `
    }
}

const news = new News('Путин', 'Очень хочет перевыборы')
const print = new Print(news)
console.log(print.toHtml())
console.log(print.toJson())
console.log(print.toXml())
