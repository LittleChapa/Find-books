class BooksService {
  _apiKey = "AIzaSyAovvO72JN7pb7P2HPla7HJa9LyPtf_LBs";

  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getSearchBooks = async (title) => {
    const res = await this.getResource(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${this._apiKey}`
    );
    return res.items.map(this._transformBooks);
  };

  _transformBooks = (books) => {
    return {
      title: books.volumeInfo.title,
      descr: books.volumeInfo.description,
    };
  };
}

export default BooksService;
