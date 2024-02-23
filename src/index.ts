type ProductType = {
  title: string;
  price: number;
};

const addProductToChart = ({ title, price }: ProductType) => {
  console.log(title);
  console.log(price);
};

addProductToChart({ price: 2323, title: "IPhone" });

type UserType = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  nickName: string;
  age: number;
};

//============OMIT==========================

type UserUpdatedType = Omit<UserType, "id" | "email" | "password">;

let user: UserUpdatedType = {
  name: "xxx",
  surname: "xxx",
  nickName: "xxx",
  age: 20,
};

//=============TRACK_TYPES===========================

type UserUniquePropertiesType = {
  id: UserType["id"];
  email: UserType["email"];
};

const userUniqueProps = {
  id: "yyy",
  email: "rob@gmail.com",
};

//==============KEYS=========================

type UserKeys = keyof UserUpdatedType;

const userKey: UserKeys = "nickName";

//==============OVERRIDE================

type User2Type = {
  id: string;
  email: string;
  password: string;
  name: string;
  surname: string;
  nickName: string;
  age: number;
};

type UserStringifiedType = {
  [key in keyof User2Type]: string;
};

// const userDetails: UserStringifiedType = {
//   email: '23432',
// };

//===========PICK==========

type UserTitleType = Pick<User2Type, "name" | "surname"> & {
  middleName: string;
};

const userTitle: UserTitleType = {
  name: "Vytautas",
  surname: "Antanavicius",
  middleName: "Von",
};

//===========Partial=============

type UserUpdateDetailType = Partial<User2Type>;

const userDetails: UserUpdateDetailType = {
  name: "Tadas",
  nickName: "tadas123",
};

user = { ...user, ...userDetails };

// 1. Sukurti knygos tipą, knyga turi turėt bent 5 keys ir id.
type BookType = {
  title: string; 
  author: string; 
  year: number; 
  press: string; 
  language: string; 
  id: string;
}

// 2. Pakurti knygos įrašymo tipą BookCreationType. Jame neturi būt id. // Naudot omit.
type BookCreationType = Omit<BookType, 'id'> 
let book1: BookCreationType = {
  title: 'I had nowhere to go', 
  author: 'Jonas Mekas', 
  year: 1991, 
  press: 'Penguin', 
  language: 'english', 
}
console.log(book1);



// 3. Parašyt knygos update tipą, kuris į objektą priimtu tik title ir author. // Naudot pick
type UpdatedBookType = Pick<BookType, 'title' | 'author'>
let book2: UpdatedBookType = {
  title: 'I had nowhere to go',
  author: 'Jonas Mekas', 
}
console.log(book2);


// 4. Atskirai apsirašyt knygos id tipą.
type BookUniquePropertyType = {
  id: BookType['id']
}
const uniqueBookID = {
id:'xy15z'
}
console.log('Book ID:',uniqueBookID);


// 5. Apsirašyt automobilio tipą. 
type CarType = {
brand: string; 
model: string; 
year: number; 
fuel: string; 
price: number;
}

// Apsirašyt tipą CarUpdateType naudojant PARTIAL. Susikurt kintamąjį išsibandymui.
type CarUpdateType = Partial<CarType>

const carDetails: CarUpdateType = {
  year: 2006, 
  price: 5000, 
  fuel: 'gasoline',
}
console.log(carDetails);


// 6. Aprašyt funckija  kuri priima book (be id) ir isideda į savo masyvą bei atvaizduoje log'e visas masyvo knygas.
const bookShelf: BookCreationType[] = []

const addBookToShelf = ({title, author, year, press, language}: BookCreationType) => {
  const newBook: BookCreationType = {title, author, year, press, language} 
  bookShelf.push(newBook)
  console.log('Book added to shelf:', newBook.title);
  
}

addBookToShelf({title:'Tralialia', author:'Jokubas Jokubauskas', year:1973, press:'Aukso zuvys', language:'lithuanian'})
addBookToShelf({title:'Catch 22', author:'Joseph Heller', year:1965, press:'Penguin', language:'english'})
addBookToShelf({title:'Silva Rerum', author:'Kristina Sabaliauskaite', year:2008, press:'Baltos Lankos', language:'lithuanian'})

console.log('Books in a shelf:',bookShelf);

// 7. Supushint kodą į gitbubą.
// 8. CAO TS 4, 5 tema;
