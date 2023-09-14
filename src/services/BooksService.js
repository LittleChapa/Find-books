class BooksService {
  getResource = async (url) => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  };

  getAllBooks = (title) => {
    return this.getResource(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAovvO72JN7pb7P2HPla7HJa9LyPtf_LBs`
    );
  };
}

export default BooksService;
