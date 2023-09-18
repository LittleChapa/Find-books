import errorImg from '../images/errImg.png';

class BooksService {
  _apiKey = 'AIzaSyC2PWvHPXiwWuRGDncz5HccwQHCBptBxr4';
  _maxRes = '10';

  getResource = async (url) => {
    let res = await fetch(url);
    // console.log(res);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getSearchBooks = async (title, startIndex) => {
    // console.log(title);
    const res = await this.getResource(
      `https://www.googleapis.com/books/v1/volumes?q=${title.replace(/ /g, '+')}&startIndex=${startIndex}&maxResults=${
        this._maxRes
      }&key=${this._apiKey}`
    );
    return await res.items.map(this._transformBooks);
  };

  _transformBooks = (books) => {
    return {
      id: books.id,
      title: books.volumeInfo.title,
      descr: !books.volumeInfo.description ? 'Нет описания' : books.volumeInfo.description,
      image: !books.volumeInfo.imageLinks ? errorImg : books.volumeInfo.imageLinks.thumbnail,
    };
  };
}

export default BooksService;
