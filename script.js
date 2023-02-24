
let books = [
    {
        title: "Путешествие на Кон-Тики",
        authors: "Тур Хейердал",
        year: "2022",
        publish: "'АСТ'",
        image: "images/1.jpg"
    },

    {
        title: "Ра",
        authors: "Тур Хейердал",
        year: "2020",
        publish: "'АСТ'",
        image: "images/2.jpg"  
    },

    {
       title: "Аку Аку",
        authors: "Тур Хейердал",
        year: "2021",
        publish: "'АСТ'",
        image: "images/5.jpg"  
    },

    {
        title: "Мальдивская загадка",
        authors: "Тур Хейердал",
        year: "2021",
        publish: "'АСТ'",
        image: "images/4.jpg"
    },

    {
        title: "Экспедиция 'Тигрис'",
        authors: "Тур Хейердал",
        year: "2015",
        publish: "Амфора",
        image: "images/3.jpg"
    }
]

const mainContainer = document.getElementById("main")


books.forEach(function(book) {
    mainContainer.innerHTML += `
    <div class="books">
    <img class="image" src="${book.image}"/>
    <h1 class="title-book">${book.title}</h1>
    <p>${book.authors}</p>
    <p class="gray">${book.year}</p>
    <p class="gray">${book.publish}</p>
    <div class="button">
       <button class="style-button left">Изменить</button>
       <button class="style-button right">Удалить</button>
    </div>
    </div>
    `
})
 

