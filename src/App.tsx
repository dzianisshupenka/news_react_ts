import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/header';
import HelpPage from './pages/help';
import MainPage from './pages/main';
import { INews, IUsers } from './interfaces';
import AddForm from './components/AddForm';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import AdminPage from './pages/admin';

const initialNews = [
  {
      title: "Новости погоды",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci architecto nulla similique? Nihil eum optio totam eaque et quibusdam? Pariatur error voluptatem modi sint cupiditate voluptate, beatae quas doloribus consequatur hic molestias unde ut repellat dolore, ullam necessitatibus? Nihil doloribus ratione fugiat at placeat iure cumque a nemo odit. Aspernatur optio corporis, perspiciatis repudiandae beatae amet, sint aut sequi velit obcaecati accusantium deleniti id harum quisquam ullam nulla neque possimus quae dignissimos vel. Voluptate illum doloribus cupiditate, eveniet id perspiciatis veniam alias eos sed reprehenderit corrupti molestiae eum fuga? Voluptatibus alias iste facere voluptate? Quo reiciendis dolor veniam tempora consequuntur ut eligendi, mollitia sunt, doloribus, eveniet provident asperiores. Unde tempore dolor magnam ab fuga, a distinctio error expedita possimus quibusdam blanditiis facilis quos. Quo dolorem ea minima rerum dolore possimus non sit impedit hic, odio atque ex eum repellat neque, at temporibus dicta mollitia. Pariatur, beatae voluptate omnis rerum iure quis dolore nostrum velit reprehenderit officia ipsam error consequatur voluptatum quo aut et saepe natus nisi? Minus alias cumque numquam, molestias blanditiis, modi odit reprehenderit ipsum dicta non minima rerum adipisci porro molestiae qui illum quaerat, accusantium ipsam maxime vel iure! Labore quis et ducimus maiores earum consequuntur incidunt!",
      author: "Сергей",
      keywords: [
          "погода", "Минск"
      ],
      date: 1611356848019,
      link: 'localhost:3000'
  },
  {
      title: "Чемпионат по волейболу в Минске",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, nihil alias, inventore, dolores aspernatur molestias vero sint eaque quisquam id provident. Ducimus a tenetur dolorem delectus? Commodi expedita cum voluptatibus iste, adipisci sapiente possimus, voluptatum quod aliquid recusandae quis quidem, cupiditate sequi perferendis amet voluptates dignissimos praesentium maiores debitis ex neque beatae saepe explicabo corrupti. Doloremque aliquam earum amet ut in libero nesciunt quaerat, fugiat temporibus, quasi neque impedit accusantium doloribus optio ullam nobis, deserunt odit obcaecati repellat id et hic veritatis dicta! Error enim consectetur aspernatur magni accusamus similique minima voluptate totam ducimus nesciunt quasi excepturi alias architecto vero officia aperiam velit, delectus voluptatum et. Accusamus, consequuntur, ducimus, pariatur itaque cumque ad veritatis iste adipisci consequatur sint assumenda tempore dolorem ex officiis blanditiis distinctio? Reiciendis, saepe? Officia deserunt quidem laudantium provident doloremque, libero nulla nam, quia ducimus obcaecati eos. Dolorem aliquam accusamus ab cupiditate quos dolorum necessitatibus. Saepe, obcaecati ipsam, mollitia dolores aspernatur ea hic voluptatum amet quasi error, illo commodi totam quod assumenda eligendi officia ducimus? Tenetur magni, nisi velit porro earum corporis veniam hic a accusantium, itaque totam ad aperiam inventore facilis quis illum pariatur rem nam voluptate tempora architecto magnam incidunt. Eligendi ipsa officia quam et? Deleniti repellat fugit temporibus necessitatibus! Quam quia dolorum necessitatibus qui quos. Cum, delectus nam voluptatibus eos possimus minima blanditiis accusamus numquam nobis minus fugiat expedita a nisi quis pariatur totam sapiente saepe suscipit vitae quibusdam reprehenderit. Voluptas sint similique consectetur molestias adipisci placeat tempora temporibus expedita sed nostrum iste, omnis odio corrupti? Amet laborum omnis ipsa, praesentium sapiente sit nemo suscipit nam pariatur! Voluptatibus, consequuntur qui cupiditate a corporis eos iure quo, dignissimos voluptate quis quisquam optio sed sunt voluptatum eaque enim! Optio sint magnam explicabo esse neque eaque ut molestias placeat, ratione commodi illo voluptate ipsa quia quaerat cupiditate aliquid exercitationem. Veritatis sed neque, maxime atque necessitatibus quidem molestias, quaerat quam, aliquam eos est temporibus obcaecati doloremque mollitia animi debitis rem cum ipsa laborum repudiandae officiis tenetur placeat. Ab consectetur earum, autem, fugiat quisquam mollitia exercitationem, repellat modi eveniet minus explicabo tempora architecto incidunt ullam iste. Repellat est repudiandae illo, dolor magni similique maiores. Ducimus minima mollitia in aspernatur iste dolores est corrupti beatae, magnam corporis consequuntur ratione laborum quidem animi iusto repellat itaque? Ab neque harum dicta. Error nisi sequi, natus id ab mollitia amet tenetur ex debitis rerum itaque facilis sed laudantium sunt ipsum deleniti aspernatur voluptatibus quibusdam necessitatibus quasi saepe veritatis veniam doloremque. Officia magni blanditiis assumenda exercitationem asperiores explicabo veritatis accusantium eaque rem sapiente provident atque autem non fuga voluptates quis, doloremque reiciendis pariatur eveniet! Cupiditate atque saepe exercitationem distinctio reiciendis possimus obcaecati enim. Ut deserunt voluptatibus sapiente! Beatae repellat expedita aliquid voluptates ratione reprehenderit quam odio, praesentium placeat suscipit ipsam officia, quaerat ducimus sint dolore, qui possimus vitae! Unde sunt expedita est fugiat sapiente? Laborum iure ad explicabo molestiae consequuntur pariatur autem unde impedit veritatis saepe amet, at iusto cum quo perferendis quia voluptates harum, delectus optio recusandae accusamus eius distinctio reprehenderit. Minus, a.",
      author: "Иван",
      keywords: [
          "спорт", "волейбол"
      ],
      date: 1610346848019,
      link: 'localhost:3000'
  }
];

