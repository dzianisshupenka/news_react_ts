import React, {useState} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import HelpPage from './pages/help';
import MainPage from './pages/main';
import { INews } from './interfaces';
import AddForm from './components/AddForm';

const initialNews = [
  {
      title: "Новости погоды",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci architecto nulla similique? Nihil eum optio totam eaque et quibusdam? Pariatur error voluptatem modi sint cupiditate voluptate, beatae quas doloribus consequatur hic molestias unde ut repellat dolore, ullam necessitatibus? Nihil doloribus ratione fugiat at placeat iure cumque a nemo odit. Aspernatur optio corporis, perspiciatis repudiandae beatae amet, sint aut sequi velit obcaecati accusantium deleniti id harum quisquam ullam nulla neque possimus quae dignissimos vel. Voluptate illum doloribus cupiditate, eveniet id perspiciatis veniam alias eos sed reprehenderit corrupti molestiae eum fuga? Voluptatibus alias iste facere voluptate? Quo reiciendis dolor veniam tempora consequuntur ut eligendi, mollitia sunt, doloribus, eveniet provident asperiores. Unde tempore dolor magnam ab fuga, a distinctio error expedita possimus quibusdam blanditiis facilis quos. Quo dolorem ea minima rerum dolore possimus non sit impedit hic, odio atque ex eum repellat neque, at temporibus dicta mollitia. Pariatur, beatae voluptate omnis rerum iure quis dolore nostrum velit reprehenderit officia ipsam error consequatur voluptatum quo aut et saepe natus nisi? Minus alias cumque numquam, molestias blanditiis, modi odit reprehenderit ipsum dicta non minima rerum adipisci porro molestiae qui illum quaerat, accusantium ipsam maxime vel iure! Labore quis et ducimus maiores earum consequuntur incidunt!",
      author: "Сергей",
      keywords: [
          "погода", "Минск"
      ]
  },
  {
      title: "Чемпионат по волейболу в Минске",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil alias, inventore, dolores aspernatur molestias vero sint eaque quisquam id provident. Ducimus a tenetur dolorem delectus? Commodi expedita cum voluptatibus iste, adipisci sapiente possimus, voluptatum quod aliquid recusandae quis quidem, cupiditate sequi perferendis amet voluptates dignissimos praesentium maiores debitis ex neque beatae saepe explicabo corrupti. Doloremque aliquam earum amet ut in libero nesciunt quaerat, fugiat temporibus, quasi neque impedit accusantium doloribus optio ullam nobis, deserunt odit obcaecati repellat id et hic veritatis dicta! Error enim consectetur aspernatur magni accusamus similique minima voluptate totam ducimus nesciunt quasi excepturi alias architecto vero officia aperiam velit, delectus voluptatum et. Accusamus, consequuntur, ducimus, pariatur itaque cumque ad veritatis iste adipisci consequatur sint assumenda tempore dolorem ex officiis blanditiis distinctio? Reiciendis, saepe? Officia deserunt quidem laudantium provident doloremque, libero nulla nam, quia ducimus obcaecati eos. Dolorem aliquam accusamus ab cupiditate quos dolorum necessitatibus. Saepe, obcaecati ipsam, mollitia dolores aspernatur ea hic voluptatum amet quasi error, illo commodi totam quod assumenda eligendi officia ducimus? Tenetur magni, nisi velit porro earum corporis veniam hic a accusantium, itaque totam ad aperiam inventore facilis quis illum pariatur rem nam voluptate tempora architecto magnam incidunt. Eligendi ipsa officia quam et? Deleniti repellat fugit temporibus necessitatibus! Quam quia dolorum necessitatibus qui quos. Cum, delectus nam voluptatibus eos possimus minima blanditiis accusamus numquam nobis minus fugiat expedita a nisi quis pariatur totam sapiente saepe suscipit vitae quibusdam reprehenderit. Voluptas sint similique consectetur molestias adipisci placeat tempora temporibus expedita sed nostrum iste, omnis odio corrupti? Amet laborum omnis ipsa, praesentium sapiente sit nemo suscipit nam pariatur! Voluptatibus, consequuntur qui cupiditate a corporis eos iure quo, dignissimos voluptate quis quisquam optio sed sunt voluptatum eaque enim! Optio sint magnam explicabo esse neque eaque ut molestias placeat, ratione commodi illo voluptate ipsa quia quaerat cupiditate aliquid exercitationem. Veritatis sed neque, maxime atque necessitatibus quidem molestias, quaerat quam, aliquam eos est temporibus obcaecati doloremque mollitia animi debitis rem cum ipsa laborum repudiandae officiis tenetur placeat. Ab consectetur earum, autem, fugiat quisquam mollitia exercitationem, repellat modi eveniet minus explicabo tempora architecto incidunt ullam iste. Repellat est repudiandae illo, dolor magni similique maiores. Ducimus minima mollitia in aspernatur iste dolores est corrupti beatae, magnam corporis consequuntur ratione laborum quidem animi iusto repellat itaque? Ab neque harum dicta. Error nisi sequi, natus id ab mollitia amet tenetur ex debitis rerum itaque facilis sed laudantium sunt ipsum deleniti aspernatur voluptatibus quibusdam necessitatibus quasi saepe veritatis veniam doloremque. Officia magni blanditiis assumenda exercitationem asperiores explicabo veritatis accusantium eaque rem sapiente provident atque autem non fuga voluptates quis, doloremque reiciendis pariatur eveniet! Cupiditate atque saepe exercitationem distinctio reiciendis possimus obcaecati enim. Ut deserunt voluptatibus sapiente! Beatae repellat expedita aliquid voluptates ratione reprehenderit quam odio, praesentium placeat suscipit ipsam officia, quaerat ducimus sint dolore, qui possimus vitae! Unde sunt expedita est fugiat sapiente? Laborum iure ad explicabo molestiae consequuntur pariatur autem unde impedit veritatis saepe amet, at iusto cum quo perferendis quia voluptates harum, delectus optio recusandae accusamus eius distinctio reprehenderit. Minus, a.",
      author: "Иван",
      keywords: [
          "спорт", "волейбол"
      ]
  }
]

