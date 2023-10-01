var books = [
    { title: "Book1", author: "Author1", year: 2021, price: 500 },
    { title: "Book2", author: "Author2", year: 2022, price: 600 },
];

function findBook(name) {
    let bookOrder = -1;
    for(let i = 0; i < books.length; i++) {
        if (books[i].title == name){
            bookOrder = i;
        }
    }
    return bookOrder;
}

const addBook = () => {
    const book = {
        title: prompt("ชื่อหนังสือ"),
        author: prompt("ผู้เขียน"),
        year: parseInt(prompt("ปีที่พิมพ์")),
        price: parseFloat(prompt("ราคา")),
    };

    let bookOrder = findBook(book.title);

    if (bookOrder != -1) {
        alert(`มีหนังสือ ${book.title} แล้ว เพิ่มซ้ำไม่ได้`);
    } else {
        books.push(book);
        alert(`เพิ่มหนังสือ ${book.title} เรียบร้อยแล้ว`);
    }
};

const bookList = () => {
    if (books.length === 0) {
        alert("ยังไม่มีหนังสือในรายการ");
    } else {
        for(let i = 0; i < books.length; i++) {
            alert(`ชื่อหนังสือ ${books[i].title}\nผู้เขียน ${books[i].author}\nปีที่พิมพ์ ${books[i].year}\nราคา ${books[i].price}`);
        }
    }
};

const editBook = () => {
    let input = prompt("พิมพ์ชื่อหนังสือที่ต้องการแก้ไข :");
    let bookOrder = findBook(input);

    if (bookOrder != -1){

        alert(`พบหนังสือชื่อ ${input} ในรายการ`);

        const updateBook = {
            title: prompt("แก้ไขชื่อหนังสือ",books[bookOrder].title),
            author: prompt("แก้ไขผู้เขียน",books[bookOrder].author),
            year: parseInt(prompt("แก้ไขปีที่พิมพ์",books[bookOrder].year)),
            price: parseFloat(prompt("แก้ไขราคา",books[bookOrder].price)),
        };

        books[bookOrder].title = updateBook.title
        books[bookOrder].author = updateBook.author
        books[bookOrder].year = updateBook.year
        books[bookOrder].price = updateBook.price

        alert(`อัพเดตหนังสือ ${updateBook.title} เรียบร้อยแล้ว`);

    } else {
        alert(`ไม่พบหนังสือชื่อ ${input} ในรายการ`);
    }
};

const deleteBook = () => {
    let input = prompt("พิมพ์ชื่อหนังสือที่ต้องการแก้ไข :");
    let bookOrder = findBook(input);

    for(let i = 0; i < books.length; i++) {
        if (books[i].title == input){
            bookOrder = i;  
        }
    }

    if (bookOrder != -1){
        alert(`พบหนังสือชื่อ ${input} ในรายการ`);
        let confirm = prompt(`ต้องการลบหนังสือชื่อ ${input} ใข่หรือไม่\nพิมพ์ Y ต้องการลบ\nพิมพ์อย่างอื่นที่ไม่ใช่ Y เพื่อยกเลิก`);
        if (confirm == "Y") {
            delete books[bookOrder];
            alert(`ลบหนังสือชื่อ ${input} เรียบร้อย`);
        } else { 
            alert(`ยกเลิกการลบหนังสือชื่อ ${input} เรียบร้อย`);
        }

    } else {
        alert(`ไม่พบหนังสือชื่อ ${input} ในรายการ`);
    }
};

const main = () => {
    while (true) {
        let choice = prompt(
            "เลือกเมนูที่ต้องการ:\n1. เพิ่มหนังสือ\n2. ดูรายการหนังสือ\n3. แก้ไขหนังสือ\n4. ลบหนังสือ\n5. ออกจากโปรแกรม"
        );
        switch (choice) {
            case "1":
                addBook();
                main();
            case "2":
                bookList();
                break;
            case "3":
                editBook();
                break;
            case "4":
                deleteBook();
                break;
            case "5":
                alert("ออกจากโปรแกรม");
                document.getElementById("menu").innerHTML = "Good bye!";
                exit();
            default:
                main();
        }
    }
};
  
main();