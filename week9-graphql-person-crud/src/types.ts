type Book = {
    id: string;
    title: string;
    author: string;
    categoryId: string;
};
type Category = {
    id: string;
    name: string;
};
type Person = {
    id: string;
    name: string;
    age: Number;
    addressId: string;
};
type Address = {
    id: string;
    address: string;
    housenumber: Number;
};
type Rating = {
    id: string;
    value: number;
    title: string;
    description: string;
    bookId: string;
};
type Context = {
    categories: Category[];
    ratings: Rating[];
    books: Book[];
    people: Person[];
    addresses: Address[];
};
type Args = {
    id: string;
    input: Book | Rating | Address | Person ;
};
export type { Book, Category, Rating, Context, Args, Person, Address };