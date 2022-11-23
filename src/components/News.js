import React, { Component } from 'react'
import Newscomponent from './Newscomponent'

export default class News extends Component {
 

  constructor(){
    super();
    this.state = {
      articles :[],
      loading : false,
      page:1
    }
  }
 async componentDidMount(){
     let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey={b97056da160f4ee08adb7306ba45dbe}9&pageSize=20";
     let data = await fetch(url);
    //  console.log(data.json())
     let parsedData = await data.json();
     console.log(parsedData.articles)
     this.setState({articles : parsedData.articles, totalArticles : parsedData.totalResults})
 }
  handlePrevClick= async()=>{
      console.log("Prev clicked")
      if (this.state.page-1 < Math.ceil(this.state.totalArticles/20)){

      }
      else {

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b97056da160f4ee08adb7306ba45dbe9&page= ${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        //  console.log(data.json())
        let parsedData = await data.json();
        console.log(parsedData.articles)
        this.setState(
          {page: this.state.page-1, 
            articles : parsedData.articles})
          }
        }
   handleNextClick= async()=>{
     console.log("Next Clicked");
     if (this.state.page+1 > Math.ceil(this.state.totalArticles/20))
     {

     }
     else {

       let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=b97056da160f4ee08adb7306ba45dbe9&page= ${this.state.page+1}&pageSize=20`;
       let data = await fetch(url);
       //  console.log(data.json())
       let parsedData = await data.json();
       console.log(parsedData.articles)
       this.setState(
         {page: this.state.page+1, 
          articles : parsedData.articles})
          
        }
  }
  render() {
    return (
      <div className='container  my-3' >
        <h1>Top Business Newses Of India </h1>
        <div className="row"  >
         
        {this.state.articles.map((element)=>{return  <div className="col-md-4" key={element.url}> <Newscomponent title={element.title}description={element.description} imageurl={element.urlToImage} newsurl={element.url}/></div>   })  } 
         
               
        </div>
        <div className="container d-flex justify-content-between my-3">
        <button type="button" class="btn btn-primary" onClick={this.handlePrevClick}>Previous</button>
        <button type="button" class="btn btn-primary" onClick={this.handleNextClick}>Next</button>
        </div>
      </div>
    )
  }
}
