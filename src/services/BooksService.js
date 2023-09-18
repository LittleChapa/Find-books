import errorImg from "../images/errImg.png";

class BooksService {
  _apiKey = "AIzaSyCplC0EtGawOReZ79uOHW7WlrJ8wGamliQ";

  getResource = async (url) => {
    let res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getSearchBooks = async (title) => {
    // console.log(title);
    const res = await this.getResource(
      `https://www.googleapis.com/books/v1/volumes?q=${title.replace(/ /g, "+")}&key=${this._apiKey}`
    );
    return await res.items.map(this._transformBooks);
  };

  _transformBooks = (books) => {
    return {
      id: books.id,
      title: books.volumeInfo.title,
      descr: books.volumeInfo.description,
      image: !books.volumeInfo.imageLinks ? errorImg : books.volumeInfo.imageLinks.thumbnail,
    };
  };
}

export default BooksService;
