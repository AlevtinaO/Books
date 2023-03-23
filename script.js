
let books = [
    {
        id:1,
        title: "Путешествие на Кон-Тики",
        authors: "Тур Хейердал",
        year: "2022",
        publish: "'АСТ'",
        image: "images/1.jpg"
    },

    {
        id:2,
        title: "Ра",
        authors: "Тур Хейердал",
        year: "2020",
        publish: "'АСТ'",
        image: "images/2.jpg"  
    },

    {
        id:3,
       title: "Аку Аку",
        authors: "Тур Хейердал",
        year: "2021",
        publish: "'АСТ'",
        image: "images/5.jpg"  
    },

    {
        id:4,
        title: "Мальдивская загадка",
        authors: "Тур Хейердал",
        year: "2021",
        publish: "'АСТ'",
        image: "images/4.jpg"
    },

    {
        id:5,
        title: "Экспедиция 'Тигрис'",
        authors: "Тур Хейердал",
        year: "2015",
        publish: "Амфора",
        image: "images/3.jpg"
    }
]
// объект, куда пишется всё в HTML
const mainContainer = document.getElementById("main")

// создание шаблона, куда добавляются данные из массива
function renderBook() {
    mainContainer.innerHTML=""
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
       <button onclick="deleteBook(${book.id})" class="style-button right">Удалить</button>
    </div>
    </div>
    `
})
}
// удаление книг
function deleteBook(id){
    const book=books.find((b)=>{
        return b.id===id
    })
    const bookIndex=books.indexOf(book)
    books.splice(bookIndex,1)
    renderBook()
    saveToLocalStorage()
}

//добавление функции очистки полей
function clearForm(){
    const titleValue=document.getElementById('title').value=""
    const authorsValue=document.getElementById('authors').value=""
    const yearValue=document.getElementById('year').value=""
    const publishValue=document.getElementById('publish').value=""
    const imageValue=document.getElementById('image').value=""  
}
//добавление функции, что именно добавляется и создание объекта по образцу уже существующих
function addBook() {
const titleValue=document.getElementById('title').value
const authorsValue=document.getElementById('authors').value
const yearValue=document.getElementById('year').value
const publishValue=document.getElementById('publish').value
const imageValue=document.getElementById('image').value

const newBook = {
    title: titleValue,
    authors: authorsValue,
    year: yearValue,
    publish:publishValue,
    image:imageValue
}

books.push(newBook) // добавление новой книги
clearForm()   // функция очистки
renderBook() // функция добавления книги, переписывающая список
closeModal()
saveToLocalStorage()
}

//сохранение в Local Storage
function saveToLocalStorage(){
const BookJSON=JSON.stringify(books)
localStorage.setItem("BookSt",BookJSON)
}

const BookJSON=localStorage.getItem("BookSt")
const BackBook=JSON.parse(BookJSON)

if(BookJSON)
books=BackBook

//модальное окно
const container = document.getElementById("formblock")
    const openBook = document.getElementById("addbook")
    const closeBook =document.getElementById("closebook")

    function closeModal(){
        container.style.display='none'
    }
    
    function openModal(){
        container.style.display='flex'
    }
//открытие закрытие
    closeBook.addEventListener('click',closeModal)
    openBook.addEventListener('click',openModal)
//сохранение
    const newBook=document.getElementById("newbook")
    newBook.addEventListener('click',addBook)



renderBook() // вызов функции, чтобы существующий список был виден
 
//функция открытия и закрытия формы
/*let isOpen = false

function addMenu() {
    const container = document.getElementById("formblock")
    const addBook = document.getElementById("addbook")
    const closeBook =document.getElementById("closebook")

    if (isOpen) {
       container.style.display = "none" 
       closeBook.style.display = "none"
       addBook.style.display = "flex"
       isOpen = false
    }
    else {
       container.style.display = "flex" 
       addBook.style.display = "none"
       closeBook.style.display = "flex"
       isOpen = true
    }
    
}*/




