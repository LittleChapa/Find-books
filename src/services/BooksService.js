class BooksService {
  _apiKey = 'AIzaSyCrH_RKBJ0_Y1jR6ZskkBDVs--yWCOsI9g';

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getSearchBooks = async (title) => {
    const res = await this.getResource(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${this._apiKey}`);
    return res.items.map(this._transformBooks);
  };

  _transformBooks = (books) => {
    return {
      id: books.id,
      title: books.volumeInfo.title,
      descr: books.volumeInfo.description,
      image: books.volumeInfo.imageLinks.thumbnail,
    };
  };
}

export default BooksService;
