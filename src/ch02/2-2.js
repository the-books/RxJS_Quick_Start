class NewPaper {
  constructor() {
    this._observers = [];
  }
  setNews(news) {
    this.notify(news);
  }
  add(observer) {
    this._observers.push(observer);
  }
  remove(observer) {
    let idx = this._observers.indexOf(observer);
    if (idx !== 1) {
      this._observers.splice(idx, 1);
    }
  }
  notify(news) {
    this._observers.forEach(v => {
      v.update(news);
    });
  }
}

class NewsScrapper {
  update(news) {
    console.log(`뉴스 스크래퍼: ${news}`);
  }
}

class NewsReader {
  update(news) {
    console.log(`뉴스 리더: ${news}`);
  }
}

let newsPaper = new NewPaper();
newsPaper.add(new NewsScrapper());
newsPaper.add(new NewsReader());

newsPaper.setNews('북한 미사일 발사!');
newsPaper.setNews('코스피 최저점 이탈!');
