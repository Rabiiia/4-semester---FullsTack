import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './schema';
import books from './data'


// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
      books: () => books,
    },
    Mutation: {           //args -s
      addBook: (_parent, {input}, _context) => {
        const book = {
          id: books.length+1,
          title: input.title, //args.input.title
          author: input.author
        }
        books.push(book);
        return book;
      },
      deleteBook:(_parent, {id},_context) => {
        const book = books.find(book => book.id === parseInt(id));
        books.splice(books.indexOf(book), 1);
        return book;
      }
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);