let users = [
  {
    nickname: "admin",
    firstName: "Denis",
    lastNane: "Shupenka",
    email: "imxrayz@gmail.com",
    password: "1234",
    isAdmin: true
  },
  {
    nickname: "demoUser",
    firstName: "Demo",
    lastNane: "User",
    email: "demo@gmail.com",
    password: "1111",
    isAdmin: false
  }
];

const rssUrls = [
  "https://news.tut.by/rss/index.rss",
  "https://lenta.ru/rss/top7"
];

const App: React.FC = () => {

  const [news, setNews] = useState<INews[]>(initialNews);
  const [allNews, setAllNews] = useState<INews[]>(initialNews);
  const [visible, setVisible] = useState(false);
  const [loginVisible, setLoginVisible] = useState(false);
  const [registerVisible, setRegisterVisible] = useState(false);
  const [isAuth, setAuth] = useState(false);
  const [loggedUser, setLoggedUser] = useState<IUsers>();
  const [usersList, setUsersList] = useState<IUsers[]>(users);
  const [editing, setEditing] = useState<INews>();
  const [editinIndex, setEditingIndex] = useState(-1);
  const [searchValue, setSearchValue] = useState('');
  const [selectValue, setSelectValue] = useState('new');
  const [rssChanels, setRssChanels] = useState(rssUrls);

  useEffect(() => {

    const Users = localStorage.getItem("users");
    if (typeof Users === 'string') {
      const usersList = JSON.parse(Users);
      setUsersList(usersList);
    } else {
      localStorage.setItem("users", JSON.stringify(users));
      setUsersList(users);
    }

    const user = localStorage.getItem("loggedUser");
    if( typeof user === 'string' ) {
      const loggedUser = JSON.parse(user)
      loggedUserHandler(loggedUser);
      setAuth(true);
    }
  }, [])

  //RSS chanels handlers

  useEffect(() => {
    rssChanels.forEach(url => {
      fetch(url)
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
          const items = data.querySelectorAll("item");
          items.forEach(el => {
            let title =  el.querySelector("title")?.textContent;
            title = typeof title == 'string' ? title : 'Неизвестный формат';
            let author = el.querySelector("creator") 
            ? el.querySelector("creator")?.textContent : el.querySelector("name") 
            ? el.querySelector("name")?.textContent : el.querySelector("author")?.textContent;
            author = typeof author == 'string' ? author : 'Автор неизвестен';
            let text = el.querySelector("description")?.textContent;
            text = typeof text == 'string' ? text : 'Нет содержания';
            let date = el.querySelector("pubDate")?.textContent;
            let link = el.querySelector("link")?.textContent;
            link = typeof link == 'string' ? link : "localhost:3000";
            const itemDate = date ? Date.parse(date) : Date.now();

            const keywords = [author];
            const itemNews = {       
              title,
              author,
              text,
              keywords,
              date: itemDate,
              link: link
            }
            addNews(itemNews)
          })
        });
    })
  }, [rssChanels])

  const addChannel = (channel:string) => {
    setRssChanels(prev => [channel, ...prev])
  };

  const removeChannel = (id:number) => {
    const filtered = rssChanels.filter((item, index) => id !== index);
    setRssChanels(filtered);
  };

  //News handlers

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

  const filterNews = (keyword?: string, author?: string) => {
    if (keyword === 'allNews') {
      setNews(allNews)
    } else if (keyword) {
      const filtered = allNews.filter(item => {
        return item.keywords.includes(keyword);
      });
      setNews(filtered);
    } else if (author) {
      const filtered = allNews.filter(item => {
        return item.author === author;
      });
      setNews(filtered);
    }
  }

  const editItem = (id: number) => {
    setEditing(news[id]);
    setVisible(true);
    setEditingIndex(id);
  }

  const searchNews = (value: string) => {
    if(value.length === 0) {
      return news;
    }
    return news.filter((item) => {
        return item.title.toLowerCase().indexOf(value.toLowerCase()) > -1 || item.text.toLowerCase().indexOf(value.toLowerCase()) > -1
    })
  }

  const onSearch = (value: string) => {
    setSearchValue(value);
  }

  const onSortSelect = (value: string) => {
    setSelectValue(value);
  }

  const dateSort = (term: string, items: INews[]) => {
    switch(term) {
      case "new":
        return items.sort((a,b) => b.date - a.date);
      case "old":
        return items.sort((a,b) => a.date - b.date);
      case "last24":
        return items.filter((item) => {
          return item.date > (Date.now() - 86400000);
        });
      case "lastWeek":
        return items.filter((item) => {
          return item.date > (Date.now() - 604800000);
        });
      case "lastMonth":
        return items.filter((item) => {
          return item.date > (Date.now() - 2592000000);
        });
      default:
        return items;
    }
  }

  const visibleNews = dateSort(selectValue, searchNews(searchValue));

  //Register and login handlers

  const registerUser = (user: IUsers) => {
    const chekedNick = users.filter(i => {
      return i.nickname === user.nickname;
    });
    const chekedEmail = users.filter(i => {
      return i.email === user.email;
    });
    if (chekedEmail.length > 0) {
      return "Пользователь с таким email уже зарегистрирован";
    } else if (chekedNick.length > 0) {
      return "Пользователь с таким никнеймом уже зарегистрирован";
    }
    setUsersList(prev => [...prev, user]);
    localStorage.setItem("users", JSON.stringify(usersList));
    return 'Регистрация прошла успешно, войдите в систему';
  }

  const loggedUserHandler = (user: IUsers) => {
    setLoggedUser(user);
  } 

  const logoutHandler = () => {
    setAuth(false);
    setLoggedUser(undefined);
    localStorage.removeItem("loggedUser");
  }

  const toogleVisible = () => {
    if(isAuth) {
      setVisible(prev => !prev);
    } else {
      setLoginVisible(prev => !prev);
    } 
  }

  const toogleRegisterVisible = () => {
    setRegisterVisible(prev => !prev);
  }

  const toogleLoginVisible = () => {
    setLoginVisible(prev => !prev);
  }


  const login = (nick: string, password: string) => {
    const user = usersList.find((item) => {
      if (item.nickname === nick && item.password === password) {
        return item;
      } else {
        return false;
      }
    });
    if (user) {
      loggedUserHandler(user);
      localStorage.setItem('loggedUser', JSON.stringify(user));
      setAuth(true);
      return 'ok';
    } else {
      return "Пользователь не найден"
    }
  }

  return (
    <BrowserRouter>
    <div className="container">
      <Header logoutHandler={logoutHandler} isAuth={isAuth} loggedUser={loggedUser} show={toogleVisible} showRegister={toogleRegisterVisible} showLogin={toogleLoginVisible} />
      <AddForm loggedUser={loggedUser} isAuth={isAuth} editing={editing} addNews={addNews} visible={visible} hide={toogleVisible} />
      <RegisterForm registerUser={registerUser} visible={registerVisible} hide={toogleRegisterVisible} />
      <LoginForm login={login} visible={loginVisible} hide={toogleLoginVisible} />
      <div className="content">
        <Switch>
          <Route render={() => (
            <MainPage 
              onSearch={onSearch} 
              onSelect={onSortSelect}
              allKeywords={allKeywords} 
              filter={filterNews} 
              news={visibleNews} 
              remove={removeItem} 
              edit={editItem} 
            />
          )} path="/" exact />
          <Route component={HelpPage} path="/help"/>
          <Route render={() => (
            <AdminPage 
              loggedUser={loggedUser}
              chanels={rssChanels}
              addChannel={addChannel}
              removeChannel={removeChannel}
            />
          )
          } path="/admin" />
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