const App: React.FC = () => {

  const [news, setNews] = useState<INews[]>(initialNews);
  const [allNews, setAllNews] = useState<INews[]>(initialNews);
  const [visible, setVisible] = useState(false);
  const [editing, setEditing] = useState<INews>();
  const [editinIndex, setEditingIndex] = useState(-1);

  const allKeywords: Array<string> = ['allNews'];
    
  allNews.reduce((acc, item) => {
      item.keywords.forEach(i => {
          if(!acc.includes(i)) {
              acc.push(i)
          }
      });
      return acc;
  }, allKeywords)

  const addNews = (newItem: INews) => {
    if(editinIndex >= 0) {
      setNews(prev => {
        prev.splice(editinIndex, 1, newItem);
        return prev;
      })
      setAllNews(prev => {
        prev.splice(editinIndex, 1, newItem);
        return prev;
      })
      setEditingIndex(-1);
      setEditing(undefined);
    } else {
      setNews(prev => [newItem, ...prev]);
      setAllNews(prev => [newItem, ...prev]);
    }
  }

  const removeItem = (id:number) => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Вы действительно хотите удалить новость?");

    if(result) {
      const filtered = news.filter((item, index) => id !== index);
      setNews(filtered);
      setAllNews(filtered);
    }

  }

  const filterNews = (keyword: string) => {
    if(keyword === 'allNews') {
      setNews(allNews)
    } else {
      const filtered = allNews.filter(item => {
        return item.keywords.includes(keyword);
      });
      setNews(filtered);
    }

  }

  const editItem = (id: number) => {
    setEditing(news[id]);
    setVisible(true);
    setEditingIndex(id);
  }

  const toogleVisible = () => {
    setVisible(prev => !prev);
  }

  return (
    <BrowserRouter>
    <div className="container">
      <Header show={toogleVisible} />
      <AddForm editing={editing} addNews={addNews} visible={visible} hide={toogleVisible} />
      <div className="content">
        <Switch>
          <Route render={() => (
            <MainPage allKeywords={allKeywords} filter={filterNews} news={news} remove={removeItem} edit={editItem} />
          )} path="/" exact />
          <Route component={HelpPage} path="/help"/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
