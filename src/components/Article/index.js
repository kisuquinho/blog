import Post from '../Post';

const Article = () =>{
    return (
        <section className="container">
            <h3>Articles</h3>
            <div className="mt-3 container-posts">
                <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
                    1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper lorem vitae maximus volutpat. Sed nibh diam, porta a finibus vitae, laoreet consectetur lectus. Suspendisse et odio vitae turpis aliquet tincidunt.
                </Post>
                <Post subtitle="fotografia" title="Quais as melhores câmeras em 2021">
                    2Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper lorem vitae maximus volutpat. Sed nibh diam, porta a finibus vitae, laoreet consectetur lectus. Suspendisse et odio vitae turpis aliquet tincidunt.
                </Post>
                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                    3Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper lorem vitae maximus volutpat. Sed nibh diam, porta a finibus vitae, laoreet consectetur lectus. Suspendisse et odio vitae turpis aliquet tincidunt.
                </Post>
            </div>
        </section>
    )
}

export default Article;