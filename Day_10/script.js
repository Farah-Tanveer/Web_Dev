// TASK 1
// Create an object book with:title,author,pages
// Print all values.

// TASK 2
//Add a method read() inside the object that prints:
// "Reading <title>"

// TASK 3
// Loop through the object and print keys + values.

// TASK 4
// Convert object to JSON string and back.

// TASK 5 (Thinking task)
// Answer in text:
// Why is JSON used instead of normal objects when sending data?
//JSON is used because it is a standard data format, and since it is converted into a string, it becomes easier to transfer between systems, languages, and over the network.
// That’s exactly the reason APIs use JSON.

let book={
    title:"ABC",
    author:"a.k jackson",
    pages:100,
    Read(){
        console.log("Reading",book.title)
    }
};
console.log(book);
book.Read();
for(let key in book){
    console.log(key,":",book[key]);
}

let jstr=JSON.stringify(book);
console.log(jstr);
//Functions are NOT stored in JSON->So Read() is removed in JSON.
//That’s expected behavior. JSON only supports:
//strings, numbers, booleans, arrays, objects
//This is EXACTLY why JSON is used for APIs.

let rev=JSON.parse(jstr);
console.log(rev);