<template>
    <div class="main" name="main">
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div class="container1" 
        v-for="(news, i) in newss" 
          :key="i"
          :title="news.articles" 
          :description="news.description"
          :style="{ 'background-image': 'url(' + news.urlToImage + ')'}"
          :url="news.url"
          :publishedAt="news.publishedAt"
        >
            <div class="titler">
                <div class="news-title">{{news.title}}</div>
                <div class="large-dis">
                    {{news.description}}
                </div>
                <div class="tiny-title">
                    Author {{news.author}}
                </div>
                <div class="linker">
                    <a :href="news.url">Читать источник...</a>
                </div>
                <div class='date'>
                    date: {{news.publishedAt}}
                </div>
            </div>
        </div>
    </div>
</template>
<script src="https://unpkg.com/vue"></script>
<script>
export default{
    name: 'main',
    data() {
        return{
            newss: [],
        }
    },
    methods:{
        NewsUSA(){
            this.axios.get("https://newsapi.org/v2/top-headlines?country=ru&apiKey=4e5ab9f46eda4bbd97a0501914593410")
            .then( (response)=>{
                this.newss=response.data.articles;
                }
            )
            
    },
    },
    mounted(){
        this.NewsUSA();
    }
  }
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
.container1{
    width:100%;
    height:500px;
    margin-bottom:100px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    background-image:url;
    background-size:cover;
    background-position-y: -20px;
    overflow:hidden;
    font-family: 'Ubuntu', sans-serif;
    animation: fadeInUp; 
    animation-duration: 1s; 
}
.usa{
    color:black;
}
.titler{
    width:100%;
    height:200px;
    padding-left:30px;
    padding-top:30px;
    font-size:32px;
    color:white;
    text-shadow:0px 0px 15px rgba(0,0,5);
}
.tiny-title{
    font-size:15px;
    letter-spacing: 1px;
    padding-top:10px;
    font-weight: 500;
    text-decoration: none;
}
.large-dis{
    font-size:20px;
    padding-top:40px;
    padding-bottom:5px;
    font-weight: 300;
    text-decoration: none;
    text-shadow:1px 2px 10px rgba(0,0,5);
}
.news-title{
    font-size:32px;
    color:white;
    font-weight: 700;
    text-decoration: underline;
}
.linker{
    padding-top:20px;
    text-shadow:0px 0px 5px rgba(0,0,5);
    text-decoration:none;
    cursor:pointer;
    font-weight:300;
    font-size:20px;
    transition-duration: 1s;
}
.linker a{
    text-decoration:none;
    color: white !important;
}
.date{
    font-size:15px;
    color:white !important;
    text-shadow:0px 0px 5px rgba(0,0,5);
    letter-spacing: 1px;
}
</style>