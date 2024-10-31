import React from 'react'
import './portfolio.scss'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import PageHeader from './../../components/PageHeader/PageHeader';
import {
  portfolio1, portfolio2, portfolio3, portfolio4,
  music1, music2,
  theater1, theater2, theater3,
  foodie1, foodie2, foodie3, foodie4, foodie5,
  ec1, ec2, ec3, ec4,
  game1, game2, game3, game4, game5,
  movie1, movie2, movie3, movie4, movie5,
} from '../../assets/portfolio/portfolio'
import PortfolioDetail from '../../components/PortfolioCard/PortfolioDetail';
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
const portfolio = [
  {
    id: 1,
    thumbUrl: [foodie1, foodie2, foodie3, foodie4, foodie5],
    date: '2021年10月15日ー2021年11月23日',
    title: 'MyFoodie',
    description: '中央情報専門学校のプレゼンテーショングランプリ大会で1年生の制作部門(技術)「2位」を取りました作品です。ウェブサイトのテーマは「マイフーディ」です。中国、ベトナム、日本の料理の特徴や具体的なレシピを紹介しました。さらに「国の紹介」ページ、「ミニゲーム」ページ、「お問合せ」ページ、そしてページ内検索機能など、チーム全員がやりたいコンテンツをどんどん追加していきました。仕事量が増えるよりもスケジュール管理が大変だったのですが、全員が満足する良い作品を完成させました。 ',
    role: 'フロントエンド',
    frontend: ['CSS', 'Bootstrap', 'Javascript'],
    backend: 'Java, Spring Boot, MySQL',
    source: 'https://github.com/LaPhuocLoc/MyFoodie2',
    // preview: 'https://rokku-food.netlify.app/',
    video: 'https://www.youtube.com/watch?v=rx-fLzNr1eM',
    tags: ['personal']
  },
  {
    id: 2,
    thumbUrl: [movie1, movie2, movie3, movie4, movie5],
    date: '2022年3月4日ー2022年3月14日',
    title: 'Movie App',
    description: 'フロントエンドはSCSSとReact,バックエンドはTMDB APIを利用して、動画配信サービスのネットフリックスのようなWEBサイトを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'The Movie Database (TMDB) API',
    source: 'https://github.com/LaPhuocLoc/movie-app',
    // preview: 'https://rokku-movie.netlify.app/',
    video: 'https://youtu.be/EwX2gFZFobA',
    tags: ['professional']
  },
  {
    id: 3,
    thumbUrl: [game1, game2, game3, game4, game5],

    date: '2022年2月2日ー2022年2月16日',
    title: 'Game Landing Page',
    description: 'SCSSやReactJSを利用し、レスポンシブのゲームランディングページを作成しました。',
    role: 'フロントエンド',
    frontend: ['SCSS', 'React'],
    backend: 'なし',
    source: 'https://github.com/LaPhuocLoc/landing-page',
    // preview: 'https://rokku-game.netlify.app/',
    video: 'https://youtu.be/Agv30p2llrU',
    tags: ['personal']
  },

]

const Portfolio = () => {
  return (
    <>
      <div className="slide"></div>
      <div className="section portfolio mb-3" data-aos="fade-up">
        <PageHeader white='my' yellow='portfolio' titleBg='works' />
        <div className="container">
          <Tabs className="tab" defaultIndex={0}>
            <TabList className="tab__nav">
              <Tab className="tab__nav-item">Professional Projects</Tab>
              <Tab className="tab__nav-item">Personal project</Tab>
            </TabList>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('personal')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
            <TabPanel className="tab__panel">
              {
                portfolio.filter(item => item.tags.includes('professional')).map((filteredItem, i) => (
                  <PortfolioCard item={filteredItem} id={filteredItem.id} key={i} />
                ))
              }
            </TabPanel>
          </Tabs>
        </div>
      </div>
      {portfolio.map((item, i) => (
        <PortfolioDetail item={item} id={item.id} key={i} />
      ))}
    </>
  )
}

export default Portfolio